import java.util.ArrayList;
import java.util.List;

// A INTERFACE (O "CONTRATO")
// Define o que um meio de transporte DEVE ser capaz de fazer.
// Não há implementação aqui, apenas as assinaturas dos métodos.
interface IMeioTransporte {
    void acelerar(); // Aumenta a velocidade
    void frear();    // Diminui a velocidade
    int getVelocidadeAtual(); // Retorna a velocidade atual
}

// IMPLEMENTAÇÃO 1: Carro
class Carro implements IMeioTransporte {
    private int velocidadeAtual = 0;
    private static final int VELOCIDADE_MAXIMA = 200;

    @Override
    public void acelerar() {
        if (velocidadeAtual < VELOCIDADE_MAXIMA) {
            velocidadeAtual += 10;
            System.out.println("Carro acelerou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Carro já está na velocidade máxima!");
        }
    }

    @Override
    public void frear() {
        if (velocidadeAtual > 0) {
            velocidadeAtual -= 10;
            System.out.println("Carro freou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Carro já está parado.");
        }
    }

    @Override
    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }
}

// IMPLEMENTAÇÃO 2: Bicicleta
class Bicicleta implements IMeioTransporte {
    private int velocidadeAtual = 0;
    private static final int VELOCIDADE_MAXIMA = 30;

    @Override
    public void acelerar() {
        if (velocidadeAtual < VELOCIDADE_MAXIMA) {
            velocidadeAtual += 2;
            System.out.println("Bicicleta acelerou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Bicicleta já está na velocidade máxima!");
        }
    }

    @Override
    public void frear() {
        if (velocidadeAtual > 0) {
            velocidadeAtual -= 2;
            System.out.println("Bicicleta freou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Bicicleta já está parada.");
        }
    }

    @Override
    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }
}

// IMPLEMENTAÇÃO 3: Trem
class Trem implements IMeioTransporte {
    private int velocidadeAtual = 0;
    private static final int VELOCIDADE_MAXIMA = 300;

    @Override
    public void acelerar() {
        if (velocidadeAtual < VELOCIDADE_MAXIMA) {
            velocidadeAtual += 5;
            System.out.println("Trem acelerou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Trem já está na velocidade máxima!");
        }
    }

    @Override
    public void frear() {
        if (velocidadeAtual > 0) {
            velocidadeAtual -= 5;
            System.out.println("Trem freou para " + velocidadeAtual + " km/h.");
        } else {
            System.out.println("Trem já está parado.");
        }
    }

    @Override
    public int getVelocidadeAtual() {
        return velocidadeAtual;
    }
}


// CLASSE PRINCIPAL PARA TESTE
public class Exercicio4_Interface {
    public static void main(String[] args) {
        // Criamos uma lista do tipo da INTERFACE.
        List<IMeioTransporte> veiculos = new ArrayList<>();

        // Adicionamos objetos de CLASSES CONCRETAS que implementam a interface.
        veiculos.add(new Carro());
        veiculos.add(new Bicicleta());
        veiculos.add(new Trem());

        System.out.println("--- Acelerando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
            // A mesma chamada de método (acelerar) tem comportamentos diferentes
            // dependendo do objeto real. Isso é polimorfismo!
            veiculo.acelerar();
            veiculo.acelerar();
            System.out.println("--------------------");
        }

        System.out.println("\n--- Freando todos os veículos ---");
        for (IMeioTransporte veiculo : veiculos) {
            veiculo.frear();
            System.out.println("--------------------");
        }
    }
}