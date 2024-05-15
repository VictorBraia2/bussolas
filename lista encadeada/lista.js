class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  }

  display() {
    let current = this.head;
    let result = "Lista Encadeada: ";

    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }

    result += "null";
    console.log(result);
  }
}

function interagirListaEncadeada() {
  const lista = new LinkedList();
  let opcao;

  do {
    console.log("\nO que você deseja fazer?");
    console.log("1. Adicionar elemento à lista");
    console.log("2. Exibir lista encadeada");
    console.log("0. Sair");

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
      case "1":
        const elemento = prompt("Digite o elemento a ser adicionado: ");
        lista.append(elemento);
        console.log(`Elemento "${elemento}" adicionado à lista.`);
        break;
      case "2":
        lista.display();
        break;
      case "0":
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "0");
}

interagirListaEncadeada();
