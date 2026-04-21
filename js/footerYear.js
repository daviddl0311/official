document.querySelector("#year").textContent = `${new Date().getFullYear()}`;

let bloop = true;
document.querySelector("#burger").addEventListener("click", () => {
    if(bloop) {
        bloop = false
        document.querySelector("#burger").innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        bloop = true;
        document.querySelector("#burger").innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})