const nome=document.querySelector(".nome");
const listaNomes=localStorage.getItem(`herois`) ? JSON.parse(localStorage.getItem(`herois`)) : [];
const lista=document.querySelector(".lista");
const bt=document.querySelector('.bt1');
const cadastro=document.querySelector('.cadastro');
const texto=document.querySelector('.texto');
const aside=document.querySelector('.aside');

nome.addEventListener('keydown', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { 
      listaNomes.push(this.value)
      localStorage.setItem('herois', JSON.stringify(listaNomes))
      localStorage.setItem('nomes',nome.value);
      let stringm = localStorage.getItem('herois');
      let obj = JSON.parse(stringm);
      localStorage.clear()
    }
    listarnomes();
  });

function listarnomes(){
    lista.innerHTML="";

    listaNomes.forEach(function(nome)
    {
        
        lista.innerHTML+=
    `
        <li>${nome}<span>&#129304;</span></li>
 
    `
    });
}

 bt.addEventListener("click",function(){
    cadastro.classList.add('aparecer');
    texto.classList.add('desaparecer');
    aside.classList.add('active');
})

window.addEventListener("load", _ => {
  localStorage.clear();
  lista.innerHTML="";
  if (localStorage.hasOwnProperty("herois")) {
  JSON.parse(localStorage.getItem("herois")).forEach(heroi => {
      lista.insertAdjacentHTML('beforeend',
      `
      <li>${heroi.nomes}<span>&#129304;</span></li>

      `
      )
    })    
  }
})
