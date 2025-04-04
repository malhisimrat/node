<?php
session_start();
if(!isset($_SESSION['email'])){
    echo "<script>window.location.assign('user_login.php?msg=Please Login First!!')</script>";
}else{
    if(isset($_REQUEST['id']))
    {
        $id = $_REQUEST['id'];
        include("config.php");
        $query = "DELETE FROM `city` WHERE `id`='$id'";
        $result = mysqli_query($conn,$query);
        if($result>0)
        {
            echo "<script>window.location.assign('manage_city.php?msg=Record Deleted')</script>";
        }
        else{
            echo "<script>window.location.assign('manage_city.php?msg=Try Again')</script>";
        }
    }
}
?>