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
    $query="SELECT * from `hospital` where `id`='$id'";
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
                        <h2>Edit hospital</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid">
    <div class="row contact-form pt-lg-5">
        <div class="col-md-2 "></div>
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
            <form method="post" class="form-contact contact_formt" enctype="multipart/form-data">
                <div class="row form-group">
                    <div class="col-md-1 font2">
                       Hospital Name
                    </div>
                    <div class="col-md-11">
                        <input type="text" name="name" class="form-control" value="<?php echo $data['hospital_name']?>" required>
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
                    <input type="password" name="password" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Contact
                            </div>
                            <div class="col-md-10">
                                <input type="number" min="0" name="contact" required class="form-control" value="<?php echo $data['contact']?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Thumbnail
                            </div>
                            <div class="col-md-10">
                                <input type="file" name="thumbnail" class="form-control">
                                <input type="hidden" name="hiddenimg" class="form-control" value="<?php echo $data['thumbnail']?>">
                                <input type="hidden" name="id" class="form-control" value="<?php echo $data['id']?>">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Time(Open)
                            </div>
                            <div class="col-md-10">
                                <input type="time" name="open"  required class="form-control" value="<?php echo $data['opentiming']?>">
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                               Time(Close)
                            </div>
                            <div class="col-md-10">
                                <input type="time" name="close" required class="form-control" value="<?php echo $data['closetime']?>">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-2 font2">
                                Description
                            </div>
                            <div class="col-md-10">
                                <textarea name="description" rows="5" class="form-control"><?php echo $data['description']?></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Location
                            </div>
                            <div class="col-md-10">
                                <input type="text" name="location" required class="form-control" value="<?php echo $data['location']?>">
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                City
                            </div>
                            <div class="col-md-10">
                                <select name="city" required class="form-control">
                                    <?php
                                        $q="SELECT * from `city`";
                                        include('config.php');
                                        $r=mysqli_query($conn,$q);
                                        while($d=mysqli_fetch_array($r)){
                                            ?>
                                            <option 
                                            <?php 
                                            if($data['city']=$d['city_name']){
                                                ?>
                                                selected
                                                <?php
                                            }
                                            ?>
                                            ><?php echo $d['city_name']?></option>
                                            <?php
                                        }
                                    ?>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-2 font2">
                                Address
                            </div>
                            <div class="col-md-10">
                                <textarea name="address" rows="5" required class="form-control"><?php echo $data['address']?></textarea>
                            </div>
                        </div>
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
        $password=md5($_REQUEST['password']);
    
    $open=$_REQUEST['open'];
    $close=$_REQUEST['close'];
    $description=$_REQUEST['description'];
    $location=$_REQUEST['location'];
    $city=$_REQUEST['city'];
    $address=$_REQUEST['address'];
    if(isset($_FILES['thumbnail'])){
        $img_name=$_REQUEST['hiddenimg'];
        if($_FILES['thumbnail']['name']){
            $fname=$_FILES['thumbnail']['name'];
            $tmp_path=$_FILES['thumbnail']['tmp_name'];
            $size=$_FILES['thumbnail']['size'];
            $ext=$_FILES['thumbnail']['type'];
            $new_name=rand().".".$fname;
            move_uploaded_file($tmp_path,"hospital/".$new_name);
        }
    else{
       $new_name=$img_name;
    }}
	include('config.php');
	$query="UPDATE `hospital` set `hospital_name`='$name', `email`='$email', `password`='$password', `contact`='$contact',`thumbnail`='$new_name' ,`opentiming`='$open', `closetime`='$close', `description`='$description', `location`='$location', `city`='$city', `address`='$address' where `id`='$id'";
	$res=mysqli_query($conn,$query);
	if($res>0){
		echo "<script>window.location.assign('manage_hospital.php?msg=Updated Successfully')</script>";
	}
	else{
		echo "<script>window.location.assign('manage_hospital.php?msg=Error Try Again')</script>";
	}
}

?>