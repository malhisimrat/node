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
    $query="SELECT * from `user_register` where `id`='$id'";
    $res=mysqli_query($conn,$query);
    $data=mysqli_fetch_array($res);
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
                        <h2>Edit User</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid">
    <div class="row contact-form pt-lg-5">
        <div class="col-md-2 "></div>
      
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
            <form method="post" class="form-contact contact_formt">
                <div class="row form-group">
                    <div class="col-md-1 font2">
                    Name
                    </div>
                    <div class="col-md-11">
                        <input type="text" name="name" class="form-control" value="<?php echo $data['name']?>" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-1 font2">
                        Email
                    </div>
                    <div class="col-md-11 ">
                        <input type="email" name="email" class="form-control" value="<?php echo $data['email']?>"required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-1 font2">
                        Password
                    </div>
                    <div class="col-md-11">
                    <input type="password" name="password" class="form-control" >
                        <input type="hidden" name="hidpassword" class="form-control" value="<?php echo $data['password']?>">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-1 font2">
                        Contact
                    </div>
                    <div class="col-md-11">
                        <input type="number" name="contact" required class="form-control" min="0" value="<?php echo $data['contact']?>">
                        <input type="hidden" name="id" value="<?php echo $data['id']?>">
                    </div>
                </div>
                            
                <div class="row form-group">
                    <div class="col-md-5"></div>
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
    $id=$_REQUEST['id'];
    $name=$_REQUEST['name'];
	$contact=$_REQUEST['contact'];
	$email=$_REQUEST['email'];
    if(isset($_REQUEST['password'])){
        $password=md5($_REQUEST['password']);
    }
	else{
        $password=md5($_REQUEST['hidpassword']);
    }
	include('config.php');
	$query="UPDATE `user_register` set `name`='$name', `email`='$email', `password`='$password', `contact`='$contact' where `id`='$id'";
	$res=mysqli_query($conn,$query);
	if($res>0){
		echo "<script>window.location.assign('manage_user.php?msg=Updated Successfully')</script>";
	}
	else{
		echo "<script>window.location.assign('manage_user.php?msg=Error Try Again')</script>";
	}
}

?>