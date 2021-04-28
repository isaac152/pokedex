const requestComplete = 4;
const statusRequest = 200;

const fetchData = (api_url) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', api_url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        (xhttp.status === 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Test Error', api_url))
      }
    }
    xhttp.send();
  });
}

/*
async function fetchPokemon(url_api) {
    const response = await fetch(url_api);
    if(!response.ok){
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    const pokemon_response = await response.json();
    const name = pokemon_response.name;
    const id = pokemon_response.id;
    const type1 = pokemon_response.types[0].type.name;   
    const type2 = pokemon_response.types[1].type.name;
    console.log(type2)
    console.log(url_api)
    const sprite_back = pokemon_response.sprites.back_default;
    const sprite_front = pokemon_response.sprites.front_default; 
    const artwork = pokemon_response.sprites.other;                                                                                                                                                                                                                                                                                                                                                                         
    const ar  = Object.values(artwork)[1].front_default;

    const pokemon = new Pokemon(name,id,type1,type2,sprite_front,sprite_back,ar)
    pokemon_list.push(pokemon)
  }

for (let x=1; x <= 20; x++) {
    fetchPokemon(API_URLS+x.toString()+'/');
}
    console.log(pokemon_list)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
*/