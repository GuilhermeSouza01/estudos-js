function criaBox() {
    let ulBox = document.createElement("ul");
    
    document.getElementById("boxContainer").appendChild(ulBox);

    let redBox = document.createElement("div");
    redBox.setAttribute("class", "boxes");
    redBox.style.backgroundColor = '#f00';
    redBox.style.width = '100px';
    redBox.style.height = '100px';
    ulBox.appendChild(redBox);

}
