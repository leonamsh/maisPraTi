import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// EXCEÇÃO CUSTOMIZADA
class EntidadeNaoEncontradaException extends RuntimeException {
    public EntidadeNaoEncontradaException(String message) {
        super(message);
    }
}

// INTERFACE PARA GARANTIR QUE A ENTIDADE TENHA UM ID
// Usamos <ID> para tornar até o tipo do ID genérico (pode ser Long, String, UUID, etc.)
interface Identificavel<ID> {
    ID getId();
}

// INTERFACE DO REPOSITÓRIO GENÉRICO
// T é o tipo da entidade, ID é o tipo do identificador da entidade.
// "T extends Identificavel<ID>" garante que qualquer tipo T usado aqui
// terá um método getId() que retorna um tipo ID.
interface IRepository<T extends Identificavel<ID>, ID> {
    void salvar(T entidade);
    Optional<T> buscarPorId(ID id); // Retorna Optional para tratar ausência de forma segura
    List<T> listarTodos();
    void remover(ID id) throws EntidadeNaoEncontradaException;
}

// IMPLEMENTAÇÃO GENÉRICA EM MEMÓRIA
class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> bancoDeDados = new HashMap<>();

    @Override
    public void salvar(T entidade) {
        bancoDeDados.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        // O Optional.ofNullable cria um Optional vazio se o valor for nulo,
        // ou um Optional com o valor se não for.
        return Optional.ofNullable(bancoDeDados.get(id));
    }

    @Override
    public List<T> listarTodos() {
        // Retorna uma CÓPIA IMUTÁVEL da lista de valores.
        // Isso impede que o código externo modifique nosso banco de dados interno.
        return Collections.unmodifiableList(new ArrayList<>(bancoDeDados.values()));
    }

    @Override
    public void remover(ID id) throws EntidadeNaoEncontradaException {
        if (!bancoDeDados.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada.");
        }
        bancoDeDados.remove(id);
    }
}

// --- ENTIDADES DE EXEMPLO ---
class Produto implements Identificavel<Long> {
    private final Long id;
    private final String nome;
    public Produto(Long id, String nome) { this.id = id; this.nome = nome; }
    @Override public Long getId() { return id; }
    public String getNome() { return nome; }
    @Override public String toString() { return "Produto{id=" + id + ", nome='" + nome + "'}"; }
}

class Cliente implements Identificavel<String> {
    private final String cpf; // Usando CPF (String) como ID
    private final String nome;
    public Cliente(String cpf, String nome) { this.cpf = cpf; this.nome = nome; }
    @Override public String getId() { return cpf; }
    public String getNome() { return nome; }
    @Override public String toString() { return "Cliente{cpf='" + cpf + "', nome='" + nome + "'}"; }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio7_Generics {
    public static void main(String[] args) {
        // --- Usando o Repositório para Produtos (ID é Long) ---
        System.out.println("--- Gerenciando Produtos ---");
        IRepository<Produto, Long> repoProdutos = new InMemoryRepository<>();
        repoProdutos.salvar(new Produto(1L, "Teclado Mecânico"));
        repoProdutos.salvar(new Produto(2L, "Mouse Vertical"));

        System.out.println("Todos os produtos: " + repoProdutos.listarTodos());

        // Busca por um produto que existe, tratando com Optional
        repoProdutos.buscarPorId(1L)
                .ifPresent(p -> System.out.println("Produto encontrado: " + p.getNome()));

        // Busca por um produto que não existe
        repoProdutos.buscarPorId(99L)
                .ifPresentOrElse(
                        p -> System.out.println("Encontrou o inesperado!"),
                        () -> System.out.println("Produto 99L não encontrado, como esperado.")
                );

        // --- Usando O MESMO Repositório para Clientes (ID é String) ---
        System.out.println("\n--- Gerenciando Clientes ---");
        IRepository<Cliente, String> repoClientes = new InMemoryRepository<>();
        repoClientes.salvar(new Cliente("123.456.789-00", "Carlos Pereira"));

        System.out.println("Todos os clientes: " + repoClientes.listarTodos());

        try {
            repoClientes.remover("123.456.789-00");
            System.out.println("Cliente removido com sucesso.");
            System.out.println("Clientes restantes: " + repoClientes.listarTodos());
            repoClientes.remover("999.999.999-99"); // Isso vai lançar a exceção
        } catch(EntidadeNaoEncontradaException e) {
            System.err.println("ERRO CAPTURADO: " + e.getMessage());
        }
    }
}