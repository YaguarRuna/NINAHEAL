var data=[];
var eliminar=true;

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
    for (var i = 0; i < data.length; i++) {
        var element = data[i];
        tmp+="<div index="+i+" sub='"+element.sub+"' title='"+element.title+"' respuesta='"+element.answear+"' id='c"+i+"' onclick='ccasilla(\"c"+i+"\")' ><h1>"+element.title+"</h1><h3>"+element.sub+"</h3></div>";
    }
    document.getElementById("icasillero").innerHTML=tmp;
}
function add(){
    var casilla= new Object();
    var tmp= document.getElementById("ititle");
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
        tmp.innerHTML="<h1>"+respuesta+"</h1><h3>"+title+"</h3>";
        tmp.classList.add("cselected");
    }
    else{
        if(data.length>1){
            var index=tmp.getAttribute("index");
            data.splice(1,index*1);
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






function adSetter(){
alert(navigator.userAgent);
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-6869992474017983/9375997553',
        interstitial: 'ca-app-pub-6869992474017983/1657046752'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    admobid = { // for iOS
        banner: 'ca-app-pub-6869992474017983/4806197152',
        interstitial: 'ca-app-pub-6869992474017983/7563979554'
    };
} else {
    admobid = { // for Windows Phone
        banner: 'ca-app-pub-6869992474017983/8878394753',
        interstitial: 'ca-app-pub-6869992474017983/1355127956'
    };
}
 
if(AdMob) AdMob.createBanner( {
    isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
 
}
  function onDeviceReady(){
  alert("device ready");
      adSetter();
  }
 
 
function domLoaded(){
 document.addEventListener("deviceready", onDeviceReady, false);
}






leer();
mostrar();