const API_URLS = 'https://pokeapi.co/api/v2/pokemon/'
const maxPokedex = 898 ///The api continues after this number
const maxPageForAPI = 25;
const pokemon_list = []
const card_list = []

var counter = 1

var elemento = document.getElementById("Pokeball");
var elemento2 = document.getElementById("content"); 
var elemento3 = document.getElementById("Start")
var elemento4 = document.getElementById("main")    



const fetchPokemon = async (url_api) =>{
    try{
        const data = await fetchData(url_api);
        const name = data.name;
        const id = data.id;
        const type1 = data.types[0].type.name;   
        let type2= ''
        if (data.types.length>1){
            type2 = data.types[1].type.name;
        }
        const sprite_back = data.sprites.back_default;
        const sprite_front = data.sprites.front_default; 
        const artwork = data.sprites.other;                                                                                                                                                                                                                                                                                                                                                                         
        const ar  = Object.values(artwork)[1].front_default;
        const pokemon = new Pokemon(name,id,type1,type2,sprite_front,sprite_back,ar)
        pokemon_list.push(pokemon)
        return pokemon
        /*
        let pokecard = pokecardGenerator(pokemon)
        elemento2.appendChild(pokecard)
        */
    }
    catch(error){
        console.error(error);
    }
}

const callFetch= async(c,max) =>{
    let arrayaux=[]
    for (c; c <= max; c++) {
        const llamado = fetchPokemon(API_URLS+c.toString()+'/')
        llamado.then((data)=> arrayaux.push(data))
    }
    return arrayaux
}

function fillList(c){
    let max = c+20
    if(max<maxPokedex){
        const llamado = callFetch(c,max)
        llamado.then((arrayaux)=>{
            arrayaux.sort((a,b)=>{
                return a.id - b.id 
            })
            console.log(arrayaux)
        }
        )

    }
    else{
        const llamado = callFetch(c,maxPokedex)
        llamado.then((arrayaux)=>{
            arrayaux.sort((a,b)=>{
                return a.id - b.id 
            })
        })
        .then((pokemon)=>{
           // let pokecard = pokecardGenerator(pokemon)
            //elemento2.appendChild(pokecard)
        })
    }
    counter=max+1
    console.log(counter)
}

fillList(counter)


elemento.addEventListener("animationend", listener, false);
function show(){
elemento.style.animation = "dissapear 3s forwards"}

function listener(event) {
switch(event.type) {

    case "animationend":
        elemento.style = "display:none";
        elemento2.style.animation = "show 3s forwards"
        elemento3.style.animation = "open 3s forwards"
        elemento3.style.bottom = "0"
        elemento4.style.height="100%"
    break;
}
} 
window.addEventListener('scroll',()=>{
	const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	if(scrollTop + clientHeight > scrollHeight - 5){
		setTimeout(fillList(counter),2000);

	}
});