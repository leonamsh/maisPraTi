class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (!this.top) return null;
    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }
  // Implementacao de peek
  peek() {
    if (!this.top) {
      return null; // ou throw new Error("Pilha vazia")
    }
    return this.top.value;
  }
  // Implementacao de isEmpty
  isEmpty() {
    return this.top === null;
  }
}
