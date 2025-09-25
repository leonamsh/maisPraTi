import java.math.BigDecimal;

// EXCEÇÃO CUSTOMIZADA
// Criar nossas próprias exceções torna o código mais claro sobre o tipo de erro que ocorreu.
class PagamentoInvalidoException extends Exception {
    public PagamentoInvalidoException(String message) {
        super(message);
    }
}

// CLASSE ABSTRATA
// Define o "template" de como um pagamento funciona.
abstract class FormaPagamento {

    // Método abstrato: não tem corpo. As classes filhas SÃO OBRIGADAS a implementá-lo.
    public abstract void validarPagamento() throws PagamentoInvalidoException;

    // Método concreto: já tem uma implementação que será herdada por todos os filhos.
    // Ele define o fluxo/algoritmo principal.
    public void processarPagamento(BigDecimal valor) {
        try {
            // 1. Primeiro, chama o método de validação específico da subclasse.
            validarPagamento();

            // 2. Se a validação passar, o pagamento é processado.
            System.out.printf("Pagamento de R$ %.2f processado com sucesso via %s.%n",
                    valor, this.getClass().getSimpleName());

        } catch (PagamentoInvalidoException e) {
            // 3. Se a validação falhar, captura a exceção e informa o erro.
            System.err.printf("FALHA no pagamento de R$ %.2f via %s: %s%n",
                    valor, this.getClass().getSimpleName(), e.getMessage());
        }
    }
}

// IMPLEMENTAÇÃO 1: CartaoCredito
class CartaoCredito extends FormaPagamento {
    private String numeroCartao;

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Lógica de validação específica para cartão de crédito.
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número de cartão inválido. Deve conter 16 dígitos.");
        }
        System.out.println("Cartão de Crédito validado.");
    }
}

// IMPLEMENTAÇÃO 2: Boleto
class Boleto extends FormaPagamento {
    private String codigoBarras;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Lógica de validação específica para boleto.
        if (codigoBarras == null || codigoBarras.length() != 44) {
            throw new PagamentoInvalidoException("Código de barras de boleto inválido.");
        }
        System.out.println("Boleto validado.");
    }
}

// IMPLEMENTAÇÃO 3: Pix
class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        // Lógica de validação específica para Pix.
        if (chavePix == null || chavePix.trim().isEmpty()) {
            throw new PagamentoInvalidoException("Chave Pix não pode ser vazia.");
        }
        System.out.println("Chave Pix validada.");
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio5_Abstracao {
    public static void main(String[] args) {
        BigDecimal valorCompra = new BigDecimal("250.75");

        System.out.println("--- Simulando Pagamentos ---");

        // Cenário 1: Pagamento Válido com Cartão
        FormaPagamento cartaoValido = new CartaoCredito("1234567812345678");
        cartaoValido.processarPagamento(valorCompra);

        System.out.println("--------------------");

        // Cenário 2: Pagamento Inválido com Cartão
        FormaPagamento cartaoInvalido = new CartaoCredito("1234");
        cartaoInvalido.processarPagamento(valorCompra);

        System.out.println("--------------------");

        // Cenário 3: Pagamento Válido com Boleto
        FormaPagamento boletoValido = new Boleto("12345678901234567890123456789012345678901234");
        boletoValido.processarPagamento(valorCompra);

        System.out.println("--------------------");

        // Cenário 4: Pagamento Inválido com Pix
        FormaPagamento pixInvalido = new Pix(" ");
        pixInvalido.processarPagamento(valorCompra);
    }
}