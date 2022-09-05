let aunmento=100;
let temp=0;
//let pers2 = document.getElementById("pers2");
//let inicio = document.getElementById("inicio");

//pers2.src="../img/personajes/pers2_1.png";


function animacionInicio(){
   
    pers2.style.height="100%";
    pers2.style.width="100%";
    
    /*
    height: 95%;
    width: 75%;
    */

    setTimeout(cambiarImagenAnimacionInicio,temp,"uno.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"dos.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"tres.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"cuatro.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"cinco.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"seis.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"siete.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"ocho.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"nueve.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"diez.png");
    temp = temp + aunmento;

    setTimeout(cambiarImagenAnimacionInicio,temp,"nueve.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"ocho.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"siete.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"seis.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"cinco.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"cuatro.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"tres.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"dos.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"uno.png");
    temp = temp + aunmento;
    setTimeout(cambiarImagenAnimacionInicio,temp,"../pers2_1.png");
    setTimeout(()=>{
        pers2.style.height="95%";
        pers2.style.width="75%";
       
    },temp)
}

function cambiarImagenAnimacionInicio(a){
pers2.src="img/personajes/intro/"+a;
}

inicio.addEventListener('click', animacionInicio)