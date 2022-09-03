


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Puntajes</title>
    <link rel="stylesheet" href="css/style_puntajes.css">
</head>
<body>
    

<?php
require 'conexion.php';

$sqlMostrar= "select * from puntajes order by punt_puntaje desc;";
$resulset= mysqli_query ($conn,$sqlMostrar);

        ?>



<?php
?>

    
<?php

while ($registro= mysqli_fetch_assoc($resulset)){
   ?>
   <div id="cuerpo">
    <div class="contenedores">
   <?php
    echo $registro['punt_nick'], ": ";
    echo $registro['punt_puntaje'], "<br>";
    ?>
    </div>
</div>
   <?php
}    
?>


</body>
</html>


