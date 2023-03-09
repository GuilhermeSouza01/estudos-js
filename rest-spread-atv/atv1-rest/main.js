const arr = [1, 2, 3, 4, 5, 6];

const [x,...y ] = arr;

console.log(x);
console.log(y);

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2, 3));