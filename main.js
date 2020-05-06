const LinkedList = require('./linked-list');

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

  // console.log(SSL.head.next.next.next.next.next.next);
  console.log(SLL.head.next.next);
  console.log(SLL.head.next.next.next.next.next.next.next.next.next);
}

main();
