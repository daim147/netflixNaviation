const openBtn = document.querySelector(".ope-btn")

const closeBtn = document.querySelector(".close-btn")

const nav = document.querySelectorAll(".nav")

openBtn.addEventListener("click", ()=>{
    nav.forEach(navEl =>{
        navEl.classList.add("visible")
    })
})
closeBtn.addEventListener("click", ()=>{
    nav.forEach(navEl =>{
        navEl.classList.remove("visible")
    })
})