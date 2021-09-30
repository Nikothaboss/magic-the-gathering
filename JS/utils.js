


export const findIndex = (array, item) => {
    return array.map((x) =>{
        return x.id
    }).indexOf(item.id)
}

export const createCard = (item, version) =>{
    const {id, name, type, imageUrl, rarity} = item; 
    return `
    <div class="card ${rarityClass(rarity)}">
        <img src="${imageUrl}" alt="something" />
        <div class="content">
            <h2>${name}</h2>
            <p>Type: ${type}</p>
            <button type="button" name="${name}" id="${id}-${version}" class="cardBtn">${version === "add" ? "Add" : "Remove"}</button>
        </div>
    </div>

    `
}

export const containsObject = (obj, array) =>{
    for(let i = 0; i < array.length; i++) {
        if(array[i] === obj){
            return true
        }
    }
    return false
}

export const rarityClass = (rarity) =>{
    switch(rarity) {
        case "Common":
            return "common";
        case "Uncommon":
            return "uncommon";
        case "Rare":
            return "rare";
        case "Legendary":
            return "legendary";
        default:
            return;
    }
}