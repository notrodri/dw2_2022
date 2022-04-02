personas=[];

document.getElementById("boton").onclick=cargarTabla;
function cargarDatos(){
    
    personas.push({docnro:"123",nombre:'Luis',apellido:"Escobar",feNac:"1990/03/03"});
    personas.push({docnro:"123",nombre:'Luis',apellido:"Escobar",feNac:"1990/03/03"});
    personas.push({docnro:"123",nombre:'Luis',apellido:"Escobar",feNac:"1990/03/03"});

}

function cargarArray(){
    personas.push({docnro:""+document.getElementById("cedula").value,nombre:""+document.getElementById("nombre").value,apellido:""+document.getElementById("apellido").value,feNac:""+document.getElementById("fechaNac").value})
    cargarTabla();
}


function limpiarTabla(){
    document.getElementById("tab_datos").innerHTML="";
    personas.length=0;
}
function cargarTabla(){
    salida="";
    for(var i=0;i<personas.length;i++){
        salida=salida+"<tr><td>"+i+"</td>"+"<td>"+personas[i].docnro+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].feNac+"</td></tr>";    
    }
    document.getElementById("tab_datos").innerHTML=salida;

}

//cargarDatos();
//console.log(personas);