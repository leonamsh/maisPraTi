// // explicação de listas
// let car = {
//     nome: 'McQueen',
//     cor: 'Vermelho'
// }

// let car2 = {
//     nome: 'Sally',
//     cor: 'Azul'
// }

// console.log(car.nome);

// class carExemplo {
//     constructor(nome, cor) {
//         this.nome = nome
//         this.cor = cor
//     }
// }

// let car3 = new carExemplo('Camaro', 'Amarelo')

// console.log(car3.nome);

// class Node {
//   constructor(valor) {
//     this.valor = valor;
//     this.proximo = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   inserirInicio(v) {
//     let novo = new Node(v);
//     novo.proximo = this.head;
//     this.head = novo;
//   }
//   imprimir() {
//     let atual = this.head;
//     let str = "";
//     while (atual) {
//       str += atual.valor + "->";
//       atual = atual.proximo;
//     }
//     str += "null";
//     console.log(str);
//   }
// }

// let lista = new LinkedList();

// lista.inserirInicio(10);
// lista.inserirInicio(9);

// lista.imprimir();

//doublylinkedlist

class Node {
  constructor(valor) {
    this.valor = valor
    this.proximo = null
    this.anterior = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Insere no início da lista
  inserirInicio(v) {
    let novo = new Node(v)
    if (!this.head) {
      this.head = this.tail = novo
    } else {
      novo.proximo = this.head
      this.head.anterior = novo
      this.head = novo
    }
    this.length++
  }

  // Insere no final da lista
  inserirFim(v) {
    let novo = new Node(v)
    if (!this.head) {
      this.head = this.tail = novo
    } else {
      this.tail.proximo = novo
      novo.anterior = this.tail
      this.tail = novo
    }
    this.length++
  }

  // Insere em ordem crescente
  inserirEm(v) {
    let novo = new Node(v)

    if (!this.head) {
      this.head = this.tail = novo
    } else {
      let atual = this.head
      while (atual && atual.valor < v) {
        atual = atual.proximo
      }

      if (atual) {
        // Inserir antes do nó atual
        novo.proximo = atual
        novo.anterior = atual.anterior

        if (atual.anterior) {
          atual.anterior.proximo = novo
        } else {
          this.head = novo
        }

        atual.anterior = novo
      } else {
        // Inserir no final
        this.tail.proximo = novo
        novo.anterior = this.tail
        this.tail = novo
      }
    }

    this.length++
  }

  // Remove elemento pelo valor
  removerEm(v) {
    let atual = this.head

    while (atual && atual.valor !== v) {
      atual = atual.proximo
    }

    if (!atual) {
      console.log('Valor não encontrado.')
      return
    }

    if (atual.anterior) {
      atual.anterior.proximo = atual.proximo
    } else {
      this.head = atual.proximo // Remover head
    }

    if (atual.proximo) {
      atual.proximo.anterior = atual.anterior
    } else {
      this.tail = atual.anterior // Remover tail
    }

    this.length--
  }

  // Imprime a lista do início ao fim
  imprimirFrente() {
    let atual = this.head
    let str = ''
    while (atual) {
      str += atual.valor + '<->'
      atual = atual.proximo
    }
    str += 'null'
    console.log(str)
  }

  // Imprime a lista do fim ao início
  imprimirAtras() {
    let atual = this.tail
    let str = ''
    while (atual) {
      str += atual.valor + '<->'
      atual = atual.anterior
    }
    str += 'null'
    console.log(str)
  }
}

let lista = new DoublyLinkedList()
lista.inserirInicio(10)
lista.inserirFim(20)
lista.inserirEm(15) // Deve colocar entre 10 e 20

lista.imprimirFrente() // 10<->15<->20<->null
lista.imprimirAtras() // 20<->15<->10<->null

lista.removerEm(15)
lista.imprimirFrente() // 10<->20<->null

//
