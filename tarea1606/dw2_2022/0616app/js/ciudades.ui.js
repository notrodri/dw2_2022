var cancelar=document.getElementById("cancelFormCiudad");
cancelar.onclick=showListCiudades;
var sendCiudad=document.getElementById("sendFormCiudad");
sendCiudad.onclick=saveCiudades;
function mostrarCiudades()
    {
        console.log("listando ciudades");

        if (ciudades!=null)
        {
        salida='<h3>Ciudades <span><a  class="btn btn-success btn-editcid" class="" data-id="-1" >Nuevo</a></span></h3>';
        for (var i = 0; i < ciudades.length; i++) {
           // console.log("girando");
            iconsBorrar="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'><path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z'/></svg>"
            iconsEditar="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-brush' viewBox='0 0 16 16'><path d='M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z'/></svg>"
            iconsJson="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-device-hdd' viewBox='0 0 16 16'><path d='M12 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM8 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'/><path d='M12 7a4 4 0 0 1-3.937 4c-.537.813-1.02 1.515-1.181 1.677a1.102 1.102 0 0 1-1.56-1.559c.1-.098.396-.314.795-.588A4 4 0 0 1 8 3a4 4 0 0 1 4 4Zm-1 0a3 3 0 1 0-3.891 2.865c.667-.44 1.396-.91 1.955-1.268.224-.144.483.115.34.34l-.62.96A3.001 3.001 0 0 0 11 7Z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4Z'/></svg>"
            salida=salida+"<div class='card'><div class='card-header'>"+ciudades[i].id+"</div><div class='card-body'><div class='row'><div class='col'><p class='card-text'><label>Ciudad:</label>"+ciudades[i].ciudad+"</p></div><div class='col'><a data-id='"+ciudades[i].id+"' class='btn btn-warning btn-editcid'>"+iconsEditar+"Editar</a><a data-id='"+ciudades[i].id+"' class='btn btn-danger btn-delcid'>"+iconsBorrar+"Borrar</a><a data-id='"+ciudades[i].id+"' class='btn btn-primary btn-cjson' target='_blank'>"+iconsJson+"JSON</a></div></div></div></div>";
          }
          document.getElementById('datosCiudades').innerHTML=salida;
          btns=document.getElementsByClassName('btn-editcid');
          for (var i = 0; i < btns.length; i++) {
            btns[i].onclick=editarCiudades;
          }
          bbtn=document.getElementsByClassName('btn-delcid');
          for (var i = 0; i < bbtn.length; i++) {
            bbtn[i].onclick=deleteCiudades;
        }
        //boton JSON
          btncjson=document.getElementsByClassName('btn-cjson');
          for(var i =0;i<btncjson.length;i++){
            btncjson[i].onclick=ciudadesAJSON;
          }
        showListCiudades();
    }
    }

function ciudadesAJSON(e){
  let idxe=e.target.attributes["data-id"].value;

  url=rutaJSON+"ciudades/json.php?id="+idxe;
  console.log(url);
  location.href =url;


}
function editarCiudades(e)
{
  console.log("editar ciudades");
//  hideListCiudades();
  let idxe=e.target.attributes["data-id"].value;
  idx=getCiudadById(idxe);
  ///console.log(ciudades);
  if (idx>=0)
  {
  document.getElementById('idx').value=ciudades[idx].id;
  document.getElementById('ciudad').value=ciudades[idx].ciudad;
  }
  else
  {
    document.getElementById('idx').value=-1;
    document.getElementById('ciudad').value="";
 }
 showFormCiudades();
  document.getElementById('ciudad').focus();

}
