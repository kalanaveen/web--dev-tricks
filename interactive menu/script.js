let menu__box = document.getElementById('menu');
let closeBtn = document.getElementById('close');
let openBtn = document.getElementById('open');

const closeMenu = ()=>{
    menu__box.style.top = "-100vh"
}

const openMenu = ()=>{
    menu__box.style.top = "17%"
}

closeBtn.addEventListener("click",()=>{
    closeMenu();
})

openBtn.addEventListener("click",()=>{
    openMenu();
})