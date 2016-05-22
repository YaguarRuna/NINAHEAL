var data = [];

function leer(){
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
        localStorage.removeItem("casillas"+title);
    }
    
    guardar();      
}
