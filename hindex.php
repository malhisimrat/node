<?php
    session_start();
    if(!isset($_SESSION['email'])){
        echo "<script>window.location.assign('user_login.php?msg=Please Login First!!')</script>";
    }else{
        $user=$_SESSION['user'];
    }
    ?>
<?php
include('header.php');
$id=$_SESSION['id'];
?>
<style>
    .container{
        margin-top:30px;
    }
	#welcome{
     
        width:100%;
        border:1px solid black;
        margin:10px;
        padding-top:90px;
        
    }
    .newone{
        border:2px solid #20A388;
        box-shadow: 5px 5px 9px #20A388;
        padding:40px;
        margin-top:20px;
        margin-bottom: 20px;
        
    }
    .font3{
        color:black;
        font-weight:400px;
        font-size:30px;
    }
 
    
</style>
<div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Dashboard</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container">
	<div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8" id="welcome">
           <center> <h1>WELCOME </h1></center>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-4 newone font3">
                    <a href="appointment.php"> <h1 class="text-dark text-center">Total Hospitals</h1></a>
                    
                    <a href="appointment.php" class="text-dark">
                        <?php
                        $query="SELECT * from `appointment` where `hospital`='$id'";
                        include('config.php');
                        $res=mysqli_query($conn,$query);
                        $data=mysqli_num_rows($res);
                        echo "<h1 class='text-dark text-center'>".$data."</h1>";
                        ?>
                    </a>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4 newone font3">
                    <a href="new_appointment.php"> <h1 class="text-dark text-center">New Appointments</h1></a>
                    
                    <a href="new_appointment.php" class="text-dark">
                        <?php
                        $query="SELECT * from `appointment` where `hospital`=$id and `status`='Pending'";
                        include('config.php');
                        $res=mysqli_query($conn,$query);
                        $data=mysqli_num_rows($res);
                        echo "<h1 class='text-dark text-center'>".$data."</h1>";
                        ?>
                    </a>
                </div>
            </div>
        </div>
    </div>                   
</div>
</div>
<?php
include('footer.php');
?>