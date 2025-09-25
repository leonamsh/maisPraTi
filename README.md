# Lista de Exercícios de Java - Foco em Orientação a Objetos

Este repositório contém a resolução de uma série de exercícios de Java focados nos pilares da Programação Orientada a Objetos (POO), ideal para estudantes e desenvolvedores que buscam solidificar seus conhecimentos.

Os exercícios abordam desde conceitos fundamentais como Encapsulamento até padrões de projeto como Strategy, todos resolvidos em arquivos `.java` autocontidos para facilitar o estudo e a execução.

## 🚀 Pré-requisitos

Para compilar e executar os projetos, você precisará ter o **Java Development Kit (JDK)** instalado em sua máquina. Recomenda-se a versão **17 ou superior**.

- [Download do OpenJDK](https://adoptium.net/) (Recomendado)

Você pode verificar sua versão do Java com o comando no terminal:

```bash
java -version
```

## 📂 Estrutura do Repositório

Cada exercício (ou um grupo de exercícios sequenciais) está contido em seu próprio arquivo `.java`, nomeado de forma descritiva.

Exemplo:

- `Exercicio1e2_Produto.java`
- `Exercicio3_Heranca.java`
- `Exercicio4_Interface.java`
- ... e assim por diante.

Dentro de cada arquivo, você encontrará:

1. As classes e/ou interfaces necessárias para resolver o problema.
2. Uma classe `public` com um método `main` que serve como ponto de entrada para a demonstração e teste manual do exercício.

## 🛠️ Como Compilar e Executar (Via Linha de Comando)

Esta é a forma mais simples de rodar cada exercício individualmente.

1. **Clone o repositório** para sua máquina local:

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2. **Abra um terminal** e navegue até o diretório do projeto.

3. **Para compilar um exercício**, use o comando `javac`:

    ```bash
    # Exemplo compilando o exercício de Herança
    javac Exercicio3_Heranca.java
    ```

    Isso criará um arquivo `Exercicio3_Heranca.class`.

4. **Para executar o programa compilado**, use o comando `java` seguido do nome da classe principal:

    ```bash
    # Exemplo executando o exercício de Herança
    java Exercicio3_Heranca
    ```

    O resultado da demonstração contida no método `main` será impresso no console.

## ✨ Como Testar de Forma Profissional (JUnit + Maven)

Para um fluxo de trabalho profissional e testes automatizados, o ideal é estruturar o projeto usando uma ferramenta de build como o **Maven**.

### O que é o Maven?

O Maven gerencia as dependências do projeto (como a biblioteca JUnit) e automatiza o processo de compilação e teste.

### Estrutura de Pastas

Para usar o Maven, você precisa organizar os arquivos na seguinte estrutura:

```
seu-projeto/
├── pom.xml                 <-- Arquivo de configuração do Maven
└── src/
    ├── main/
    │   └── java/
    │       ├── Exercicio1e2_Produto.java
    │       └── ... (coloque os arquivos dos exercícios aqui)
    └── test/
        └── java/
            └── ProdutoTest.java  <-- Arquivo com os testes JUnit
```

### Configurando o Maven (`pom.xml`)

Crie um arquivo chamado `pom.xml` na raiz do projeto com o seguinte conteúdo. Ele informa ao Maven para usar o Java 17 e adicionar o JUnit 5 como dependência.

```xml
<project xmlns="[http://maven.apache.org/POM/4.0.0](http://maven.apache.org/POM/4.0.0)"
         xmlns:xsi="[http://www.w3.org/2001/XMLSchema-instance](http://www.w3.org/2001/XMLSchema-instance)"
         xsi:schemaLocation="[http://maven.apache.org/POM/4.0.0](http://maven.apache.org/POM/4.0.0) [http://maven.apache.org/xsd/maven-4.0.0.xsd](http://maven.apache.org/xsd/maven-4.0.0.xsd)">
    <modelVersion>4.0.0</modelVersion>

    <groupId>br.com.seunome</groupId>
    <artifactId>exercicios-java-oo</artifactId>
    <version>1.0.0</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.10.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-engine</artifactId>
            <version>5.10.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>3.1.2</version>
            </plugin>
        </plugins>
    </build>
</project>
```

### Executando os Testes Automatizados

Com o projeto estruturado e o `pom.xml` criado, você pode rodar todos os testes de unidade do projeto com um único comando:

```bash
mvn test
```

O Maven irá compilar todo o código-fonte, compilar os testes, executá-los e, ao final, apresentar um relatório de sucesso ou falha.

## 📋 Resumo dos Exercícios

- **Exercício 1 e 2:** Encapsulamento, Getters/Setters com validação e Regras de Negócio.
- **Exercício 3:** Herança, Classes Abstratas e Polimorfismo.
- **Exercício 4:** Polimorfismo com Interfaces.
- **Exercício 5:** Abstração e Template Method.
- **Exercício 6:** Imutabilidade e Objetos de Valor.
- **Exercício 7:** Generics e criação de um Repositório genérico.
- **Exercício 8:** Padrão de Projeto (Design Pattern) Strategy com Lambdas.

## 🧑‍💻 Autor

**[Seu Nome Aqui]**

- Github: `[@seu-usuario-github]`
- LinkedIn: `[seu-linkedin]`
