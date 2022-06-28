<?php
if ($res){
$data=mysqli_fetch_array($res);
}
 ?>
<h3>Personas</h3>
<form class="" action="index.php" method="post">
  <input type="hidden" name="id" value="<?php if ($data['id']){ echo $data['id'];  } else { echo -1;} ?>">  <br>

  <label for="cin">cin</label><br>
  <input type="text" class="form-control"  name="cin" value="<?php if ($data['cin']){ echo $data['cin'];} ?>"><br>

  <label for="apellido">Apellido</label><br>
  <input type="text" class="form-control"  name="apellido" value="<?php if ($data['apellido']){ echo $data['apellido'];} ?>"><br>

  <label for="nombre">nombre</label><br>
  <input type="text" class="form-control"  name="nombre" value="<?php if ($data['nombre']){ echo $data['nombre'];} ?>"><br>

  <label for="fenac">F. Nacimiento</label><br>
  <input type="text" class="form-control"  name="fenac" value="<?php if ($data['fenac']){ echo $data['fenac'];} ?>"><br>

  <label for="email">Email</label><br>
  <input type="text" class="form-control"  name="email" value="<?php if ($data['email']){ echo $data['email'];} ?>"><br>

  <label for="ciudad_id">Ciudad</label><br>

  <select class="form-select"  name="ciudad_id" class="form-control" >
    <?php
    while ($d=mysqli_fetch_array($ciudades))
    {
      $sel='';
      if (($d['id']==$data['ciudad_id']) )
        { $sel="selected='true'";}
      echo "<option  value='".$d['id']."'".$sel.">".$d['ciudad']."</option>";
    }
     ?>
  </select>
  <button type="submit"  class="btn btn-primary" >Enviar</button><a  class="btn btn-secondary"  href="index.php">volver</a>
</form>
