// 1 - Cadastrar naves, nome, quantidade de trip;
// 2 - Imprimir naves com um alert
// 3 - Sair do programa

class Spaceship {
    constructor(name, tripQuantity) {
        this.name = name;
        this.tripQuantity = tripQuantity;
        this.engaged = false;
        this.isDoorOpen = false;
    }
    engatar() {
        this.engaged = true;
        this.isDoorOpen = true;
    }

}

function showMenu() {
    let chosenOption;
    while(chosenOption != "1" && chosenOption != "2" && chosenOption != "3") {
        chosenOption = prompt("Escolha uma das opções:\n" 
                               + "1 - Engatar naves\n"
                               + "2 - Imprimir naves\n"
                               + "3 - Sair" 
        )
        return chosenOption;
    }

}

function createSpaceship() {
    let spaceshipName = prompt("Digite o nome da nave:\n");
    let tripQuantity = prompt("Quantidade de tripulantes:\n");
    let spaceship = new Spaceship(spaceshipName, tripQuantity);
    return spaceship;
}

function printSpaceshipsList(spaceships) {

    let spaceshipList = "";

    spaceships.forEach((spaceship, index) => {
       spaceshipList += (index + 1) + "-" + spaceship.name +  
                        "(" + spaceship.tripQuantity + "tripulantes)\n"
    });
    alert(spaceshipList);
}

let hitchedSpaceships = [];

let chosenOption;




while(chosenOption != "3") {

    chosenOption = showMenu();
    switch(chosenOption) {
        case "1": 
            let addSpaceships = createSpaceship();
            addSpaceships.engatar();
            hitchedSpaceships.push(addSpaceships);
            console.log("chegou aqui")
            break;
        case "2": 
            printSpaceshipsList(hitchedSpaceships);
            break;
        }   
}