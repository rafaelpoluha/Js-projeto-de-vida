const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");


for(let i = 0; i < ; botoes.length; i++)(
    botoes[i].olclick = function(){
        for (let j = 0; j< botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }
         botoes[i].classList.add("ativo");
         textos[i].classList.add("ativo");

    }
)

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-10-05T00:00:00");
const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
const tempoObjetivo3 = new Date("2025-12-05T00:00:00");
const tempoObjetivo4 = new Date("2025-01-05T00:00:00");

const tempo - [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

 //contadores[0].textContent = calculaTempo(tempoobjetivo1) 

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = math.floor(tempoFinal/1000);
    let minutos = math.floor(sehundos/60);
    let horas = math.floor(minutos/60);
    let dias = math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal >0) {  
        return [dias, horas,  minutos, segundos];
    }else{
        return[0, 0, 0, 0];
    }
}

function atualizarCronometro(){
    for(let i= 0; i < contadores.length; i++){
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[0])[0];
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[0])[1];
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[0])[2];
    document.getElementById("dias" + i).textContent = calculaTempo(tempos[0])[3];
        
}
}
function comecaCronometro(){
    atualizarCronometro();
    setInterval(atualizarCronometro, 1000);
}
comecaCronometro();