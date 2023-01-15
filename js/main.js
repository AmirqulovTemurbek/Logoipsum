const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const parentIndex = document.querySelector('.index__two');
parentIndex.addEventListener('click', event => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read_more_btn');

    if (!isReadMoreBtn) return;

    const currentText= event.target.parentNode.querySelector('.read_more_text');

    currentText.classList.toggle('read_more_text_show');

    current.textContent = current.textContent.includes('Learn More') ?
    "Read Less..." : "Learn More...";
})

const parentIndex1 = document.querySelector('.index__three');
parentIndex1.addEventListener('click', event => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes('read_more_btn');

    if (!isReadMoreBtn) return;

    const currentText= event.target.parentNode.querySelector('.read_more_text');

    currentText.classList.toggle('read_more_text_show');

    current.textContent = current.textContent.includes('Learn More') ?
    "Read Less..." : "Learn More...";
})


// const change_btn = document.getElementById('change_btn');
// function leftClick(){
//     change_btn.style.left = "0"
// }  

// function rightClick(){
//     change_btn.style.left = "110px"
// }
