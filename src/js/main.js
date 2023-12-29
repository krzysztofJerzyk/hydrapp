const addButton = document.querySelector('.add--js');
const removeButton = document.querySelector('.subtrac--js');
const counterValue = document.querySelector('.counter--js');

let glasses = 0;

let key = new Date().toLocaleString().slice(0,10)

setInterval(()=>{
    if(key !== Date().toLocaleString().slice(0,10)){
        key = new Date().toLocaleString().slice(0,10)
        setGlassesValue(0)
        glasses=0
    }
},1000*60)

if(localStorage.getItem(key)){
glasses= parseInt(localStorage.getItem(key))
}

const setGlassesValue = (glasses) =>{
    counterValue.innerHTML = glasses
    localStorage.setItem(key, glasses)
}

setGlassesValue(glasses)

addButton.addEventListener('click', () => {
    glasses++
    setGlassesValue(glasses)
})

removeButton.addEventListener('click', () => {
    if(glasses >= 1){
    glasses--
    setGlassesValue(glasses)
    }
})