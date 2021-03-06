const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    // If the head is null, inserting at the "last" space, is really just the first / head
    if (!this.head) {
      this.head = new _Node(item, null);
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = new _Node(item, null);
    }
  }

  remove(item) {
    if (!this.head) {
      return false;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === item) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  find(item) {
    if (this.head === null) return null;
    if (this.head.value === item) return this.head;

    let current = this.head;

    while (current !== null) {
      if (current.value === item) {
        return current;
      } else current = current.next;
    }
    return null;
  }

  insertBefore(val, item) {
    let current = this.head.next;
    let previous = this.head;

    if (previous.value === item) {
      this.head = new _Node(item, this.head);
      return true;
    }

    while (current !== null) {
      if (current.value === item) {
        previous.next = new _Node(val, current);
        return true;
      }
      current = current.next;
      previous = previous.next;
    }
    return false;
  }

  insertAfter(val, item) {
    let current = this.head.next;
    let previous = this.head;

    if (previous.value === item) {
      previous.next = new _Node(item, previous.next);
      return true;
    }

    while (current !== null) {
      if (previous.value === item) {
        previous.next = new _Node(val, current);
        return true;
      }
      current = current.next;
      previous = previous.next;
    }
    return false;
  }

  insertAt(item, position) {
    let counter = 1;
    let current = this.head;

    while (current !== null) {
      if (counter === position - 1) {
        current.next = new _Node(item, current.next);
        return true;
      }
      current = current.next;
      counter++;
    }
    throw new Error('List is not long enough to insert item at that position');
  }
}

function display(list) {
  let displayString = '';
  let current = list.head;
  while (current !== null) {
    displayString += current.value + ' => ';
    current = current.next;
  }
  displayString += current;
  console.log(displayString);
}

function size(list) {
  if (!list.head) {
    return 0;
  }
  let sizeNumber = 0;
  let current = list.head;
  while (current !== null) {
    sizeNumber++;
    current = current.next;
  }
  return sizeNumber;
}

function isEmpty(list) {
  return !list.head;
}

function findPrevious(list, item) {
  let current = list.head;
  if (current.next === null || current === null) {
    return null;
  }
  while (current !== null) {
    if (current.next.value === item) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}

function findLast(list) {
  let current = list.head;
  if (current === null) {
    return null;
  }
  while (current !== null) {
    if (current.next === null) {
      return current.value;
    }
    current = current.next;
  }
  return null;
}

function reverseList(list) {
  let current = list.head.next;
  let previous = list.head;
  let temp;
  previous.next = null;
  while (current.next !== null) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  current.next = previous;
  list.head = current;
}

function thirdFromEnd(list) {
  let current = list.head;
  if (list.head === null) return null;
  if (current.next.next === null || current.next.next === undefined) {
    return null;
  }
  while (current.next.next.next !== null) {
    current = current.next;
  }
  return current.value;
}

function middleOfList(list) {
  let currentFast = list.head;
  let currentSlow = list.head;

  while (currentFast !== null) {
    currentSlow = currentSlow.next;
    currentFast = currentFast.next.next;
  }
  return currentSlow.value;
}

module.exports = {
  LinkedList,
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  reverseList,
  thirdFromEnd,
  middleOfList,
};
