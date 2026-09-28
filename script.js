// const nome = "Carlos";
// const idade = 20;
// const estudante = true;

// console.log(nome)
// console.log(idade)
// console.log(estudante)

// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

// if (idade >= 18) {
//     console.log("Maior de idade")
// }
// else{
//     console.log("Menor de idade")
// }

// const nome = [
//     "Fernanda",
//     "Bruno",
//     "Leonardo",
//     "Eric"
// ]

//     for (let cont = 0; cont < nomes.length; cont++){
//         console.log(nomes[cont]);
//     }

//     function calcularMedia(nota1, nota2){
//         return(nota1 + nota2) / 2
//     }

//     const media = calcularMedia(8, 7);

//     console.log(media)

//     if (media >= 7) {
//         console.log("Aprovado")
//     }else if (media >5){
//         console.log("Recuperação")
//     }else {
//         console.log("Reprovado")
//     }


//Atividade 1

// const nome = "Fernanda";
// const idade = "29";
// const cidade = "Santo André";
// const Profissao = "Designer"

// console.log(`Meu nome é ${nome} e tenho ${idade} anos, sou de ${cidade} e minha Profissão atualmente é ${Profissao}`)


//atividade 2 
// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));

// let soma = numero1 + numero2;
// let subtracao = numero1 - numero2;
// let multiplicacao = numero1 * numero2;
// let divisao = numero1 / numero2;

// console.log("Soma: " + soma);
// console.log("Subtração: " + subtracao);
// console.log("Multiplicação: " + multiplicacao);
// console.log("Divisão: " + divisao);

//Atividade 3 

// let idade = Number(prompt("Digite sua idade em anos:"));

// let meses = idade * 12;

// console.log("Você já viveu aproximadamente " + meses + " meses.");


//Atividade 4
// let nota1 = Number(prompt("Digite a primeira nota:"));
// let nota2 = Number(prompt("Digite a segunda nota:"));
// let nota3 = Number(prompt("Digite a terceira nota:"));

// let media = (nota1 + nota2 + nota3) / 3;

// console.log("A média do aluno é: " + media);

//Atividade 5
// let idade = Number(prompt("Digite sua idade:"));

// if (idade >= 18) {
//     console.log("A pessoa é maior de idade.");
// } else {
//     console.log("A pessoa é menor de idade.");
// }

//Atividade 6 
// let numero = Number(prompt("Digite um número:"));

// if (numero > 0) {
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é igual a zero.");
// }

//Atividade 7 
// let numero = Number(prompt("Digite um número:"));

// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

//Atividade 8 
// let nota1 = Number(prompt("Digite a primeira nota:"));
// let nota2 = Number(prompt("Digite a segunda nota:"));

// let media = (nota1 + nota2) / 2;

// console.log("Média: " + media);

// if (media >= 7) {
//     console.log("Aluno aprovado!");
// } else if (media >= 5) {
//     console.log("Aluno em recuperação.");
// } else {
//     console.log("Aluno reprovado.");
// }

//Atividade 9 
// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));

// if (numero1 > numero2) {
//     console.log("O maior número é: " + numero1);
// } else if (numero2 > numero1) {
//     console.log("O maior número é: " + numero2);
// } else {
//     console.log("Os dois números são iguais.");
// }

//Atividade 10
// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));
// let numero3 = Number(prompt("Digite o terceiro número:"));

// if (numero1 >= numero2 && numero1 >= numero3) {
//     console.log("O maior número é: " + numero1);
// } else if (numero2 >= numero1 && numero2 >= numero3) {
//     console.log("O maior número é: " + numero2);
// } else {
//     console.log("O maior número é: " + numero3);
// }

//atividade 11
// let preco = Number(prompt("Digite o preço do produto:"));

// let valorFinal = preco;

// if (preco > 100) {
//     valorFinal = preco - (preco * 0.10);
// }

// console.log("Valor original: R$ " + preco.toFixed(2));
// console.log("Valor final: R$ " + valorFinal.toFixed(2));

// //atividade 12
// let idade = Number(prompt("Digite sua idade:"));
// let autorizada = prompt("A pessoa está autorizada? (sim/não)");

// if (idade >= 18 && autorizada === "sim") {
//     console.log("Acesso permitido.");
// } else {
//     console.log("Acesso negado.");
// }


// //atividade 13
// let nomes = ["Ana", "João", "Maria", "Carlos", "Fernanda"];

// console.log(nomes);

// //2 formas de fazer

// let nomes = ["Ana", "João", "Maria", "Carlos", "Fernanda"];

// for (let nome of nomes) {
//     console.log(nome);
// }

// //atividade 14
// let compras = ["Arroz", "Feijão", "Leite", "Pão", "Café"];

// console.log("Quantidade total de itens: " + compras.length);

// console.log("Produtos cadastrados:");

// for (let produto of compras) {
//     console.log(produto);
// }

//atividade 15
// let pessoa = {
//     nome: "Fernanda",
//     idade: 20,
//     cidade: "São Paulo",
//     profissao: "Desenvolvedora"
// };

// console.log("Nome: " + pessoa.nome);
// console.log("Idade: " + pessoa.idade);
// console.log("Cidade: " + pessoa.cidade);
// console.log("Profissão: " + pessoa.profissao);

//atividade 16
// let produto = {
//     nome: "Notebook",
//     preco: 2500,
//     categoria: "Eletrônicos",
//     disponibilidade: "Disponível"
// };

// console.log(
//     "O produto " + produto.nome +
//     " custa R$ " + produto.preco +
//     ", pertence à categoria " + produto.categoria +
//     " e está " + produto.disponibilidade + "."
// );

//atividade 17
// let alunos = [
//     {
//         nome: "Ana",
//         idade: 18
//     },
//     {
//         nome: "João",
//         idade: 20
//     },
//     {
//         nome: "Maria",
//         idade: 19
//     }
// ];

// for (let aluno of alunos) {
//     console.log("Nome: " + aluno.nome);
//     console.log("Idade: " + aluno.idade);
//     console.log("----------------");
// }

//atividade 18
// function dobro(numero) {
//     return numero * 2;
// }

// console.log(dobro(5));
// console.log(dobro(10));
// console.log(dobro(25));

//atividade 19
// function somar(numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log(somar(5, 3));
// console.log(somar(10, 20));
// console.log(somar(15, 7));

//atividade 20
// function calcularMedia(nota1, nota2) {
//     return (nota1 + nota2) / 2;
// }

// console.log(calcularMedia(8, 6));
// console.log(calcularMedia(10, 7));
// console.log(calcularMedia(5, 9));

//atividade 21
// function boasVindas(nome) {
//     return "Seja bem-vindo(a), " + nome + "!";
// }

// console.log(boasVindas("Fernanda"));
// console.log(boasVindas("Ana"));
// console.log(boasVindas("João"));

//atividade 22
// let numero = Number(prompt("Digite um número:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// }

//atividade 23
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

//atividade 24
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// console.log("Fim!");

//atividade 25
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//atividade 26
// let numeros = [10, 20, 30, 40, 50];

// let soma = 0;

// for (let numero of numeros) {
//     soma += numero;
// }

// console.log("A soma dos números é: " + soma);

//atividade 27
// let notas = [7, 8, 6, 9, 10];

// let soma = 0;

// for (let nota of notas) {
//     soma += nota;
// }

// let media = soma / notas.length;

// console.log("A média das notas é: " + media);

//atividade 28
// let notas = [7, 8, 6, 9, 10];

// let soma = 0;

// for (let nota of notas) {
//     soma += nota;
// }

// let media = soma / notas.length;

// console.log("A média das notas é: " + media);

//atividade 29
// let aluno = {
//     nome: "Fernanda",
//     nota1: 8,
//     nota2: 6
// };

// let media = (aluno.nota1 + aluno.nota2) / 2;

// let situacao;

// if (media >= 7) {
//     situacao = "Aprovado";
// } else if (media >= 5) {
//     situacao = "Recuperação";
// } else {
//     situacao = "Reprovado";
// }

// console.log("Nome: " + aluno.nome);
// console.log("Média: " + media);
// console.log("Situação: " + situacao);

// //atividade 30 
// let alunos = [
//     {
//         nome: "Ana",
//         nota1: 8,
//         nota2: 7
//     },
//     {
//         nome: "João",
//         nota1: 6,
//         nota2: 5
//     },
//     {
//         nome: "Maria",
//         nota1: 4,
//         nota2: 3
//     }
// ];

// for (let aluno of alunos) {
//     let media = (aluno.nota1 + aluno.nota2) / 2;
//     let situacao;

//     if (media >= 7) {
//         situacao = "Aprovado";
//     } else if (media >= 5) {
//         situacao = "Recuperação";
//     } else {
//         situacao = "Reprovado";
//     }

//     console.log("Nome: " + aluno.nome);
//     console.log("Primeira nota: " + aluno.nota1);
//     console.log("Segunda nota: " + aluno.nota2);
//     console.log("Média final: " + media);
//     console.log("Situação: " + situacao);
//     console.log("----------------------");
// }


