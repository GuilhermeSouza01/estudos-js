function calculaNumeroDaSenha(senha) {
  let auxZero = 0;
  let auxUm = 0;
  let posicao = 0;
  let firstPosition = 0;
  let inicio = 0;

  for (let i = 0; i <= 9; i++) {
    senha.map((element) => {
      firstPosition += element[posicao];

      console.log(firstPosition);
    });

    posicao++;
  }
  if (firstPosition == 1) {
    auxUm++;
  } else if (firstPosition == 0) {
    auxZero++;
  }

  console.log(auxUm);
}
calculaNumeroDaSenha([
  "0110100000",
  "1001011111",
  "1110001010",
  "0111010101",
  "0011100110",
  "1010011001",
  "1101100100",
  "1011010100",
  "1001100111",
  "1000011000",
]);

function removeDuplicates(array) {
  return array.filter((value, index) => {
    return array.indexOf(value) === index;
  });
}

console.log(
  removeDuplicates([
    3, 5, 5, 7, 9, 9, 1, 9, 2, 5, 7, 9, 2, 42, 12, 56, 87, 34, 23, 34,
  ])
);

const array = [3, 5, 5, 7, 9];

array.pop();
console.log(array);
