<?php
    session_start();
    if(!isset($_SESSION['email'])){
        echo "<script>window.location.assign('adminlogin.php?msg=Please Login First!!')</script>";
    }else{
        $user=$_SESSION['user'];
    }
    ?>
<?php
if(isset($_REQUEST['id'])){
    $id=$_REQUEST['id'];
    include('config.php');
    $query="SELECT * from `ambulance` where `id`='$id'";
    $ress=mysqli_query($conn,$query);
    $d1=mysqli_fetch_array($ress);
    include('header.php');
    ?>
     <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Edit Ambulance</h2>
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
            <form method="post" class="form-contact contact_formt" >
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        City
                    </div>
                    <div class="col-md-10">
                        <select name="city" class="form-control" required>
                            <?php
                            include('config.php');
                            $que="Select * from `city`";
                            $res=mysqli_query($conn,$que);
                            while($d=mysqli_fetch_array($res)){
                                ?>
                                <option
                                <?php
                                if($d1['city']==$d['city_name']){
                                    echo "selected";
                                }
                                ?>
                                ><?php echo $d['city_name']?></option>
                                <?php
                            }
                            ?>
                        </select>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        State 
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="state" class="form-control" value="<?php echo $d1['state']?>" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Contact Number 
                    </div>
                    <div class="col-md-10">
                        <input type="number" name="contact" class="form-control" value="<?php echo $d1['contact']?>"  required>
                        <input type="hidden" name="id" class="form-control" value="<?php echo $d1['id']?>"  required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button type="submit" class=" btn btn-primary" name="submit">Submit</button>
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

$city=$_REQUEST['city'];
$state=$_REQUEST['state'];
$contact=$_REQUEST['contact'];
$id=$_REQUEST['id'];
include('config.php');
$query="UPDATE `ambulance` set `city`='$city',`state`='$state',`contact`='$contact' where `id`='$id'";
$res=mysqli_query($conn,$query);
if($res>0){
    echo "<script>window.location.assign('manage_ambulance.php?msg=Updated Successfully')</script>";
}
else{
    echo "<script>window.location.assign('manage_ambulance.php?msg=Cannot Update record!! Try again later')</script>";
}}
}
else{
   echo "<script>window.location.assign('manage_ambulance.php?msg=Something Went Wrong')</script>";
}
?>
