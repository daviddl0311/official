let btnAll = document.querySelector("#btnAll");
let btnCultos = document.querySelector("#btnCultos");
let btnJovenes = document.querySelector("#btnJovenes");
let btnEventos = document.querySelector("#btnEventos");
let btnCom = document.querySelector("#btnCom");
let btnMusic = document.querySelector("#btnMusic");

let allItems = document.querySelectorAll(".box-img");
let contenido = document.querySelector("#content");

let message = document.querySelector(".message");

// Función para filtrar la galería
function filterGallery(category) {
    let sum = 0;
    allItems.forEach(item => {
        if (category === 'all' || item.id === category) {
            item.style.display = 'block';
            sum++;
        } else {
            item.style.display = 'none';
        }
    });

    contenidoNull(sum);
}

function contenidoNull(sum) {
    if(sum == 0) {
        message.classList.remove("message");
    } else {
        message.classList.add("message");
    }
}

// Función para actualizar los botones activos
function updateButtons(activeBtn) {
    [btnAll, btnCultos, btnJovenes, btnEventos, btnCom, btnMusic].forEach(btn => {
        btn.classList.remove('btn-active');
        btn.classList.add('btn');
    });
    activeBtn.classList.remove('btn');
    activeBtn.classList.add('btn-active');
}

// Event listeners para todos los botones
btnAll.addEventListener("click", () => {
    filterGallery('all');
    updateButtons(btnAll); 
});

btnCultos.addEventListener("click", () => {
    filterGallery('Cultos');
    updateButtons(btnCultos);
});

btnJovenes.addEventListener("click", () => {
    filterGallery('Jovenes');
    updateButtons(btnJovenes);
});

btnEventos.addEventListener("click", () => {
    filterGallery('Eventos');
    updateButtons(btnEventos);
});

btnCom.addEventListener("click", () => {
    filterGallery('Comunidad');
    updateButtons(btnCom);
});

btnMusic.addEventListener("click", () => {
    filterGallery('Musica');
    updateButtons(btnMusic);
});

// Box Image
let box = document.querySelector(".box-view-img");

// View Image
let imgAll = document.querySelectorAll(".img-galeria");
const imgView = document.querySelector("#img-view");
const imgViewName = document.querySelector("#img-view-title");
const imgViewText = document.querySelector("#img-view-text");
let index = 0;
let evento = '';

imgAll.forEach((img, id) => {
    img.addEventListener("click", () => {
        let preView = img.src;
        let preViewName = img.alt;
        let preViewEvento = img.dataset.evento;
        getImgView(preView, preViewName, preViewEvento, id);
        evento = preViewEvento;
    });
});

function getImgView(url, name, evento, id) {
    box.style.display = "grid";
    imgView.src = url;
    imgViewName.textContent = name;
    imgViewText.textContent = evento;
    index = id;
}

// Buttons
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const close = document.querySelector("#close");

left.addEventListener("click", () => {
    if(btnAll.className === 'btn-active') {
        index = (index - 1 + imgAll.length) % imgAll.length;
        imgView.src = imgAll[index].src;
        imgViewName.textContent = imgAll[index].alt;
        imgViewText.textContent = imgAll[index].dataset.evento;
    } else {
        before(evento);
    }
});
right.addEventListener("click", () => {
    if(btnAll.className === 'btn-active') {
        index = (index + 1) % imgAll.length;
        imgView.src = imgAll[index].src;
        imgViewName.textContent = imgAll[index].alt;
        imgViewText.textContent = imgAll[index].dataset.evento;
    } else {
        after(evento);
    }
});
close.addEventListener("click", () => {
    box.style.display = "none";

    left.disabled = false;
    right.disabled = false;
});

function before(text) {
    right.disabled = false;

    index = (index - 1 + imgAll.length) % imgAll.length;
    
    if(imgAll[index].dataset.evento !== text) {
        left.disabled = true;
        index = (index + 1) % imgAll.length;
    } else {
        imgView.src = imgAll[index].src;
        imgViewName.textContent = imgAll[index].alt;
        imgViewText.textContent = imgAll[index].dataset.evento;
    }
}

function after(text) {
    left.disabled = false;

    index = (index + 1) % imgAll.length;

    if(imgAll[index].dataset.evento !== text) {
        right.disabled = true;
        index = (index - 1 + imgAll.length) % imgAll.length;
    } else {
        imgView.src = imgAll[index].src;
        imgViewName.textContent = imgAll[index].alt;
        imgViewText.textContent = imgAll[index].dataset.evento;
    }
}
