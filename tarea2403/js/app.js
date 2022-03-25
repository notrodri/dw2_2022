var dato1;
var dato2;
function cargar(){//cargo los datos que ingresó el usuario
    dato1=document.getElementById("dimension1").value;//cargo solamente el valor del input
    dato2=document.getElementById("dimension2").value;
    if(dato2<dato1){
       console.log("No se puede procesar la petición"); 
    }else{
        for(var j=dato1;j<=dato2;j++){//imprimo la cantidad de veces según usuario
            impresionTabla(j);
        }   
    }    
}
//función para impresión de tabla según parámetro ingresado
function impresionTabla(num){
    console.log("Imprimiendo la tabla del: "+num);
    for(var i=1;i<=10;i++){
        console.log(num+"x"+i+"="+num*i+"\n");
    }
}

var lista=[];
function suma(){
    var s=0;
    var lista=[1,2,3,4];
    for(var i=0;i<lista.length;i++){
        s+=lista[i];
    }
    lista.forEach(element =>console.log(element));
    console.log(s);
}
//suma();
//cargar();
//impresionTabla(5);