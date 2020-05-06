const LinkedList = require('./linked-list');

function main() {
  const SSL = new LinkedList();

  SSL.insertFirst('Apollo');
  SSL.insertFirst('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');

  SSL.insertLast('Tauhida');

  SSL.insertBefore('Athena', 'Starbuck');
  SSL.insertBefore('Boomer', 'Starbuck');

  SSL.insertAfter('Hotdog', 'Starbuck');
  SSL.insertAfter('Helo', 'Starbuck');

  SSL.insertAt('Kat', 3);

  SSL.remove('Tauhida');

  // console.log(SSL.head.next.next.next.next.next.next);
  console.log(SSL.head.next.next);
  console.log(SSL.head.next.next.next.next.next.next.next.next.next);
}

main();
