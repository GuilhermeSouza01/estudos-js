let spaceshipName = prompt("Qual nome da aeronave");

let spaceshipSpeed = 0;

let chosenOption;

function showMenu() {
    let option;
    while(option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("Oque deseja fazer?\n"
                        + "1 - Acelerar a nave em 5km/s\n"
                        + "2 - Desacelerar em 5km/s\n"
                        + "3 - Imprimir dados de bordo\n"
                        + "4 - Sair"
                        );
    }
    return option;

}

function speedUp(velocity) {
    let newVelocity = velocity + 5;
    return newVelocity;
}

function slowDown(velocity) {
    let newVelocity = velocity - 5;
    if(newVelocity <0) {
        newVelocity = 0
    }
    return newVelocity;
}

function showSpaceshipInformations(name, velocity) {
    alert("O nome da nave é: " + name + "\nVelocidade:" + velocity + "km/s");

   
}



while(chosenOption != "4") {
    chosenOption = showMenu();
    console.log(chosenOption);
    if(chosenOption == "4") {
        alert("Fechando o programa");
    }

    else if(chosenOption == "1") {
    spaceshipSpeed = speedUp(spaceshipSpeed);
    
   }
    else if(chosenOption == "2") {
    spaceshipSpeed = slowDown(spaceshipSpeed);
    
   }
    else if(chosenOption == "3") {
    showSpaceshipInformations(spaceshipName, spaceshipSpeed);
   }
}
