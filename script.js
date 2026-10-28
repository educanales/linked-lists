class LinkedList {
  constructor() {
    this.headNode = null;
  }  

  append(value) {
    const newNode = new Node(value);
    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
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
  
  pop() {
    if (!this.headNode) {
      return undefined;
    } else {
      const currentHeadNode = this.headNode;
      this.headNode = this.headNode.nextNode;
      return currentHeadNode.value;
    }
  }

  contains(value) {
    if (!this.headNode) {
      return false;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        if (currentNode.value === value) break;
        currentNode = currentNode.nextNode;
      }
      return currentNode.value === value ? true : false;
    }
  }

  findIndex(value) {
    let index = 0;
    if (!this.headNode) {
      return -1;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        if (currentNode.value === value) break;
        currentNode = currentNode.nextNode;
        index++;
      }
      return currentNode.value === value ? index : -1;
    }
  }

  toString() {
    let listString = "";
    if (!this.headNode) {
      return listString;
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        listString += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      return listString += `( ${currentNode.value} ) -> null`;
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

console.log(list.toString());

