// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}
const pessoa1 = new Pessoas("Maria", "Josefina", 33);

const pessoa2 = new Pessoas("Raphael", "Almeida", 35);

const pessoa3 = new Pessoas("João", "José", 45);

Pessoas.prototype.completo = function () {
  return `${this.nome}  ${this.sobrenome}`;
}

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
Object.getOwnPropertyNames(NodeList.prototype)

Object.getOwnPropertyNames(HTMLCollection.prototype)

Object.getOwnPropertyNames(Document.prototype)

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTML element
li.click; //function
li.innerText.constructor.name; // String
li.value.constructor.name; // Number
li.hidden.constructor.name; // Boolean
li.offsetLeft.constructor.name; // Numero
li.click().constructor.name; // Função

// Qual o construtor do dado abaixo:
/* Primeiro passo é colocar isso como $ const teste = li.hidden.constructor.name
e logo em seguida teste.constructor.name, vai aparecer uma string e não boolean mais */

li.hidden.constructor.name; // String

