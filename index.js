const countEl=document.getElementById("count-el")
const storeEl=document.getElementById("store-el")

let count=0
function increase(){
    count++
    countEl.textContent=count
}

function save(){
    storeEl.textContent+=`${countEl.innerText} - `
    count=0
    countEl.textContent=count
}

