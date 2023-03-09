
function addNewHouse() {
    let number = document.querySelector("input[name='number']").value;
    let neighborhood = document.querySelector("input[name='nHood']").value;
    let city = document.querySelector("input[name='city']").value;
    let area = document.querySelector("input[name='area']").value;

    let newListValue = document.createElement("li");
    newListValue.innerHTML = area + " m², numero: " + number + "(" + neighborhood + " - " + city + ")";

    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerHTML = "Remover";
    removeButton.setAttribute("onclick", "removeHouse(this)");

    newListValue.appendChild(removeButton);

    document.getElementById("house-list").appendChild(newListValue);
}

function removeHouse(button) {
    let liToRemove = button.parentNode;
    document.getElementById("house-list").removeChild(liToRemove);
}
