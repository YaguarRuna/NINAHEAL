var data = [];
var eliminar=true;
function add(){
    var casilla= new Object();
    var tmp= document.getElementById("isub");
    if(tmp.value==""){
        return;
    }
    casilla.title=tmp.value;
    data.push(casilla);
    guardar();
}

function guardar(){
    localStorage.setItem("contador2",data.length);
    localStorage.setItem("categorias",JSON.stringify(data));
}



function showadd(){
    document.getElementById("cadd").style.visibility="visible";
}

function leer(){
    var contador=localStorage.getItem("contador2")*1;
    data=JSON.parse(localStorage.getItem("categorias"));
    if (data==null){
        data=[];
    }
}


function mostrar(){
    var tmp="";
    for (var i = 0; i < data.length; i++) {
        var element= data[i];
        tmp+="<div index="+i+" title='"+element.title+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1 style='text-transform:uppercase;'>"+element.title+"</h1></div>";  
    }
    document.getElementById("icasillero").innerHTML=tmp;
}



function ccasilla(idelemento){
    var tmp=document.getElementById(idelemento);
    var title=tmp.getAttribute("title");
    if(eliminar){
        localStorage.setItem("ccategory",title);
        location.assign("start.html");
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