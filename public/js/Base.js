const nome = "Laryssa Alves";
let nome2 ="";
let pessoaDefault ={
    nome:"Laryssa", 
    idade: "26",
    trabalho:"Programador"
}

let nomes = ["Laryssa Alves", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome:"Laryssa", 
        idade: "26",
        trabalho:"Programador"
    },
    {
        nome:"Maria Silva", 
        idade: "35",
        trabalho:"UX/UI Designer"
    }
];


function alterarNome(){
    nome2 = "Maria silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function receberEalteraNome(novoNome){
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log(pessoa);

    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("------IMPRIMIR PESSOAS-------")
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Trabalho:");
        console.log(item.trabalho);
    })
};

imprimirPessoas();

adicionarPessoa({
   nome:"Pedro silva",
    idade:"28",
    trabalho:"Porteiro"
});

imprimirPessoas();

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome:"Maria", 
//    idade: "35",
//    trabalho:"UX/UI Designer"
//});


//receberEalteraNome("João Silva Travesani");
//receberEalteraNome("Maria Silva");

//alterarNome();