
document.getElementById('btProcesar').onclick=guardarPersona;
window.onload=iniciarApp;
function limpiarPersonas() //limpia el contenido html de datos
{
  document.getElementById('tab_datos').innerHTML="";
  console.log("limpiando");
}
function mostrarPersonas()
  {
  console.log("cargando tabla");
    console.log("personas ->"+personas);
    if (personas!=null)
    {
    salida="<h3>Personas</h3><a id='btNuevo'data-id='-1' class='btn btn-success ' >Nuevo</a> ";
    for (var i = 0; i < personas.length; i++) {
        console.log("girando");
        iconsBorrar2="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'><path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z'/></svg>";
        iconsEditar2="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-brush' viewBox='0 0 16 16'><path d='M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z'/></svg>";
        
        salida=salida+"<div class='card'><div class='card-header'>"+personas[i].apellido+", "+personas[i].nombre+"</div><div class='card-body'><div class='row'><div class='col'><p class='card-text'><label>CI Nro.:</label>"+personas[i].cin+ "</p><p class=''><label>Fecha de Nacimiento:</label>" +personas[i].fenac+"</p><p class='card-text'><label>Localidad:</label>"+personas[i].ciudad_id+"</p></div><div class='col'><a data-id='"+personas[i].id+"'  class='btn btn-warning btn-editPersona'>"+iconsEditar2+"Editar</a><a data-id="+personas[i].id+" ''  class='btn btn-danger btn-borrarPersona'>"+iconsBorrar2+"Borrar</a></div></div></div></div>";
        //salida=salida+"<tr><td>"+i+"</td><td>"+personas[i].cin+"</td><td>"+personas[i].apellido+"</td><td>"+personas[i].nombre+"</td><td>"+personas[i].fenac+"</td> <td><a class='btEditar btn btn-outline-warning ' data-idx='"+personas[i].id+"'>Editar</a></td> <td><a class='btBorrar btn btn-outline-danger ' data-idx='"+personas[i].id+"'>Borrar</a></td></tr>"
        //console.log(salida);
      }
      document.getElementById('datosPersonas').innerHTML=salida;
      btns=document.getElementsByClassName('btn-editPersona');
      for (var i = 0; i < btns.length; i++) {
        btns[i].onclick=editarPersona;
      }
      bbtn=document.getElementsByClassName('btn-borrarPersona');
      for (var i = 0; i < bbtn.length; i++) {
        bbtn[i].onclick=borrarPersona;
      }
      document.getElementById('btNuevo').onclick=editarPersona;
      showListPersonas();
    }
  }

  function nuevoPersona ()
  {
    limpiarForm();
    document.getElementById('cin').focus();
  }

///
function limpiarForm()
{
  document.getElementById('idx').value="-1";
  document.getElementById('cin').value="";
  document.getElementById('apellido').value="";
  document.getElementById('nombre').value="";
  document.getElementById('fenac').value="";
}

//editarForm
function editarPersona(e)
{
  //console.log(e);
  let idxe=getPersonasById(e.target.attributes["data-id"].value);
  console.log(idxe);
  if (idxe>=0) {
    document.getElementById('id').value=personas[idxe].id;
    document.getElementById('cin').value=personas[idxe].cin;
    document.getElementById('apellido').value=personas[idxe].apellido;
    document.getElementById('nombre').value=personas[idxe].nombre;
    document.getElementById('fenac').value=personas[idxe].fenac;

  } else {
    document.getElementById('id').value="-1";
    document.getElementById('cin').value="";
    document.getElementById('apellido').value="";
    document.getElementById('nombre').value="";
    document.getElementById('fenac').value="";
  }


  document.getElementById('cin').focus();
  //iniciarApp();
  showFormPersonas();
}
