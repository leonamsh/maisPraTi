import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

// CLASSE BASE ABSTRATA
// Define os atributos e comportamentos comuns a todos os funcionários.
abstract class Funcionario {
    // Atributos protected são visíveis para a classe e suas subclasses[cite: 13].
    protected String nome;
    protected BigDecimal salario;

    public Funcionario(String nome, BigDecimal salario) {
        // Garante que salários sejam positivos.
        if (salario == null || salario.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("O salário não pode ser nulo ou negativo.");
        }
        this.nome = nome;
        this.salario = salario;
    }

    // Getters são públicos para acesso externo[cite: 13].
    public String getNome() { return nome; }
    public BigDecimal getSalario() { return salario; }

    // Método abstrato: Força as classes filhas a fornecerem sua própria lógica de cálculo.
    public abstract BigDecimal calcularBonus();
}

// CLASSE FILHA 1: Gerente
class Gerente extends Funcionario {
    public Gerente(String nome, BigDecimal salario) {
        // super() chama o construtor da classe pai (Funcionario).
        super(nome, salario);
    }

    // Sobrescreve o método calcularBonus com a regra específica para Gerente.
    @Override
    public BigDecimal calcularBonus() {
        // Bônus de 20% do salário para gerente[cite: 14].
        return this.salario.multiply(new BigDecimal("0.20")).setScale(2, RoundingMode.HALF_UP);
    }
}

// CLASSE FILHA 2: Desenvolvedor
class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, BigDecimal salario) {
        super(nome, salario);
    }

    // Sobrescreve o método calcularBonus com a regra específica para Desenvolvedor.
    @Override
    public BigDecimal calcularBonus() {
        // Bônus de 10% do salário para desenvolvedor[cite: 14].
        return this.salario.multiply(new BigDecimal("0.10")).setScale(2, RoundingMode.HALF_UP);
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio3_Heranca {
    public static void main(String[] args) {
        // Criando instâncias das classes filhas
        Funcionario gerente = new Gerente("Carla Souza", new BigDecimal("12000.00"));
        Funcionario desenvolvedor = new Desenvolvedor("Marcos Andrade", new BigDecimal("7500.00"));

        // Colocando diferentes funcionários em uma coleção do tipo List<Funcionario> 
        List<Funcionario> todosOsFuncionarios = new ArrayList<>();
        todosOsFuncionarios.add(gerente);
        todosOsFuncionarios.add(desenvolvedor);

        System.out.println("--- Relatório de Bônus dos Funcionários ---");

        // Exibindo o bônus de cada um 
        // O polimorfismo acontece aqui: a mesma chamada f.calcularBonus()
        // executa o método correto (do Gerente ou do Desenvolvedor) em tempo de execução.
        for (Funcionario f : todosOsFuncionarios) {
            String cargo = f.getClass().getSimpleName(); // Pega o nome da classe real
            System.out.printf(
                    "Funcionário(a): %-18s | Cargo: %-13s | Bônus: R$ %.2f%n",
                    f.getNome(),
                    cargo,
                    f.calcularBonus()
            );
        }
    }
}