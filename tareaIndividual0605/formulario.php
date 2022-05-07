
<?php 
//alumno: Rodrigo Bogado Colmán.!
session_start();?>
<?php
        //si se toca el boton con nombre borrar se agrega al array request y se borra los datos de session
        if(isset($_REQUEST['Borrar'])){
            session_unset();
            header('Location: formulario.php');

        }
        //verifico que el array personas no esté creado
        if(!isset($_SESSION['personas'])){
            $_SESSION['personas']=[];
        }
        //verifico que en post haya los valores del form
        if(isset($_POST['nombre']) && isset($_POST['apellido']) && isset($_POST['fechaNac'])){

            //verifico que sean diferentes que vacio
            if($_POST['nombre']!="" && $_POST['apellido']!="" && $_POST['fechaNac']!=""){
                $nombre=$_POST['nombre'];
                $apellido=$_POST['apellido'];
                $fechaNacimiento=$_POST['fechaNac'];
                //creo un array asociativo en array personas dentro del array session
                array_push($_SESSION['personas'],array('nombre'=>$nombre,'apellido'=>$apellido,'fechaNac'=>$fechaNacimiento));         
            }
    }
    function imprimirTabla(){
        //imprimo la tabla si es que existe algún dato en array personas
        if(count($_SESSION['personas'])>0){
            for($i=0;$i<count($_SESSION['personas']);$i++){
                echo "<tr><td>".$i."</td><td>".$_SESSION['personas'][$i]['nombre']."</td><td>".$_SESSION['personas'][$i]['apellido']."</td><td>".$_SESSION['personas'][$i]['fechaNac']."</td"."</tr>";
            }
        }
    }
    
?>
<html>
    <head>
    <title> </title>

    </head>

    <body>

    <form method="post" action="formulario.php" id="form1">
        <input type="text" name="nombre" placeholder="Ingrese su nombre: ">
        <input type="text" name="apellido" placeholder="Ingrese su apellido: ">
        <input type="date" name="fechaNac" placeholder="Ingrese su fecha de nacimiento: ">
    </form>
    <button type="submit" form="form1" value="Submit">Cargar</button>
    <button name="Borrar" type="submit" form="form1">Borrar</button>
    
    <br>


<table>
        <thead>
            <tr id="tab_cabe">
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Fecha Nacimiento</th>
            </tr>  
        </thead>
        <tbody>
            
            <?php
                    imprimirTabla();
            ?>
        </tbody>
    </table>

    
    </body>
</html>