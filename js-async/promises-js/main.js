let myPromise = function() {

    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "http://api.anidb.net:9001/httpapi?request=randomrecommendation");
        xhr.send(null);

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject('Erro na requisição')
            }
            
          }
        };
    });
}

myPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })