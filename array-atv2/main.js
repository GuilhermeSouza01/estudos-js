// Ex
// 1 - filtrar o nome(somente) das naves que tem mais de 9 tripulantes
// 2 - informar o n° da plataforma em que está a primeira nave que ainda está com o engate pendente(usar findIndex -> retorna o indice)
// 3 - Destacar o nome de todas as naves colocan-as em caixa alta e exibindo
// 4 - exibir um alert com todas estas informações


const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]
// Usando arrow function
let spaceshipsWith9OrMoreTrip = hitchedSpaceships.filter((spaceship) => {
    return spaceship[1] >= 9;
}).map(spaceship => {
    return spaceship[0];
});

// Função normal
let numberOfPendingPlat = hitchedSpaceships.findIndex(function (spaceship){
    return spaceship[2] == false;
});


let upperSpaceshipNames = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase();
});

alert(`Naves com mais de 9 tripulantes: ${spaceshipsWith9OrMoreTrip}\n` 
                + `Plataforma em processo de engate: ${numberOfPendingPlat+1}\n`
                + `Naves destacadas: ${upperSpaceshipNames}`);
