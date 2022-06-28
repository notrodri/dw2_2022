<div class="card">
  <div class="card-header">
    <?php echo $data['id']; ?>
  </div>
  <div class="card-body">
    <div class="row">
    <div class="col">
      <p class="card-text"><label>Nombre:</label><?php echo $data['ciudad']; ?> </p>
    </div>
    <div class="col">
      <a href="<?php echo "index.php?mod=edit&id=".$data["id"]; ?>" class="btn btn-warning">Editar</a>
      <a href="<?php echo "index.php?mod=delecte&id=".$data["id"]; ?>" class="btn btn-danger">Borrar</a>
      <a href="<?php echo "json.php?id=".$data["id"]; ?>" target="new" class="btn btn-primary">JSON</a>
    </div>
    </div>
  </div>
</div>
