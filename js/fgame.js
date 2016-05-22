var data= new Array;

var currentcategoria=localStorage.getItem("ccategory");
var contados=0;
var elegido;
var bandera=true;
function leer(){
    data=JSON.parse(localStorage.getItem("casillas"+currentcategoria));
    
    if (data==null){
        data=[];
    }
}
function mostrar(){
    var tmp = "";
    var contador = data.length;
    var datos=[];

    for (var i = 0; i < contador; i++) {
        var element= new Object();
        element.title=data[i].title;
        element.answer=data[i].answear;
        datos.push(element);
        element= new Object();
        element.title=data[i].answear;
        element.answer=data[i].title;
        datos.push(element);
    }
    
    
    var selected=[];
    for (var i = 0; i < datos.length; i++) {
        var aux;
        while(true){
            aux=Math.floor(Math.random()*datos.length);
            if(selected.indexOf(aux)==-1){
                selected.push(aux);
                break;
            }
        }
        
        var element = datos[aux];
        tmp+="<div index="+i+" id='c"+i+"' title="+element.title+" done=false respuesta="+element.answer+" onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1></div>";
    }
    
    document.getElementById("icasillero").innerHTML=tmp;
}

function ccasilla(idelemento){
    var tmp=document.getElementById(idelemento);
    var done=tmp.getAttribute("done");
    if(done==true) return;
    var title=tmp.getAttribute("title");
    var answer=tmp.getAttribute("respuesta");
    if(elegido!=undefined && elegido.getAttribute("title")==title){return;}
    
    if(bandera){
        elegido=tmp;
        tmp.classList.add("selected");
        bandera=!bandera;
    }else{
        if(elegido.getAttribute("respuesta")==title){
            tmp.setAttribute("done",true);
            elegido.setAttribute("done",true);
            tmp.classList.add("selected");
            contados+=2;
        }
        else{
            elegido.classList.remove("selected");
        }
        
        elegido=document.getElementById("message");
        bandera=!bandera;
    }


    tap();
    if(contados==data.length*2){
        location.reload();
    }
   
}



function tap(){
    var v = document.getElementById("tap");
    v.play();
}

