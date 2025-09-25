// /codifica
// Formação Desenvolvedor Full Stack Júnior

// A classe Produto encapsula seus dados.
// Só é possível interagir com os dados através dos métodos públicos.
class Produto {
    // Atributos são privados para que não possam ser acessados ou modificados diretamente.
    private String nome;
    private double preco;
    private int quantidadeEmEstoque;

    public Produto(String nome, double preco, int quantidadeEmEstoque) {
        // O construtor já utiliza os setters para garantir que o objeto
        // seja criado em um estado válido desde o início.
        this.setNome(nome);
        this.setPreco(preco);
        this.setQuantidadeEmEstoque(quantidadeEmEstoque);
    }

    // --- MÉTODOS GETTERS (para ler os dados) ---
    public String getNome() { return nome; }
    public double getPreco() { return preco; }
    public int getQuantidadeEmEstoque() { return quantidadeEmEstoque; }

    // --- MÉTODOS SETTERS (para modificar os dados com validação) ---
    public void setNome(String nome) {
        // Validação exigida no Exercício 1 [cite: 6]
        if (nome == null || nome.trim().isEmpty()) {
            // Lança uma exceção se a regra for violada [cite: 7]
            throw new IllegalArgumentException("O nome não pode ser nulo ou vazio.");
        }
        this.nome = nome;
    }

    public void setPreco(double preco) {
        // Validação exigida no Exercício 1 [cite: 6]
        if (preco < 0) {
            throw new IllegalArgumentException("O preço não pode ser negativo.");
        }
        this.preco = preco;
    }

    public void setQuantidadeEmEstoque(int quantidadeEmEstoque) {
        // Validação exigida no Exercício 1 [cite: 6]
        if (quantidadeEmEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque não pode ser negativa.");
        }
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    // --- MÉTODO COM REGRA DE NEGÓCIO (Exercício 2) ---
    public void aplicarDesconto(double porcentagem) {
        // Validação da regra: permitir apenas valores entre 0 e 50
        if (porcentagem < 0 || porcentagem > 50) {
            // Lança uma exceção se a regra for violada
            throw new IllegalArgumentException("A porcentagem de desconto deve estar entre 0 e 50.");
        }
        // Aplica o desconto ao preço atual
        this.preco *= (1 - (porcentagem / 100.0));
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio1e2_Produto {
    public static void main(String[] args) {
        System.out.println("--- DEMONSTRAÇÃO EXERCÍCIO 1: Encapsulamento e Validação ---");

        // Tentando criar um produto com um valor inválido (preço negativo)
        try {
            System.out.println("Tentando criar produto com preço -50...");
            new Produto("Mousepad", -50.0, 100);
        } catch (IllegalArgumentException e) {
            System.out.println("SUCESSO AO CAPTURAR ERRO: " + e.getMessage());
        }

        // Criando um produto válido para os próximos testes [cite: 7]
        Produto p1 = new Produto("Teclado Mecânico", 350.0, 50);
        System.out.println("\nProduto criado com sucesso: " + p1.getNome());

        // Tentando atribuir um valor inválido via setter [cite: 7]
        try {
            System.out.println("Tentando alterar estoque para -10...");
            p1.setQuantidadeEmEstoque(-10);
        } catch (IllegalArgumentException e) {
            System.out.println("SUCESSO AO CAPTURAR ERRO: " + e.getMessage());
        }

        System.out.println("\n--- DEMONSTRAÇÃO EXERCÍCIO 2: Regra de Negócio do Desconto ---");
        System.out.printf("Preço original do produto: R$%.2f%n", p1.getPreco());

        // Aplicando um desconto válido [cite: 11]
        p1.aplicarDesconto(15); // 15%
        System.out.printf("Preço após desconto de 15%%: R$%.2f%n", p1.getPreco());

        // Tentando aplicar um desconto inválido (fora da faixa) [cite: 11]
        try {
            System.out.println("Tentando aplicar desconto de 60%...");
            p1.aplicarDesconto(60);
        } catch (IllegalArgumentException e) {
            System.out.println("SUCESSO AO CAPTURAR ERRO: " + e.getMessage());
        }

        System.out.printf("Preço final do produto: R$%.2f%n", p1.getPreco());
    }
}