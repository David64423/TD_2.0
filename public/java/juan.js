/*let pers2 = document.getElementById('pers2');
let botomA = document.getElementById('botomA');

function ataque(){
    let time=0;
    let aumento=2000;
    pers2.style.height="95%";
    pers2.style.width="110%";
 
    setTimeout(()=>{cambiar("img/personajes/espada.gif");
    pers2.style.transform="translate(33vw,10.50vh)";
    pers2.style.transition="1.0s";
},time,"img/espada.gif");
    
    
    time = time + aumento;
    setTimeout(()=>{
        pers2.style.transform="translate(31vw,10.50vh)"
    },time);
    time= time+200;
    setTimeout(()=>{cambiar("img/personajes/pers2_1.png");
    
    pers2.style.transition="1.0s";
    //vidaT = vidaT-10;
    //asociarVida();

    pers2.style.height="95%";
    pers2.style.width="75%";

if(vidaT <=10){
      setTimeout(muerteTorre,tempRemolino);
    }

},time,"img/personajes/pers2_1.png");
 
 
 };

 function cambiar(b){
    pers2.src=b;
};

botomA.addEventListener('click',function(){ataque(personaje2,"pers2_1.png","espada.gif")});

function asociarVida(){
    torreVida.innerHTML=vidaT;
    personajeVida.innerText=vidaP;
 }
 */