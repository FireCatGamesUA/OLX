fetch("https://my-json-server.typicode.com/FireCatGamesUA/OLX/db")
    .then(async function(responce){
        let data = responce;
        console.log(data);
    });