<?php
if(isset($_GET['id'])){
    $id=$_GET['id'];
   include('config.php');
   $query="UPDATE `appointment` SET `status`='Rejected' WHERE `id`=$id";
   $res=mysqli_query($conn,$query);
   if($res>0){
        echo "<script>window.location.assign('new_appointment.php?msg=Rejected Successfully')</script>";
    }
    else{
       echo "<script>window.location.assign('new_appointment.php?msg=Error!!Try Again')</script>";
   }
}
else{
    echo "<script>window.location.assign('new_appointment.php?msg=Something Went wrong')</script>";
}


?>