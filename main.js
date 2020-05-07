const { LinkedList, display, size, isEmpty, findPrevious, findLast, reverseList } = require('./linked-list');

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertFirst('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  SLL.insertLast('Tauhida');

  SLL.insertBefore('Athena', 'Starbuck');
  SLL.insertBefore('Boomer', 'Starbuck');

  SLL.insertAfter('Hotdog', 'Starbuck');
  SLL.insertAfter('Helo', 'Starbuck');

  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  display(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(findPrevious(SLL, 'Kat'));
  console.log(findLast(SLL));
  reverseList(SLL);
  display(SLL);
}
main();

//Question 4 => This program removes any duplicates from the list. The time complexity is linear, due to the fact that as the size of your list input increases, it will proportionally increase the amount of interations it requires, increasing the amount of time it takes to run the function.
