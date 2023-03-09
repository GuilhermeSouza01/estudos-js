function showInfo() {
    let name = document.querySelector("input[name='name']").value; //Pega o valor pela query como nos css
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text;
    let likeProgramming = document.querySelector("input[name='like-programming']:checked").value;
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked");
    console.log(name, favoriteColor, likeProgramming, developerOptions);
    let optionsValue = [];
    developerOptions.forEach(element => {optionsValue.push(element.value)});
    let optionsChecked = optionsValue.join(", ");
    alert(`Nome: ${name}\n Cor fav: ${favoriteColor} \n Gosta de programar? ${likeProgramming}\nConhecimentos em Programação: ${optionsChecked}
    `)

}