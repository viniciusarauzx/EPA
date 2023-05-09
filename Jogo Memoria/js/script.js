const botaok=document.querySelector(".button-ok")
const listaAnimais = [];
const capa=("capa.jpg")
const elementoMain = document.querySelector("main");
const timer=document.querySelector(".timer");
const listaAnimaisAleatorio = [];
const botaofim=document.querySelector('.fim2')
var id=0;
var tempos=0;


listaAnimais.push("jacare.jpg");
listaAnimais.push("leao.webp");
listaAnimais.push("macaco.jpg");
listaAnimais.push("vaca.jpg");
listaAnimais.push("bode.jpg");
listaAnimais.push("dragao-de-komodo.jpg");
listaAnimais.push("galinha.jpg");
listaAnimais.push("gorila.jpg");
listaAnimais.push("hipopotamo.jpg");
listaAnimais.push("cobra.jpg");


while(listaAnimais.length>0){
    const aleatorio = Math.floor(Math.random() * listaAnimais.length);
    listaAnimaisAleatorio.push(listaAnimais[aleatorio]);
    // posição inicial, quantidade de elemnetos que serão removidos da posição especificada
    listaAnimais.splice(aleatorio, 1);
}    

botaok.addEventListener("click", function () { 
    document.querySelector(".texto").style.display="none";
    document.querySelector(".container").style.display="block"
    iniciartimer();
 })

const duplicado=[...listaAnimaisAleatorio,...listaAnimaisAleatorio];
const animaisembaralhado=duplicado.sort(
    ()=>Math.random()-0.5
);   

animaisembaralhado.forEach(function(animal){
    elementoMain.innerHTML+=
    `
    <div class="card${id} estilo " animal=${animal} onclick="virar(${id})">
        <div class="face front"><img src="img/${animal}"></div>
        <div class="face back"><img src="img/capa.jpg"> </div>
    </div>
    `;
    id++;
});

let primeiraCarta="";
let segundaCarta="";


function virar(posCarta){
    let cartaMomento = document.querySelector(`.card${posCarta}`);

    if (primeiraCarta==''){
    cartaMomento.classList.add("revelar")
    primeiraCarta=cartaMomento;
    }

    else if (segundaCarta==''){
    let cartaMomento = document.querySelector(`.card${posCarta}`);
    cartaMomento.classList.add("revelar")
    segundaCarta=cartaMomento;
    }
    checarCarta();
}

function checarFinal(){
    const cartasdisab=document.querySelectorAll('.disabilitar');

    if(cartasdisab.length==20){
        alert("voce Ganhou");
        clearInterval(this.loop)
        document.querySelector(".fim2").style.display="block"
    }
}
const checarCarta=()=>{
    const primeiroAnimal=primeiraCarta.getAttribute('animal');
    const segundoAnimal=segundaCarta.getAttribute('animal');

    if (primeiroAnimal==segundoAnimal){
        primeiraCarta.classList.add('disabilitar');
        segundaCarta.classList.add('disabilitar');
        primeiraCarta='';
        segundaCarta='';
        checarFinal();
    }

    else{
        setTimeout(()=>{
        primeiraCarta.classList.remove('revelar');
        segundaCarta.classList.remove('revelar');
        primeiraCarta='';
        segundaCarta='';
        },500);   
    }
}

const iniciartimer=()=>{
    this.loop=setInterval(()=>{
    tempos++;
    timer.innerHTML=tempos;
    parartempo();
    },1000);
    
}


function parartempo (){
    if(tempos==120){
        clearInterval(this.loop);
        alert('Voce não conseguiu a tempo Josnei foi condenado, volte do inicio')
        window.location.replace("../iniciar/iniciar.html");
    }
};

