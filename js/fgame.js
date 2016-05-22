var data= new Array;

var currentcategoria=localStorage.getItem("ccategory");

function leer(){
    data=JSON.parse(localStorage.getItem("casillas"+currentcategoria));
    
    if (data==null){
        data=[];
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
        if(element.check){
            var cambiar = Math.random() < 0.5 ? true : false;
            if (cambiar==true){
                var aux2;
                aux2=element.answear;
                element.answear=element.title;
                element.title=aux2;
            }
        }
        
        if(element.title.length>=12)
            tmp+="<div index="+i+" class='reduccion'  title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1></div>";       
        else
            tmp+="<div index="+i+" title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1></div>";
    }
    document.getElementById("icasillero").innerHTML=tmp;
}

function ccasilla(idelemento){
    var tmp=document.getElementById(idelemento);
    var respuesta=tmp.getAttribute("respuesta");
    var title=tmp.getAttribute("title");
    if(eliminar){
        if(respuesta.length>=12)
            tmp.classList.add("reduccion");
        else    
            tmp.classList.remove("reduccion");
        
        
            
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



function tap(){
    var v = document.getElementById("tap");
    v.play();
}

