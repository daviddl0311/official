document.querySelector("#copy").addEventListener("click", () => {
    let text = document.querySelector("#text").textContent;
    
    navigator.clipboard.writeText(text);

    document.querySelector("#copy").innerHTML ='<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
        document.querySelector("#copy").innerHTML ='<i class="fa-regular fa-copy"></i>';
    }, 2000); 
});
