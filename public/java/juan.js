let aunmentoRemolino=50;
let pers2 = document.getElementById("pers2");
let botomB = document.getElementById("botomB");

//pers2.src="../img/personajes/pers2_1.png";


function animacionRemolino(){
    let tempRemolino=0;
   
    pers2.style.height="100%";
    pers2.style.width="90%";
    pers2.style.transform="translateX(200px)";
    pers2.style.transition="2s";
    
    /*
    height: 95%;
    width: 75%;
    */

    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"uno.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"dos.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"tres.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"cuatro.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"cinco.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"seis.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"siete.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(()=>{cambiarImagenAnimacionRemolino("ocho.png");
        pers2.style.transition="1s";
        pers2.style.transform="translateX(0px)";},tempRemolino,"ocho.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"nueve.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"diez.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"once.png");
    tempRemolino = tempRemolino + aunmentoRemolino;


    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"cuatro.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"cinco.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"dos.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"uno.png");
    tempRemolino = tempRemolino + aunmentoRemolino;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"../pers2_1.png");
    setTimeout(()=>{
        pers2.style.height="95%";
        pers2.style.width="75%";
        
    },tempRemolino)
}

function cambiarImagenAnimacionRemolino(a){
pers2.src="img/personajes/remolino/"+a;
}

botomB.addEventListener('click', animacionRemolino)