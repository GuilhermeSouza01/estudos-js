axios.get('https://api.github.com/users/guilhermesouza01')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    })