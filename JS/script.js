import { collection } from "./data.js";
import { API_LINK } from "./constants.js";
import { findIndex, createCard } from "./utils.js";
const container = document.querySelector(".container");
const collCon = document.querySelector(".collection-container")


let items = []
let localCollection = JSON.parse(window.localStorage.getItem("cardArr"))

// ! Render functions

const renderCollection = () =>{
    collCon.innerHTML = "";
    
    for(const coll of collection){
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

const getCards = async (API_LINK) =>{
    const response = await fetch(API_LINK)
    console.log(response)
    const objects = await response.json()
    console.log(objects.cards)
    items = objects.cards
    renderCards()
    
}


// ! Event functions

const addListener = () =>{
    for(const item of items){
        document.getElementById(`${item.id}-add`).addEventListener("click", (e) =>{
            const inArray = collection.find(item => item.name === e.target.name)
            if(!inArray){
                collection.push(items[findIndex(items, item)])
                window.localStorage.setItem("cardArr", JSON.stringify(collection))
                renderCollection()
            }else{
                return;
            }
            
        })
    }
} 

const removeListeners = () =>{
    for(const item of collection){
        document.getElementById(`${item.id}-remove`).addEventListener("click", ()=>{
            collection.splice(findIndex(collection, item), 1);
            window.localStorage.setItem("cardArr", JSON.stringify(collection))
            renderCollection()
        })
    }
}



getCards(API_LINK)

