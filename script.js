class LinkedList {
  constructor() {
    this.headNode = null;
  }
  

  append(value) {    
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
      // console.log(this.headNode);
    } else {
      let currentNode = this.headNode;
      // console.log("Nodo actual es: ", currentNode);
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        // console.log(currentNode);
      }
      currentNode.nextNode = newNode;
      // console.log("Nodo actualizado a: ", currentNode);
    }
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

list.append(7);
list.append(5);
list.append(9);



// == Tareas ==
// Objeto con la lista [x]
// Objeto con el nodo [x]
// append(value)
//   si no hay head crear nodo