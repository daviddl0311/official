// getDate
let lastDom = document.querySelector("#dom");
let date = new Date();

function obtenerUltimoDomingo(year, month) {
    let lastDate = new Date(year, month + 1, 0);

    const diaSemana = lastDate.getDay();

    const ultimoDomingo = new Date(lastDate);
    ultimoDomingo.setDate(lastDate.getDate() - diaSemana);

    return ultimoDomingo;
}

const fecha = obtenerUltimoDomingo(date.getFullYear(), date.getMonth());

lastDom.textContent = `${fecha.getDate()} de ${date.toLocaleDateString(undefined, {month: 'long'})} del ${date.getFullYear()}`;

// Copy
document.querySelector("#copy").addEventListener("click", () => {
    let text = document.querySelector("#text").textContent;
    
    navigator.clipboard.writeText(text);

    document.querySelector("#copy").innerHTML ='<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
        document.querySelector("#copy").innerHTML ='<i class="fa-regular fa-copy"></i>';
    }, 2000); 
});

