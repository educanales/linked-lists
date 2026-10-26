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

  prepend(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;
      this.headNode = newNode;
      this.headNode.nextNode = currentNode;
    }
  }

  size() {
    let listSize;
    if(this.headNode) {
      listSize = 1;
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        listSize++;
        currentNode = currentNode.nextNode;
      }
    } else {
        listSize = 0;
    }
    return listSize;
  }

  head() {
    if (!this.headNode) {
      return undefined;
    } else {
      return this.headNode.value;
    }
  }

  tail() {
    if (!this.headNode) {
      return undefined;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }

  at(index) {
    if (!this.headNode) {
      return "The list is empty";
    } else {
      let currentNode = this.headNode;
      let currentIndex = 0;
      while (currentNode.nextNode !== null) {
        if (index === currentIndex) break;
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
      if (index === currentIndex) {
        return currentNode.value;
      } else {
        return undefined;
      }
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

// list.prepend(1);

console.log(list.at(6));

