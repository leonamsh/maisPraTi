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

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

// class LinkedList {
//     constructor() {
//         this.head=null;
//     }
//     inserirInicio(v){
//         let novo = new Node(v);
//         novo.proximo = this.head;
//         this.head = novo;
//     }
//     imprimir(){
//         let atual = this.head;
//         let str = "";
//         while(atual){
//             str+= atual.valor + "->";
//             atual = atual.proximo;
//         }
//         str+= 'null';
//         console.log(str);
//     }
// }

// let lista = new LinkedList();

// lista.inserirInicio(10);
// lista.inserirInicio(9);

// lista.imprimir();

//doublylinkedlist

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  inserirInicio(v) {
    let novo = new Node(v);
    novo.next = this.head;
    if (this.head) {
      this.head.anterior = novo;
    }
    this.head = novo;
  }
  inserirFim() {}
  imprimirFrente() {}
  imprimirAtras() {}
}
