let lastDom = document.querySelector("#dom");
let date = new Date();

let arr = []
let fecha = date.getDate();
let index = date.getDay();

for(let i = fecha; i <= 31; i++) {
    if(index == 0) {
        arr.push(i);
    }
    
    index = (index + 1) % 7;
}

lastDom.textContent = `${Math.max(... arr)} de ${date.toLocaleDateString(undefined, {month: 'long'})} del ${date.getFullYear()}`