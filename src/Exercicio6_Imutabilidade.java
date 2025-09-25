import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

// Enum para Moeda
enum Moeda { BRL, USD, EUR }

// OBJETO DE VALOR IMUTÁVEL: Dinheiro
final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        this.valor = valor;
        this.moeda = moeda;
    }

    // Getters para acessar os valores
    public BigDecimal getValor() { return valor; }
    public Moeda getMoeda() { return moeda; }

    // Sobrescrevendo equals e hashCode para que seja um objeto de valor
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    @Override
    public String toString() {
        return String.format("%s %.2f", moeda, valor);
    }
}

// CLASSE IMUTÁVEL: Produto
final class Produto {
    private final String nome;
    private final Dinheiro preco;

    public Produto(String nome, Dinheiro preco) { this.nome = nome; this.preco = preco; }
    public String getNome() { return nome; }
    public Dinheiro getPreco() { return preco; }

    @Override
    public String toString() { return nome + " - " + preco; }
}

// CLASSE IMUTÁVEL: ItemCarrinho
final class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (quantidade <= 0) throw new IllegalArgumentException("Quantidade deve ser positiva.");
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() { return produto; }
    public int getQuantidade() { return quantidade; }
}

// CLASSE PRINCIPAL IMUTÁVEL: Carrinho
final class Carrinho {
    private final List<ItemCarrinho> itens;

    // Construtor padrão
    public Carrinho() {
        this.itens = Collections.emptyList();
    }

    // Construtor privado para uso interno
    private Carrinho(List<ItemCarrinho> itens) {
        // Garante que a lista interna seja imutável
        this.itens = Collections.unmodifiableList(itens);
    }

    // OPERAÇÃO QUE RETORNA UM NOVO CARRINHO
    public Carrinho adicionarItem(Produto p, int quantidade) {
        List<ItemCarrinho> novosItens = new ArrayList<>(this.itens);
        novosItens.add(new ItemCarrinho(p, quantidade));
        return new Carrinho(novosItens); // Retorna uma nova instância!
    }

    // OPERAÇÃO QUE RETORNA UM NOVO CARRINHO
    public Carrinho aplicarCupom(BigDecimal porcentagemDesconto) {
        if (porcentagemDesconto.compareTo(new BigDecimal("30.0")) > 0) {
            throw new IllegalArgumentException("Cupom máximo de 30%");
        }

        List<ItemCarrinho> itensComDesconto = new ArrayList<>();
        BigDecimal fatorDesconto = BigDecimal.ONE.subtract(porcentagemDesconto.divide(new BigDecimal("100.0")));

        for (ItemCarrinho item : this.itens) {
            BigDecimal novoValor = item.getProduto().getPreco().getValor().multiply(fatorDesconto).setScale(2, RoundingMode.HALF_UP);
            Dinheiro novoPreco = new Dinheiro(novoValor, item.getProduto().getPreco().getMoeda());
            Produto produtoComDesconto = new Produto(item.getProduto().getNome(), novoPreco);
            itensComDesconto.add(new ItemCarrinho(produtoComDesconto, item.getQuantidade()));
        }
        return new Carrinho(itensComDesconto); // Retorna uma nova instância!
    }

    public List<ItemCarrinho> getItens() {
        return itens; // Seguro, pois a lista é imutável
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio6_Imutabilidade {
    public static void main(String[] args) {
        Produto notebook = new Produto("Notebook", new Dinheiro(new BigDecimal("5000.00"), Moeda.BRL));
        Produto mouse = new Produto("Mouse", new Dinheiro(new BigDecimal("150.00"), Moeda.BRL));

        // 1. O carrinho começa vazio
        Carrinho carrinho1 = new Carrinho();
        System.out.println("Carrinho 1 (inicial): " + carrinho1.getItens().size() + " itens.");

        // 2. Adicionar um item CRIA um NOVO carrinho (carrinho2)
        Carrinho carrinho2 = carrinho1.adicionarItem(notebook, 1);
        System.out.println("Carrinho 1 (após adicionar): " + carrinho1.getItens().size() + " itens. (Permanece inalterado)");
        System.out.println("Carrinho 2 (novo): " + carrinho2.getItens().size() + " item.");

        // 3. Adicionar outro item ao carrinho2 CRIA um carrinho3
        Carrinho carrinho3 = carrinho2.adicionarItem(mouse, 2);
        System.out.println("Carrinho 2 (após adicionar): " + carrinho2.getItens().size() + " item. (Permanece inalterado)");
        System.out.println("Carrinho 3 (novo): " + carrinho3.getItens().size() + " itens.");

        // 4. Aplicar um cupom ao carrinho3 CRIA um carrinho4
        Carrinho carrinho4_comDesconto = carrinho3.aplicarCupom(new BigDecimal("10.0")); // 10% de desconto

        System.out.println("\n--- Itens no Carrinho 3 (Original) ---");
        carrinho3.getItens().forEach(item -> System.out.println(item.getProduto()));

        System.out.println("\n--- Itens no Carrinho 4 (Com Desconto) ---");
        carrinho4_comDesconto.getItens().forEach(item -> System.out.println(item.getProduto()));
    }
}