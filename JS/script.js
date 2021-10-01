import { collection } from "./data.js";
import { API_LINK } from "./constants.js";
import { findIndex, createCard, hasImage, readCardArr, saveCardArr } from "./utils.js";
const container = document.querySelector(".container");
const collCon = document.querySelector(".collection-container")

const localCollection = readCardArr()
let items = []

if(!localCollection) {
    window.localStorage.setItem('cardArr', JSON.stringify([]));
}

// ! Render functions

const renderCollection = () =>{
    collCon.innerHTML = "";
    
    for(const coll of localCollection){
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
    const resObj = await response.json()

    for(const item of resObj.cards){
        if(hasImage(item)){
            items.push(item)
        }
    }
    renderCards()
    renderCollection()
    
}


// ! Event functions

const addListener = () =>{
    for(const item of items){
        document.getElementById(`${item.id}-add`).addEventListener("click", (e) =>{
            const inArray = localCollection.find(item => item.name === e.target.name)
            if(!inArray){
                localCollection.push(items[findIndex(items, item)])
                saveCardArr(localCollection)
                renderCollection()
            }else{
                return;
            }
            
        })
    }
} 

const removeListeners = () =>{
    for(const item of localCollection){
        document.getElementById(`${item.id}-remove`).addEventListener("click", ()=>{
            localCollection.splice(findIndex(collection, item), 1);
            saveCardArr(localCollection)
            renderCollection()
        })
    }
}



getCards(API_LINK)

