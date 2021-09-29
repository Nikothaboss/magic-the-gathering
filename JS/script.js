import { items, collection } from "./data.js";
const container = document.querySelector(".container");
const collCon = document.querySelector(".collection-container")


const setDeleteEvent = () =>{
    const delBtns = document.querySelectorAll(".delBtn");

    for(const btn of delBtns){
        btn.addEventListener("click", (e)=>{
            const btnID = e.target.id
            const index  = items.findIndex(item => item.name === btnID)
            items.splice(index, 1)  
            displayCards(items)
        })
    }
}



const appendListeners = () =>{
    const buttons = document.querySelectorAll(".cardBtn")
    

    for(const button of buttons) {
        button.addEventListener("click", (e) =>{
            collection.push(e.target.id)
            
            renderCollection()
        })
    }

}

const renderCollection = () =>{
    collCon.innerHTML = "";
    
    for(const coll of collection){
        console.log(coll)
        collCon.innerHTML += `<p>${coll}</p>`
    }
    
}

// ! Render funksjon

const displayCards = (array) =>{
    container.innerHTML = ""
    let neweDiv = ``
    for(const item of array){
        neweDiv += `
            <div class="card">
                <img src="${item.img}" alt="something" />
                <div class="content">
                    <h2>${item.name}</h2>
                    <p>Race: ${item.race}</p>
                    <p>Type: ${item.type}</p>
                    <button class="delBtn" id="${item.name}">Delete</button>
                    <button type="button" id="${item.id}" class="cardBtn">Add me</button>
                </div>
            </div>
        `
    }
    container.innerHTML = neweDiv
    setDeleteEvent()
    appendListeners()
}

displayCards(items)












// const arrayRemove =(arr, value)=> { 
    
//     return arr.filter(function(ele){ 
//         return ele != value; 
//     });
// }










