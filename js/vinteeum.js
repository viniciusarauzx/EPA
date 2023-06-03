const carta = document.getElementById("card");
const btnProximo = document.querySelector(".prox");
const img = document.querySelector(".img");
const somatoria = document.getElementById("somatoria");
var cont=0;
var conts=5;
var aleatorio = Math.floor(Math.random() * 9);
var valor = 0;
var valortotal = 0;
var cont = 0;
var tentativas;
var qtdtentativas;
var contador=0;
var soma2;

function sortear(){
    switch (aleatorio) {
        case 1:
            carta.setAttribute("src", "img/card_1.png");
            valor = 1;
        break;
    
        case 2:
            carta.setAttribute("src", "img/card_2.png");
            valor = 2;
        break;

        case 3:
            carta.setAttribute("src", "img/card_3.png");
            valor = 3;
        break;

        case 4:
            carta.setAttribute("src", "img/card_4.png");
            valor = 4;
        break;

        case 5:
            carta.setAttribute("src", "img/card_5.png");
            valor = 5;
        break;

        case 6:
            carta.setAttribute("src", "img/card_6.png");
            valor = 6;
        break;

        case 7:
            carta.setAttribute("src", "img/card_7.png");
            valor = 7;
        break;

        case 8:
            carta.setAttribute("src", "img/card_8.png");
        valor = 8;
        
        break;

        case 9:
            carta.setAttribute("src", "img/card_9.png");
        valor = 9;
        break;
    }
}

function somat(){
    somatoria.innerHTML = "Somatoria: " + valortotal;
}

carta.addEventListener("click", function(){
    aleatorio = Math.floor(Math.random() * 8);
    sortear();
    valortotal = valortotal+valor;
    somat();

        if (valortotal == 21){
            alert("Ganhou! seu numero deu " + valortotal);
            window.location.replace("final.html");
        }

        if (valortotal > 21){
            alert("Perdeu! seu numero deu " + valortotal+ " Voce tem apenas "+ conts + " chances para salvar josnei!!");
            valortotal=0;
            conts--
            cont++
            contador++;
        }

        if(cont>=5){
            alert("Voce usou todas suas Chances");
            alert("Voce tera mais uma chance se responder corretamente a pergunta a seguir, vá com cuidado !!");

            rp1=prompt("Se, durante uma corrida de carros, você deixa o segundo colocado pra trás, qual é a sua colocação após a ultrapassagem?")   
                        if (rp1==2)
                        {
                            alert("Parabens voce acertou meu Gigante guerreiro (a)")
                            window.location.replace("index.html");
                        }
                        else {
                            alert("Voce Errou Bixo, Volte do inicio");
                            window.location.replace("../iniciar/iniciar.html");
                        }
    
        }

});




