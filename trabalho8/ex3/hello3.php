<?php
  $n = $_GET["qdeParagrafos"];

  echo "<h1>Página web dinâmica</h1>";
  for ($i = 0; $i < $n; $i++) {
    echo "<p> Texto qualquer gerado! </p>";
  }
?>
