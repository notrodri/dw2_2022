<?php
if ($res){
$data=mysqli_fetch_array($res);
}
 ?>
 <div class="alert alert-danger" role="alert">
   <p >
     Favor verificar los datos: 
     <?php
       for ($i=0; $i<count($_SESSION['errores'][0]) ; $i++){
         echo "<br> - ".$_SESSION['errores'][0][$i];
       }
      ?>
   </p>

 </div>