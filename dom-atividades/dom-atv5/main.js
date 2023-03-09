    var nomes = ["Diego", "Gabriel", "Lucas"];

    let ulListNames = document.createElement("ul");
    for(let i = 0; i < nomes.length; i++) {
        let liElements = document.createElement("li");
        liElements.innerText = nomes[i];
        ulListNames.appendChild(liElements);
    }

    document.querySelector("#boxContainer").appendChild(ulListNames);