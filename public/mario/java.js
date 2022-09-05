let link1 = document.getElementById('link1');
let parrafo1 = document.getElementById('parrafo1');
let i=0;
let distancia=10;
let distancia2=0;
let parrafo5 = document.getElementById("parrafo5");
let link5 = document.getElementById("link5");
let imagen5 = document.getElementById("imagen5");
function marioc(){
mario();
setTimeout(mario,200);
setTimeout(mario,400);

};
function mario(){

let i2=0;
let numero=2;

while(i2 < numero){
    setTimeout(vacia,400)
        imagen5.style.transform="translate("+distancia+"px,0%)";
        distancia = distancia+10;
        imagen5.style.transition="0.2s";
        imagen5.src="dos.gif";
   
    i2++; 
    setTimeout(imagenUno,2000);




    setTimeout(vacia,400)
        imagen5.style.transform="translate("+distancia+"px,0%)";
        distancia = distancia+10;
        imagen5.style.transition="0.2s";
        imagen5.src="dos.gif";
   
    i2++; 
    setTimeout(imagenUno,100);
}
    
    
}
function vacia (){

}
function imagenUno(){
   imagen5.src="uno.gif";
}

function imagenDos(){
    imagen5.src="dos.gif";
}

function imagenTres(){
    imagen5.src="tres.gif";
}

link5.addEventListener('click',marioc);

//De aca en adelante esta el boton atras

function marioc2(){
    mario2();
    setTimeout(mario2,200);
    setTimeout(mario2,400);
    
    };
function mario2(){

let i2=0;
let numero=2;

while(i2 < numero){
    setTimeout(vacia,400)
        imagen5.style.transform="translate("+distancia+"px,0%)";
        distancia = distancia-10;
        imagen5.style.transition="0.2s";
        imagen5.src="6.gif";
   
    i2++; 
    setTimeout(imagenUnodos,100);


    setTimeout(vacia,400)
        imagen5.style.transform="translate("+distancia+"px,distanciaYpx)";
        distancia = distancia-10;
        imagen5.style.transition="0.2s";
        imagen5.src="6.gif";
   
    i2++; 
    setTimeout(imagenUnodos,100);




    
}
    
    
}
function vacia (){

}
function imagenUnodos(){
   imagen5.src="5.gif";
}

function imagenDos(){
    imagen5.src="dos.gif";
}

function imagenTres(){
    imagen5.src="tres.gif";
}

link6.addEventListener('click',marioc2);





//Programar Salto abajo



function mario3(){

    let i2=0;
    let numero=2;
    
    while(i2 < numero){
        setTimeout(vacia,400)
        imagen5.src="9.gif";
        distanciaY = -150;
            imagen5.style.transform="translate("+distancia+"px,distanciaY)";
            
            imagen5.style.transition="0.6s";
            
       
        i2++; 
        setTimeout(cambiarNormal,601);
    
    
      
    
    
    
        
    }
        
        
    }
    function cambiarNormal(){
        imagen5.style.transform="translate("+distancia +"px,0px)";
            
            imagen5.style.transition="0.6s";
            setTimeout(cambiarImagenNormal,601);
    }

    function cambiarImagenNormal(){
        imagen5.src="uno.gif";
    }

    
    link7.addEventListener('click',mario3);
    
    
    
    //De aca en adelante esta la programacion de las nubes movimiento para atras

    function nuvesc(){
        nuves();
        setTimeout(nuves,200);
        setTimeout(nuves,400);
        
        };
function nuves(){
    
        distancia2=distancia;
        let i2=0;
        let numero=2;
        
        while(i2 < numero){
            setTimeout(vacia,400)
                nubes.style.transform="translate(-"+distancia2+"px,0%)";
                distancia = distancia2+10;
                nubes.style.transition="0.2s";
                
           
            i2++; 
            
        
        
        
        
            nubes.style.transform="translate(-"+distancia2+"px,0%)";
            distancia = distancia2+10;
            nubes.style.transition="0.2s";
            
           
            
            i2++;
        }
}

    let nubes = document.getElementById("imagenNubes");
    link5.addEventListener('click',nuvesc);


    //De aca en adelante esta la programacion de las nubes movimiento para adelante















    function nuvesc2(){
        nuves2();
        setTimeout(nuves2,200);
        setTimeout(nuves2,400);
        
        };
function nuves2(){
    
        distancia2=distancia;
        let i2=0;
        let numero=2;
        
        while(i2 < numero){
            setTimeout(vacia,400)
                nubes.style.transform="translate(-"+distancia2+"px,0%)";
                distancia = distancia2-10;
                nubes.style.transition="0.2s";
                
           
            i2++; 
            
        
        
        
        
            nubes.style.transform="translate(-"+distancia2+"px,0%)";
            distancia = distancia2-10;
            nubes.style.transition="0.2s";
            
           
            
            i2++;
        }
}

    
    link6.addEventListener('click',nuvesc2);
