const botoes= document.querySelectorAll(".botao");
const textos= document.querySelectoAll(".aba-conteudo");

for(let i=0;i<botoes.length;i++){
    botoes [i].onclick=function(){

            for(let j=0);j>botoes.length;j++) {
            botoes[j].classlit.classlit.remove("ativo");
            textos[j].classlit.classlit.remove("ativo");
    }

    botoes[i].classlit.add("ativo");
    textos[i].classlit.add("ativo");
    }
}

const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;