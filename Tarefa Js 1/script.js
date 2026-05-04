class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function listar() {
    alunos.forEach(a => {
        console.log("Nome:", a.nome, "| Idade:", a.idade);
    });
}

function buscar(nome) {
    let aluno = alunos.find(a => a.nome === nome);
    if (aluno) {
        console.log("Aluno encontrado.\nNome:", aluno.nome, "Idade:", aluno.idade);
    } else {
        console.log("Aluno não encontrado");
    }
}

function adicionar(nome, idade) {
    let existe = alunos.some(a => a.nome === nome);

    if (existe) {
        console.log("Nome repitido, inserção cancelada.");
        return;
    }

    if (idade > 0) {
        alunos.push(new Aluno(nome, Number(idade)));
        console.log("Aluno adicionado.");
    }

    else {
        console.log("Idade inválida.");
    }
}

function alterar(nome) {
    let aluno = alunos.find(a => a.nome === nome);

    if (!aluno) {
        console.log("Não encontrado.");
        return;
    }

    let novo_nome = prompt("Nome:");
    let nova_idade = Number(prompt("Idade:"));

    if (nova_idade <= 0) {
        console.log("Idade inválida.");
        return;
    }

    let existe = alunos.some(a => a.nome === novo_nome && a !== aluno
    );

    if (existe) {
        console.log("Nome repitido, alteração cancelada.");
        return;
    }

    aluno.nome = novo_nome;
    aluno.idade = nova_idade;
    console.log("Atualizado.");
}

function remover(nome) {
    let index = alunos.findIndex(a => a.nome === nome);

    if (index !== -1) {
        alunos.splice(index, 1);
        console.log("Removido.");
    } else {
        console.log("Não encontrado.");
    }
}


let alunos = [
    new Aluno("Aron", 18),
    new Aluno("Bernardo", 19),
    new Aluno("Larissa", 20),
    new Aluno("Nicolas", 21),
    new Aluno("Nicole", 22),
    new Aluno("Luís", 23)
];

let i = 1;

do {
    console.log("\n1-Adicionar\n2-Listar\n3-Buscar\n4-Alterar\n5-Remover");

    let choice = Number(prompt("Escolha função:"));

    if (choice === 1) {
        let nome = prompt("Nome: " );
        let idade = prompt("Idade: ");
        adicionar(nome, idade);
    }

    else if (choice === 2) {
        listar();
    }

    else if (choice === 3) {
        let nome = prompt("Buscar: ");
        buscar(nome);
    }

    else if (choice === 4) {
        let nome = prompt("Quem alterar:");
        alterar(nome);
    }

    else if (choice === 5) {
        let nome = prompt("Quem remover:");
        remover(nome);
    }

    else {
        console.log("Opção inválida");
    }

    i++;

}  while (i <= 5);