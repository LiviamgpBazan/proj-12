let vetor = []
let soma = 0;

for(let i =0; i < 10;i++){
    vetor[i] = Number(prompt("digite um numero"));

    if(vetor[i] % 2 ==0){

        soma = soma + vetor[i];
    }
}
console.log(vetor);
console.log(soma);