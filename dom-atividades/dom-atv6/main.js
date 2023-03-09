    var nomes = ["Diego", "Gabriel", "Lucas"];

    let ulListNames = document.createElement("ul");
    for(let i = 0; i < nomes.length; i++) {
        let liElements = document.createElement("li");
        liElements.innerText = nomes[i];
        ulListNames.appendChild(liElements);
    }

    document.querySelector("#boxContainer").appendChild(ulListNames);

function adicionar() {
    let name = document.querySelector("input[name=nome]").value;
    let listNames = document.createElement("li");
    document.querySelector("#boxContainer").innerHTML = "";

    document.querySelector("#boxContainer").appendChild(ulListNames);
    ulListNames.appendChild(listNames)
    listNames.innerHTML = name;
}