<?php
    session_start();
    if(!isset($_SESSION['email'])){
        echo "<script>window.location.assign('user_login.php?msg=Please Login First!!')</script>";
    }else{
        $user=$_SESSION['user'];
    }
    ?>
<?php
if(isset($_REQUEST['id'])){
    $id=$_REQUEST['id'];
    include('config.php');
    $query="SELECT * from `city` where `id`='$id'";
    $res=mysqli_query($conn,$query);
    $d=mysqli_fetch_array($res);
    include('header.php');
    ?>
     <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Edit City</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container">
    <div class="row contact-form pt-lg-5">
        <div class="col-md-2"></div>
        <div class="col-md-8 wthree-form-left px-lg-5 mt-lg-0 mt-5">
        
        <?php
        if(isset($_GET['msg'])){
        ?>
        <div class="row">
            <div class="col-md-12 mt-5">
                <div class="alert alert-primary alert-dismissible " role="alert">
                    <strong><?php echo $_GET['msg']?></strong> 
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
        <?php
        }
        ?>
            <form method="post" class="form-contact contact_formt">
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        City Name
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="city" class="form-control" value="<?php echo $d['city_name']?>" required>
                        <input type="hidden" name="id" class="form-control" value="<?php echo $d['id']?>" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button type="submit" class="btn btn-primary" name="submit"> Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<?php
include('footer.php');
?>
<?php
if(isset($_REQUEST['submit'])){

$city_name=$_REQUEST['city'];
$id=$_REQUEST['id'];
include('config.php');
$query="UPDATE `city` set `city_name`='$city_name' where `id`='$id'";
$res=mysqli_query($conn,$query);
if($res>0){
    echo "<script>window.location.assign('manage_city.php?msg=Updated Successfully')</script>";
}
else{
    echo "<script>window.location.assign('manage_city.php?msg=Cannot Update record!! Try again later')</script>";
}}
}
else{
   echo "<script>window.location.assign('manage_city.php?msg=Something Went Wrong')</script>";
}
?>
