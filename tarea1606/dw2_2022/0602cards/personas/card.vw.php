<div class="card">
  <div class="card-header">
    <?php echo $data['apellido'].", ".$data['nombre']; ?>
  </div>
  <div class="card-body">
    <div class="row">
    <div class="col">
      <p class="card-text"><label>CI Nro.:</label><?php echo $data['cin']; ?> </p>
      <p class=""><label>Fecha de Nacimiento:</label> <?php echo $data['fenac']; ?> <span class="badge badge-pill bg-dark"> <?php echo edadPersona($data['fenac']); ?></span></p>
      <p class="card-text"><label>Localidad:</label><?php echo nombreCiudad($link,$data['ciudad_id']); ?> </p>
    </div>
    <div class="col">
      <a href="<?php echo "index.php?mod=edit&id=".$data["id"]; ?>" class="btn btn-warning">Editar</a>
      <a href="<?php echo "index.php?mod=delecte&id=".$data["id"]; ?>" class="btn btn-danger">Borrar</a>
      <a href="<?php echo "json.php?id=".$data["id"]; ?>" target="new" class="btn btn-primary">JSON</a>
    </div>
    </div>
  </div>
</div>
