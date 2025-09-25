import java.math.BigDecimal;

// O CONTEXTO: Pedido
// Contém os dados sobre os quais a estratégia irá operar.
class Pedido {
    private final BigDecimal valorTotal;
    public Pedido(BigDecimal valorTotal) { this.valorTotal = valorTotal; }
    public BigDecimal getValorTotal() { return valorTotal; }
}

// A INTERFACE DA ESTRATÉGIA
// É uma interface funcional, o que permite o uso de lambdas.
@FunctionalInterface
interface EstrategiaFrete {
    BigDecimal calcular(Pedido pedido);
}

// ESTRATÉGIAS CONCRETAS (Implementações como Classes)
class FreteSedex implements EstrategiaFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        // Lógica de cálculo complexa do Sedex (exemplo simplificado)
        return pedido.getValorTotal().multiply(new BigDecimal("0.1")).add(new BigDecimal("10")); // 10% + R$10
    }
}

class FretePac implements EstrategiaFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        // Lógica de cálculo do PAC
        return pedido.getValorTotal().multiply(new BigDecimal("0.05")).add(new BigDecimal("5")); // 5% + R$5
    }
}

// A CLASSE QUE USA A ESTRATÉGIA
class CalculadoraFrete {
    private EstrategiaFrete estrategia;

    // A estratégia pode ser injetada no construtor
    public CalculadoraFrete(EstrategiaFrete estrategiaInicial) {
        this.estrategia = estrategiaInicial;
    }

    // Ou pode ser trocada em tempo de execução
    public void setEstrategia(EstrategiaFrete estrategia) {
        this.estrategia = estrategia;
    }

    // O método de cálculo simplesmente delega para o objeto de estratégia atual
    public BigDecimal calcularFrete(Pedido pedido) {
        return estrategia.calcular(pedido);
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio8_Strategy {
    public static void main(String[] args) {
        Pedido pedido1 = new Pedido(new BigDecimal("150.00"));
        Pedido pedido2 = new Pedido(new BigDecimal("800.00"));

        System.out.println("--- Demonstração do Padrão Strategy ---");

        // 1. Começando com a estratégia SEDEX
        CalculadoraFrete calculadora = new CalculadoraFrete(new FreteSedex());
        System.out.printf("Frete SEDEX para pedido de R$%.2f: R$%.2f%n",
                pedido1.getValorTotal(), calculadora.calcularFrete(pedido1));

        // 2. Trocando a estratégia para PAC em tempo de execução
        calculadora.setEstrategia(new FretePac());
        System.out.printf("Frete PAC para pedido de R$%.2f: R$%.2f%n",
                pedido1.getValorTotal(), calculadora.calcularFrete(pedido1));

        // 3. Estratégia de Retirada na Loja (usando lambda)
        EstrategiaFrete retiradaNaLoja = (pedido) -> BigDecimal.ZERO;
        calculadora.setEstrategia(retiradaNaLoja);
        System.out.printf("Frete Retirada na Loja para pedido de R$%.2f: R$%.2f%n",
                pedido1.getValorTotal(), calculadora.calcularFrete(pedido1));

        // 4. Estratégia Promocional com LAMBDA: Frete grátis para pedidos acima de R$500
        System.out.println("\n--- Usando Estratégia Promocional (Lambda) ---");
        EstrategiaFrete fretePromocional = (p) -> {
            if (p.getValorTotal().compareTo(new BigDecimal("500.00")) > 0) {
                System.out.println("(Promoção aplicada: Frete Grátis!)");
                return BigDecimal.ZERO;
            } else {
                // Se não se qualificar, usa o PAC como padrão
                return new FretePac().calcular(p);
            }
        };
        calculadora.setEstrategia(fretePromocional);

        // Testando a promoção com o pedido pequeno
        System.out.printf("Frete Promocional para pedido de R$%.2f: R$%.2f%n",
                pedido1.getValorTotal(), calculadora.calcularFrete(pedido1));

        // Testando a promoção com o pedido grande
        System.out.printf("Frete Promocional para pedido de R$%.2f: R$%.2f%n",
                pedido2.getValorTotal(), calculadora.calcularFrete(pedido2));
    }
}