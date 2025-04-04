<?php
session_start();
include('header.php');
?>
 <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>User Login</h2>
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
                <div class="alert alert-primary alert-dismissible font1 " role="alert">
                    <strong><?php echo $_GET['msg']?></strong> 
                </div>
            </div>
        </div>
        <?php
        }
        ?>
            <form method="post" class="form-contact contact_formt">
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Email
                    </div>
                    <div class="col-md-10">
                        <input type="email" name="email" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Password
                    </div>
                    <div class="col-md-10">
                        <input type="password" name="password" required class="form-control">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button type="submit" class=" btn btn-primary" name="submit"> Submit</button>
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
	$email=$_REQUEST['email'];
	$password=md5($_REQUEST['password']);
	include('config.php');
	$query="SELECT * from `user_register` WHERE `email`='$email' AND `password`='$password'";
	$res=mysqli_query($conn,$query);
    $data=mysqli_fetch_array($res);
	if(mysqli_num_rows($res)>0){
       
        $_SESSION['name']=$data['name'];
        $_SESSION['email']=$data['email'];
        $_SESSION['user']='Users';
		echo "<script>window.location.assign('index.php')</script>";
	}
	else{
		echo "<script>window.location.assign('user_login.php?msg=Invalid Email or Password!')</script>";
	}
}

?>