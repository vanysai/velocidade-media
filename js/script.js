let deslocamento = document.querySelector("#distancia")
let tempo = document.querySelector("#tempo")
let velocidade = document.querySelector("#velocidade")
let resultado = document.querySelector("#resultado")
let arrayVelocidade = []

const calcular = function() {
    velocidade.value = (distancia.value / tempo.value).toFixed(2)
    arrayVelocidade.push(["[", distancia.value, tempo.value,  velocidade.value, " ] ",])
    resultado.value = arrayVelocidade
}

const limpar = function(){

}