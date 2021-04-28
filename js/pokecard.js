const pokecardGenerator = Pokemon => {
    const card = document.createElement('div');
    card.classList.add('tarjeta_pokemon')
    card.innerHTML = `
    <div class="pokemon">
        <p class="num">${Pokemon.id}</p>
        <img class="Avatar"src="${Pokemon.artwork}">
        <img class="Sprite"src="${Pokemon.sprite_back}">
    </div>
    <div class="Info">
            <h2 class="name">${Pokemon.name}</h2>
            <div class="tipo-container">
                <h4 class="tipe-titulo">Tipo:</h4>
                <span class="${Pokemon.type1}">${Pokemon.type1}</span>
                <span class="${Pokemon.type2}">${Pokemon.type2}</span>
            </div>
    </div>
    `;
  
    return card;
  }
