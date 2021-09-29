import { items, collection } from "./data.js";
import { findIndex, createCard } from "./utils.js";
const container = document.querySelector(".container");
const collCon = document.querySelector(".collection-container")





// ! Event functions

const addListener = () =>{
    for(const item of items){
        document.getElementById(`${item.id}-add`).addEventListener("click", () =>{
            collection.push(items[findIndex(items, item)])

            renderCollection()
        })
    }
} 

const removeListeners = () =>{
    for(const item of collection){
        document.getElementById(`${item.id}-remove`).addEventListener("click", ()=>{
            collection.splice(findIndex(collection, item), 1);
            renderCollection()
        })
    }
}

// ! Render functions

const renderCollection = () =>{
    collCon.innerHTML = "";
    
    for(const coll of collection){
        console.log(coll)
        collCon.innerHTML += createCard(coll, "remove")
    }
    removeListeners()
    
}

const renderCards = () =>{
    container.innerHTML = "";
    items.forEach((item)=>{
        container.innerHTML += createCard(item, "add")
    })
    addListener()
}

renderCards()

