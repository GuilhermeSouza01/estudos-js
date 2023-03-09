document.querySelector("#button").addEventListener('click', () => {
    let ulBox = document.createElement("ul");

    document.getElementById("boxContainer").appendChild(ulBox);

    let redBox = document.createElement("div");
    redBox.setAttribute("class", "boxes");
    redBox.style.backgroundColor = "#f00";
    redBox.style.width = "100px";
    redBox.style.height = "100px";
    ulBox.appendChild(redBox);

    redBox.addEventListener("mouseover", () => {
        redBox.style.backgroundColor = newColor;
    })
});


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
var newColor = getRandomColor(); // #E943F0

