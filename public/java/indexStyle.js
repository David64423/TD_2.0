let personaje2 = document.getElementById("pers2");
let derecha = document.getElementById("derecha");
let abajo = document.getElementById("abajo");
let izquierda = document.getElementById("izquierda");
let x = document.getElementById("x");
let y = document.getElementById("y");
let distanciaX=0;
let distanciaY=0;    
let distanciaM=0.7;
let start = document.getElementById('start');
let torreVida = document.getElementById('vidaTorre');
let personajeVida = document.getElementById('vidaPersonaje2');
let vidaT=200;
let vidaP=50;

function asociarVida(){
   torreVida.innerHTML=vidaT;
   personajeVida.innerText=vidaP;
}
asociarVida();

//let reset = document.getElementById('reset');
izquierda.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarX)});
start.addEventListener('click',function(){ automatizar(personaje2,"pers2_1.png","pers2_2.png",sumarX)});
arriba.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",sumarY)});
abajo.addEventListener('click',function(){ mainCaminar(personaje2,"pers2_1.png","pers2_2.png",restarY)});

botomA.addEventListener('click',function(){ataque(personaje2,"pers2_1.png","espada.gif")});

reset.addEventListener('click',function(){daño(personaje2,"../pers2_1.png","golpeado.gif")});

derecha.addEventListener('click',function(){muerte(personaje2,"../pers2_1.png","muerte.gif")});





//Funcion para actualizar coordenadas
const cambiarXY = () => {
x.innerText = distanciaX;
y.innerText = distanciaY;
};

cambiarXY();
//reset.addEventListener('click',resetear());
function resetear(){
    distanciaX=0;
    distanciaY=0;
    personaje2.style.transform=`translate(${distanciaX}vw, ${distanciaY}vh)`;
    personaje2.style.transition="0.009s"
    cambiarXY();
}


//Funcion General
function mainCaminar(a,b,c,fnc){
    let tiempo=0;
    let i=0;

    while(i<1){
        if ((distanciaX<=(2) && fnc===restarX) || (distanciaX>=(34) && fnc===sumarX)|| (distanciaY<=(-13) && fnc===sumarY) || (distanciaY>=(32) && fnc===restarY) ){
            
        }
        else{
            setTimeout(caminar,tiempo,a,b,c,fnc);
            tiempo= tiempo + 200;
            
        }
        i++;
    };
    

    
};



function caminar(a,b,c,fnc){

    cambiar(a, "img/personajes/"+c);
    fnc();
    a.style.transition="0.09s"
    a.style.transform="translate("+distanciaX+"vw,"+distanciaY+"vh)";
    
    setTimeout(cambiar,100,a,"img/personajes/"+b);
    
    cambiarXY();

};
//Fin de la funcon general

function restarX(){
    distanciaX= distanciaX -distanciaM;
};

function sumarX(){
    distanciaX= distanciaX +distanciaM;
};

function sumarY(){
distanciaY = distanciaY - distanciaM;
};
function restarY(){
    distanciaY = distanciaY + distanciaM
    };



/*
function sumarY(){}
distanciaY = distanciaY-5;}
*/





function cambiar(a,b){
    a.src=b;
};



function automatizar(a,b,c){
   
   let camino= Math.floor(Math.random()*2);
    console.log("camino:",camino);
   
   let tiempo=0;
   let aumento=200;
   animacionInicio();
   tiempo=2500;// Tiempo entre la animacion de tiempo y cuando empieza a caminar
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);

if(camino===1){
   //Abajo 1
let i56=0;
while(i56<24) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



let camino2 = Math.floor(Math.random()*2);
console.log("camino2:",camino2);

if(camino2===1){


//Derecha2

 i56=0;
while(i56<16) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}




//Abajo 2

 i56=0;
while(i56<9) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


}


else{
    //Derecha2

 i56=0;
 while(i56<3) {
    tiempo += aumento;
    setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
 i56++;
 }


 //Abajo2

 i56=0;
while(i56<17) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



//Derecha3

i56=0;
while(i56<3) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo3

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha4

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


// Arriba 1


i56=0;
while(i56<4) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


//Derecha5

i56=0;
while(i56<3) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

// Arriba 2

i56=0;
while(i56<9) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


}


//Derecha3

i56=0;
while(i56<10) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

//Abajo 3

i56=0;
while(i56<8) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha4

i56=0;
while(i56<13) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}

// Arriba 1


i56=0;
while(i56<25) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}






}

// CAMINO 2
else {
//Derecha2

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 2

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}



//Derecha3

i56=0;
while(i56<7) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


// Arriba 1


i56=0;
while(i56<15) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarY);
i56++;
}


//Derecha4

i56=0;
while(i56<13) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 3

i56=0;
while(i56<8) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}


//Derecha5

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}


//Abajo 4

i56=0;
while(i56<17) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,restarY);
i56++;
}

//Derecha6

i56=0;
while(i56<6) {
   tiempo += aumento;
   setTimeout(mainCaminar,tiempo,a,b,c,sumarX);
i56++;
}
}
   
   
   
   
    /* let tiempo = 0;

    let i43=0;

    while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,sumarX);
        tiempo = tiempo+ 10000;
        
    
    
},tiempo)
i43++;
}



i43=0;
while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,restarY);
        tiempo = tiempo+ 10000;
        
    
    
},tiempo)
i43++;
}


//Derecha 2

i43=0;

while( i43<7){

    setTimeout(()=>{
        
        console.log("Espera");
        mainCaminar(a,b,c,sumarX);
        tiempo = tiempo+ 100000;
        
    
    
},tiempo)
i43++;
}


*/
};

//ataque boton A

function ataque(){
   let time=0;
   let aumento=100;
   pers2.style.height="95%";
   pers2.style.width="75%";

   setTimeout(cambiar,time,"../pers2_1.png");
   time = time + aumento;
   pers2.style.transition="1.0s";
   pers2.style.transform="translate(31vw,10.50vh)";"img/personajes/";
   setTimeout(cambiar,time,"img/personajes/");


};
   

/*ataque 
function ataque(a,b,c){


   cambiar(a, "img/personajes/"+c);

    
   setTimeout(cambiar,3000,a,"img/personajes/"+b);
 

};
*/
function daño(a,b,c){


   cambiar(a, "img/personajes/daño/"+c);


   setTimeout(cambiar,3000,a,"img/personajes/daño/"+b);
 

};
function muerte(a,b,c){


   cambiar(a, "img/personajes/muerte/"+c);


   setTimeout(cambiar,3000,a,"img/personajes/muerte/"+b);
 

};



let temp=0;
let aunmento=100;
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




   let aunmentoRemolino=100;
let aunmentoRemolinoR=100;
//let pers2 = document.getElementById("pers2");
let botomB = document.getElementById("botomB");

//pers2.src="../img/personajes/pers2_1.png";


function animacionRemolino(){
    let tempRemolino=0;
   
    pers2.style.height="100%";
    pers2.style.width="90%";
   
    
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
    setTimeout(()=>{cambiarImagenAnimacionRemolino("cinco.png");
    pers2.style.transform="translate(50vw,10.50vh)";
    pers2.style.transition="2s";
    },tempRemolino,"cinco.png");
    tempRemolino = tempRemolino + aunmentoRemolinoR;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"seis.png");
    tempRemolino = tempRemolino + aunmentoRemolinoR;
    setTimeout(cambiarImagenAnimacionRemolino,tempRemolino,"siete.png");
    tempRemolino = tempRemolino + aunmentoRemolinoR;
    setTimeout(()=>{cambiarImagenAnimacionRemolino("ocho.png");
        pers2.style.transition="0.5s";
        pers2.style.transform="translate(31vw,10.50vh)";
      vidaT = vidaT-20;
      asociarVida();
   },tempRemolino,"ocho.png");
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
        pers2.style.transition="0.001s"
        
    },tempRemolino)
}

function cambiarImagenAnimacionRemolino(a){
pers2.src="img/personajes/remolino/"+a;
}

botomB.addEventListener('click', animacionRemolino) 


 
