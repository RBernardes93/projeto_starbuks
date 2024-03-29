/* Codigo starbucks JS */

let imgCopo = document.querySelector(".starbucks")

let circulo = document.querySelector(".circulo")
let verde = document.querySelector(".verde")
let rosa = document.querySelector(".rosa")
let roxo = document.querySelector(".roxo")

verde.addEventListener("click", () => {
    imgCopo.src = "./imagens.png/img-pequena1_verde.png" 
    circulo.style.background ="#017143"
})


rosa.addEventListener("click", () => {
    imgCopo.src = "./imagens.png/img-pequena2_rosa.png" 
    circulo.style.background ="#eb7495"
})


roxo.addEventListener("click", () => {
    imgCopo.src = "./imagens.png/img-pequena3_roxo.png" 
    circulo.style.background ="#d752b1"
})
