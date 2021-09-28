const container = document.querySelector(".container");
const collCon = document.querySelector(".collection-container")

// ! Arrays

const items = [
    {
        id: 0,
        name: "Whatever",
        race: "Dude i dont know",
        img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        type: "tiger"
    },
    {
        id: 1,
        name: "Whatever man",
        race: "Dude",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1172&q=80",
        type: "dog"
    }
]

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
                    <button class="delBtn" id=${item.id}>Delete</button>
                    <button type="button" id="${item.name}" class="cardBtn">Add me</button>
                </div>
            </div>
        `
    }
    container.innerHTML = neweDiv
}

displayCards(items)

const collection = [];

const appendListeners = () =>{
    const buttons = document.querySelectorAll(".cardBtn")
    

    for(const button of buttons) {
        button.addEventListener("click", (e) =>{
            collection.push(e.target.id)
            
            renderCollection()
        })
    }

}

appendListeners()

const renderCollection = () =>{
    collCon.innerHTML = "";
    
    for(const coll of collection){
        console.log(coll)
        collCon.innerHTML += `<p>${coll}</p>`
    }
}

const deleteItems = () =>{
    const delBtns = document.querySelectorAll(".delBtn");

    for(const btn of delBtns){
        btn.addEventListener("click", (e)=>{
            // btnID = e.target.id
            console.log(e.target.id)
            const filtered = arrayRemove(items, items[e.target.id])
            displayCards(filtered)

        })
    }
}

deleteItems()


const arrayRemove =(arr, value)=> { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

console.log(arrayRemove(items, items[0]))



