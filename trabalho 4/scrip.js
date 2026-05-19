let vetor = [];
let novoVetor = [];

for(let i = 0; i < 10; i++){

    vetor[i] = Number(prompt("Digite um número"));

}

let k = 0;

for(let i = 0; i < 10; i++){

    let repetido = false;

    for(let j = 0; j < 10; j++){

        if(vetor[i] == novoVetor[j]){

            repetido = true;

        }

    }

    if(repetido == false){

        novoVetor[k] = vetor[i];
        k++;

    }

}

console.log(vetor);
console.log(novoVetor);