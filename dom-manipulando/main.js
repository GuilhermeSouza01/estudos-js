function addNewPhone() {    
    const phoneForm = document.querySelector("form#phones");
    // cloneNode recebe um deep que clona até o ultimo elemento dentro da tag
    const newPhone = phoneForm.children[0].cloneNode(true);

    const phonePosition = phoneForm.children.length + 1;

    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ":";
    phoneForm.appendChild(newPhone);
    console.log(phoneForm.children);
}

function printPhones() {
    let message = "";
    const phonesList = document.querySelectorAll("input[name='phone']");
    phonesList.forEach((phone, index)=> {
        message += "Telefone" + (index + 1) + ": " + phone.value + "\n"
    });
    alert(message);
} 