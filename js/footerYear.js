document.querySelector("#year").textContent = `${new Date().getFullYear()}`;

let bloop = true;
document.querySelector("#burger").addEventListener("click", () => {
    if(bloop) {
        bloop = false
        document.querySelector("#burger").className = "fa-solid fa-xmark";
    } else {
        bloop = true;
        document.querySelector("#burger").className = "fa-solid fa-bars";
    }
})