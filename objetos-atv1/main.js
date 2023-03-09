

let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration;
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Digite o nome da Nave:");
    spaceship.type = prompt("Digite o tipo da Nave:");
    spaceship.maxVelocity = Number(prompt("Qual a velocidade maxima dessa nave?"));
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"));
    spaceship.speedUp(acceleration);
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert("Velocidade atual: " + spaceship.velocity + "km/s\n" + "Velocidade Máxima permitida: " + spaceship.maxVelocity + "km/s\n");
        spaceship.velocity = 0;
    }
}

function stop() {
    alert(`Nome da Nave: ${spaceship.name}\n` + `Tipo: ${spaceship.type}\n` + `Velocidade Atual: ${spaceship.velocity} km/s`);
}

function showMenu() {
    let chosenOption;

    do {
        chosenOption = prompt("Você deseja:\n1 - Acelerar\n2 - Parar")
        switch(chosenOption) {
            case "1": 
                acelerate();
                break;
            case "2":
                stop();
                break;
            default:
                alert("Opção Inválida!");
        }

    } while(chosenOption != "2")
}

registerSpaceship();

showMenu()