document.getElementById('personasList').onclick=showListPersonas;
document.getElementById('ciudadesList').onclick=showListCiudades; // asigno la funcion limpiarTabla al evento click del boton
personas=[]; // declara el array
ciudades=[];
rutaJSON="http://127.0.0.1/dw2_2022/0602cards/";


/// procesar formulario
function showFormCiudades(){
    console.log("showFormCiudades");
    $('#datosCiudades').hide();
    $('#datosPersonas').hide();
    $('#formPersonas').hide();
    $('#formCiudades').show();
}
function showListCiudades(){
    console.log("showListCiudades");
    $('#datosCiudades').show();
    $('#datosPersonas').hide();
    $('#formPersonas').hide();
    $('#formCiudades').hide();
}
function showListPersonas(){
    console.log("hideListCiudades");
    $('#datosCiudades').hide();
    $('#datosPersonas').show();
    $('#formPersonas').hide();
    $('#formCiudades').hide();
}
function showFormPersonas(){
    console.log("showFormPersonas");
    $('#datosCiudades').hide();
    $('#datosPersonas').hide();
    $('#formPersonas').show();
    $('#formCiudades').hide();
  }
  function iniciarApp()
  {
    cargarPersonas();
    mostrarPersonas();
    getCiudades();
    mostrarCiudades();
  //  showListPersonas();
  }
