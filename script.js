import Node from "./Node.js";

const LinkedList = function () {
  const headNode = new Node();
  headNode.value = 0;
  let counter = 0
  const tailNode = new Node()
  tailNode.value = 0
  headNode.nextNode = tailNode

  const append = (value) => {
    const appended = new Node();
    appended.value = value
    let node = headNode
    while (node.nextNode) {
      node = node.nextNode
    }
    node.value = appended.value
    const newTailNode = new Node()
    newTailNode.value = 0
    node.nextNode = newTailNode

    counter++
  };

  const prepend = (value) => {
    const prepended = new Node();
    prepended.value = value;
    const to_move = headNode.nextNode
    headNode.nextNode = prepended
    prepended.nextNode = to_move
    counter++
  };

  const head = () => {
    return headNode.nextNode
  };

  const tail = () => {
    let node = headNode
    while (node.nextNode.nextNode != null) {
      node = node.nextNode
    }
    return node
  };

  const at = (Index) => {
    if (Index == 0) {
      return headNode.nextNode
    } else if (Index < counter) {
      let node = headNode
      let i = -1
      while (i < Index) {
        node = node.nextNode
        i++
      }
      return node
    }
    else {
      return "Out of Bounds"
    }
  };

  const pop = () => {
    let node = tail()
    node.value = 0
    node.nextNode = null

  };

  const contains = (value) => {
    let node = headNode
    let count = 0
    while (node) {
      count++
      if (node.value == value) {
        return true
      }
      node = node.nextNode
    }
    return false
  };

  const find = (value) => {
    if (contains(value) === true) {
      let node = headNode
      let count = -1

      while (node) {
        if (node.value == value) {
          return count
        }
        count++
        node = node.nextNode
      }
    } else {
      return null
    }
  };

  const toString = () => {
    let node = headNode.nextNode
    let string = "head -> "
    while (node.nextNode) {
      string += `( ${node.value} ) -> `
      node = node.nextNode
    }
    string += "null"
    console.log(string)
  };
  return {
    append,
    prepend,
    head,
    toString,
    tail,
    at,
    pop,
    contains,
    find,
  };
};

const myList = LinkedList();

myList.append(10)
myList.append(20)
myList.prepend(10)
myList.append(30)
myList.pop()
console.log(myList.find(20))
myList.toString()