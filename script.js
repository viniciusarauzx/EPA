const botaok=document.querySelector(".button-ok")
const listaAnimais = [];
const capa=("capa.jpg")
const elementoMain = document.querySelector("main");
const timer=document.querySelector(".timer");
const listaAnimaisAleatorio = [];
var id=0;

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
    <div class="card${id} estilo" onclick="virar(${id})">
        <div class="face front"><img src="img/${animal}"></div>
        <div class="face back"><img src="img/capa.jpg"> </div>
    </div>
    `;
    id++;
});


function virar(posCarta){
    let cartaMomento = document.querySelector(`.card${posCarta}`);
    cartaMomento.classList.add("revelar")
}

const iniciartimer=()=>{
    setInterval(()=>{
        const tempo=+timer.innerHTML;
        timer.innerHTML=tempo+1;
    },1000);
}


