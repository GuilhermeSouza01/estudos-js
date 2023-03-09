let button = document.querySelector("button");

button.addEventListener('click', function() {
    let inputValue = document.getElementById("username-input").value;
    axios.get(`https://api.github.com/users/${inputValue}/repos`)
    .then(function(response) {
        
        let reposData = response.data;
        let ulList = document.getElementById("repo-list");
        ulList.innerHTML = '';
        for(repos of reposData) {
            
            let repoLi = document.createElement("li");
            let liTextContent = document.createTextNode(repos.name);
            repoLi.appendChild(liTextContent);
            ulList.appendChild(repoLi);
        }
        

        
    })
    .catch(function(error) {
        let errorMessage = error.message;
        let pErrorAlert = document.createElement("p");
        let bodyElement = document.querySelector("body");
        pErrorAlert.style.color = "red";
        let pTextContent = document.createTextNode(errorMessage);
        pErrorAlert.appendChild(pTextContent);
        bodyElement.appendChild(pErrorAlert);
    })

});





