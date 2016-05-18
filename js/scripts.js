var data=[];
var eliminar=true;
var rapido=[];
function showadd(){
    document.getElementById("cadd").style.visibility="visible";
}

function guardar(){
    localStorage.clear();
    for (var i = 0; i < data.length; i++) {
        var element = data[i];
        localStorage.setItem("c"+i,JSON.stringify(element));
    }
    localStorage.setItem("contador",data.length);
}
function leer(){
    var contador=localStorage.getItem("contador")*1;
    data=[];
    for (var i = 0; i < contador; i++) {
        var element = localStorage.getItem("c"+i);
        data.push(JSON.parse(element));
    }
}
function mostrar(){
    var tmp="";
    var selected=[];
    for (var i = 0; i < data.length; i++) {
        var aux;
        while(true){
            aux=Math.floor(Math.random()*data.length);
            if(selected.indexOf(aux)==-1){
                selected.push(aux);
                break;
            }
        }
        
        var element = data[aux];
        
        if(element.title.length>=12)
            tmp+="<div index="+i+" class='reduccion' sub='"+element.sub+"' title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1><h3 style='text-transform:lowercase;'>"+element.sub+"</h3></div>";       
        else
            tmp+="<div index="+i+" sub='"+element.sub+"' title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1><h3 style='text-transform:lowercase;'>"+element.sub+"</h3></div>";
    }
    document.getElementById("icasillero").innerHTML=tmp;
}
function add(){
    var casilla= new Object();
    var tmp= document.getElementById("ititle");
    if(tmp.value==""){
        return;
    }
    casilla.title=tmp.value;
    tmp= document.getElementById("isub");
    casilla.sub=tmp.value;
    tmp= document.getElementById("ians");
    casilla.answear=tmp.value;
    data.push(casilla);
    guardar();
}
function ccasilla(idelemento){
    var tmp=document.getElementById(idelemento);
    var respuesta=tmp.getAttribute("respuesta");
    var title=tmp.getAttribute("title");
    if(eliminar){
        if(respuesta.length<=12)
            tmp.parentNode.classList.remove("reduccion");
        tmp.innerHTML="<h1 style='text-transform:uppercase;'>"+respuesta+"</h1><h3 style='text-transform:lowercase;'>"+title+"</h3>";
        
        tmp.classList.add("cselected");
        tap();
    }
    else{
        if(data.length>1){
            var index=tmp.getAttribute("index");
            data.splice(index*1,1);
        }
        else{
            data=[];
        }
        tmp.parentNode.removeChild(tmp);

    }
    guardar();      
}
function del(){
    eliminar=!eliminar;
    if(eliminar==false)
        document.getElementById("icasillero").classList.add("eliminar");
    else
        location.reload();
    
}


/*----------------SELECT------------------*/
function select(){
    leer();
    
    var tmp="";
    for (var i = 0; i < data.length; i++) {
        var element = data[i];
        tmp+="<div index="+i+" sub='"+element.sub+"' title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla2(\"c"+i+"\")' ><h1 style='text-transform:lowercase;'>"+element.title+"</h1><h3 style='text-transform:lowercase;'>"+element.sub+"</h3></div>";
    }
    document.getElementById("icasillero").innerHTML=tmp;
    
}

function ccasilla2(idelemento){
    var tmp=document.getElementById(idelemento);
    var respuesta=tmp.getAttribute("respuesta");
    var title=tmp.getAttribute("title");
    var subtitle=tmp.getAttribute("sub");
    var casilla= new Object();
    casilla.title=title;
    casilla.sub=subtitle;
    casilla.answear=respuesta;
    casilla.puntaje=3;
    rapido.push(casilla);
    guardar2();      
}

function leer2(){
    var contador=localStorage.getItem("contador2")*1;
    rapido=[];
    for (var i = 0; i < contador; i++) {
        var element = localStorage.getItem("cr"+i);
        rapido.push(JSON.parse(element));
    }
}
function guardar2(){
    localStorage.clear();
    guardar();
    for (var i = 0; i < rapido.length; i++) {
        var element = rapido[i];
        localStorage.setItem("cr"+i,JSON.stringify(element));
    }
    localStorage.setItem("contador2",rapido.length);
}
function mostrar2(){
    leer2();
    var tmp="";
    for (var i = 0; i < rapido.length; i++) {
        var element = rapido[i];
        tmp+="<div index="+i+" sub='"+element.sub+"' puntaje='"+element.puntaje+"' title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='crapida(\"c"+i+"\")' ><h1 style='text-transform:lowercase;'>"+element.title+"</h1><h3 style='text-transform:lowercase;'>"+element.sub+"</h3></div>";
    }
    document.getElementById("icasillero").innerHTML=tmp;
}

function crapida(idelemento){
    
    
}

/*---------------------------SELECT FIN ------------------*/

function tap(){
    var v = document.getElementById("tap");
    v.play();
}

