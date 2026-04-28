// getDate
let lastDom = document.querySelector("#dom");
let date = new Date();

let arr = [];

let index = date.getDay();

for(let i = 0; i <= 30; i++) {
    if(index == 0) {
        arr.push(i);
    }
    console.log(index);
    
    index = (index + 1) % 7;
}

lastDom.textContent = date.getDate == Math.max(...arr) ? "Es hoy" : `${Math.max(... arr)} de ${date.toLocaleDateString(undefined, {month: 'long'})} del ${date.getFullYear()}`;

// Copy
document.querySelector("#copy").addEventListener("click", () => {
    let text = document.querySelector("#text").textContent;
    
    navigator.clipboard.writeText(text);

    document.querySelector("#copy").innerHTML ='<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
        document.querySelector("#copy").innerHTML ='<i class="fa-regular fa-copy"></i>';
    }, 2000); 
});

