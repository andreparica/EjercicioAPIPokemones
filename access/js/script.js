const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

//https://pokeapi.co/

const getData = (api) => {
    return fetch (api)
    .then((response) => response.json())
    .then((json) => {
        fillData(json);

    })

    .catch((error) => {
        //console.log ("Error:", error);
    })

}

const fillData = (pokemones) => {

    pokemones.results.forEach (element => {
        //console.log(element);

    const IMG = "https://pokeapi.co/api/v2/pokemon/" + element.name;
    return fetch (IMG)
    .then ((response) => response.json ())
    .then ((json) => {

        /*let html = "";
        html += '<div class="col">';
        html += '<div class="card h-100">';
        html += `<img src="${json.sprites.other.dream_world.front_default}" class="card-img-top" alt="${json.name}">`
        html += '<div class="card-body">';
        html += `<small class="text-muted"> ${json.name}</small> <br>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";*/

        let html = `
        <div class="col">
        <div class="card h-100">
        <div class="card-body">
        <img src="${json.sprites.other.dream_world.front_default}" class="card-img-top" alt="${json.name}">
        <h5 class="card-title">${json.name}</h5>
        <h5 class="card-title">${json.order}</h5>
        </div>
        </div>
        </div> `
        document.getElementById("dataAlbum").innerHTML += html;


    })


    })


};

getData(API);
