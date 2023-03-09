let initialSpeed = 150;

function decreaseSpeed(velocity, showNewVelocity) {
    let slowDown = 20;

    while(velocity > 0) {
        showNewVelocity(velocity);
        velocity -= slowDown;
    }
    alert("Nave parada. Abir comportas")


}

decreaseSpeed(initialSpeed, (velocity) => {
    console.log("Velocidade atual:" + velocity);
});

