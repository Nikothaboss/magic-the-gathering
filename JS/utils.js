export const findIndex = (array, item) => {
    return array.map((x) =>{
        return x.id
    }).indexOf(item.id)
}

export const createCard = (item, version) =>{
    const {id, name, race, type, img} = item; 
    return `
    <div class="card">
        <img src="${img}" alt="something" />
        <div class="content">
            <h2>${name}</h2>
            <p>Race: ${race}</p>
            <p>Type: ${type}</p>
            <button type="button" name="${name}" id="${id}-${version}" class="cardBtn">${version === "add" ? "Add" : "Remove"}</button>
        </div>
    </div>

    `
}