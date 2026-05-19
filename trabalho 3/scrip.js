let vetor = [];
let contador = 0;

for(let i = 0; i < 10; i++){

    vetor[i] = Number(prompt("Digite um número"));

}

let numero = Number(prompt("Digite um número para procurar"));

for(let i = 0; i < 10; i++){

    if(vetor[i] == numero){

        contador++;

    }

}

console.log(vetor);
console.log(contador);