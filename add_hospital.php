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
?>
<div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Add hospital</h2>
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
                        <input type="text" name="name" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-1 font2">
                        Email
                    </div>
                    <div class="col-md-11 ">
                        <input type="email" name="email" class="form-control" required>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-1 font2">
                        Password
                    </div>
                    <div class="col-md-11">
                        <input type="password" name="password" required class="form-control">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Contact
                            </div>
                            <div class="col-md-10">
                                <input type="text" name="contact" pattern="[6-9]{1}[0-9]{9}" required class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-2 font2">
                                Thumbnail
                            </div>
                            <div class="col-md-10">
                                <input type="file" name="thumbnail" required class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-3 font2">
                                Time(Open)
                            </div>
                            <div class="col-md-9">
                                <input type="time" name="open" id="timestart" required class="form-control"><br>
                                <span id="id2"></span>
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-md-3 font2">
                               Time(Close)
                            </div>
                            <div class="col-md-9">
                                <input type="time" name="close" id="timeend" required class="form-control" onblur="out()">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-3 font2">
                                Description
                            </div>
                            <div class="col-md-9">
                                <textarea name="description" rows="5" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-6">
                        <div class="row my-2">
                            <div class="col-md-3 font2">
                                Location
                            </div>
                            <div class="col-md-9">
                                <input type="text" name="location" required class="form-control">
                            </div>
                        </div>
                        <div class="row my-2">
                            <div class="col-md-3 font2">
                                City
                            </div>
                            <div class="col-md-9">
                                <select name="city" required class="form-control">
                                    <option selected disabled value="">Select</option>
                                    <?php
                                        $query="SELECT * from `city`";
                                        include('config.php');
                                        $res=mysqli_query($conn,$query);
                                        while($data=mysqli_fetch_array($res)){
                                            ?>
                                            <option><?php echo $data['city_name']?></option>
                                            <?php
                                        }
                                    ?>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-3 font2">
                                Address
                            </div>
                            <div class="col-md-9">
                                <textarea name="address" rows="5" required class="form-control"></textarea>
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
<script>
    function out(){
		var timestart=document.getElementById('timestart').value;
        var timeend=document.getElementById('timeend').value;
		if(timestart!='' && timeend!=''){
		if(timestart<timeend ){
				document.getElementById('id2').innerHTML="";
				document.getElementById('timestart').style.borderColor='';
				document.getElementById('timestart').style.borderWidth='';
				document.getElementById('timestart').style.borderStyle='';
		}
		else{
				document.getElementById('id2').innerHTML="Please Choose a valid time. Less than start time.";
				document.getElementById('timestart').style.borderColor='red';
				document.getElementById('timestart').style.borderWidth='2px';
				document.getElementById('timestart').style.borderStyle='solid';
		}
		}
	}
</script>
<?php
include('footer.php');
?>
<?php
if(isset($_REQUEST['submit'])){
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
    $fname=$_FILES['thumbnail']['name'];
    $tmp_path=$_FILES['thumbnail']['tmp_name'];
    $size=$_FILES['thumbnail']['size'];
    $ext=$_FILES['thumbnail']['type'];
    $new_name=rand().".".$fname;
    move_uploaded_file($tmp_path,"hospital/".$new_name);
	include('config.php');
	$query="INSERT INTO `hospital`(`hospital_name`, `email`, `password`, `contact`,`thumbnail` ,`opentiming`, `closetime`, `description`, `location`, `city`, `address`) VALUES ('$name','$email','$password','$contact','$new_name','$open','$close','$description','$location','$city','$address')";
	$res=mysqli_query($conn,$query);
	if($res>0){
		echo "<script>window.location.assign('add_hospital.php?msg=Added Successfully')</script>";
	}
	else{
		echo "<script>window.location.assign('add_hospital.php?msg=Error Try Again')</script>";
	}
}

?>