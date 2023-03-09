// partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" },
];

// 1(map) - // Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const usersAge = usuarios.map((user) => {
    let arr = [];
    arr = user.idade;
    return arr;
});

console.log(usersAge);

// 2(filter) - Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usersOfRocketseat = usuarios.filter(user =>  user.empresa === 'Rocketseat' && user.idade > 18);

console.log(usersOfRocketseat);

// 3(find) - Crie uma variável que procura por um usuário que trabalhe na empresa Google:

const workOnGoogle = usuarios.find(user => {
    return user.empresa === 'Google';
});

console.log(workOnGoogle);

// 4 - Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

// usei o spread colocando o objeto dentro do map, assim mudando apenas o conteudo de idade, usando a sintaxe de "({})", para que seja possivel retornar um obj
const multPerTwoAndFindFiftyPlus = usuarios.map((user) => ({...user, idade: user.idade * 2})).filter(user => user.idade <= 50);

console.log(multPerTwoAndFindFiftyPlus);