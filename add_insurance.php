<?php
    session_start();
    if(!isset($_SESSION['email'])){
        echo "<script>window.location.assign('adminlogin.php?msg=Please Login First!!')</script>";
    }else{
        $user=$_SESSION['user'];
    }
    ?>
<?php
include('header.php');
?>
<div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Add Insurance</h2>
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
            <div class="col-md-12 my-5">
                <div class="alert alert-primary alert-dismissible " role="alert">
                    <strong class="font1"><?php echo $_GET['msg']?></strong> 
                </div>
            </div>
        </div>
        <?php
        }
        ?>
            <form method="post" class="form-contact contact_formt" >
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Insurance
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="insurance" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Company Name 
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="company" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Contact Number 
                    </div>
                    <div class="col-md-10">
                        <input type="number" name="contact" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Claim Settlement Ratio
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="csr" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Cashless Hospital
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="ch" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                       Starting at
                    </div>
                    <div class="col-md-10">
                        <input type="number" name="startat" class="form-control" required>
                    </
                    
                    div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                       Logo
                    </div>
                    <div class="col-md-10">
                        <input type="file" name="thumbnail" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                       Description
                    </div>
                    <div class="col-md-10">
                        <textarea name="desc" class="form-control" required></textarea>
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
    include('config.php');
	  $query="INSERT INTO `ambulance`(`city`,`state`,`contact`) VALUES ('$city','$state','$contact')";
	$result=mysqli_query($conn,$query);
	if($result>0){
		echo "<script>window.location.assign('add_ambulance.php?msg=Added Successfully')</script>";
	}
	else{
		echo "<script>window.location.assign('add_ambulance.php?msg=Error Try Again')</script>";
	}
}

?>