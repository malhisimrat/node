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
include('header.php');
$email=$_SESSION['email'];
$id=$_REQUEST['id'];
$query="SELECT * from `hospital` where `id`='$id'";
include('config.php');
$res=mysqli_query($conn,$query);
$data=mysqli_fetch_array($res)
?>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Appointment</li>
    </ol>
</nav>
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
                        Your Email
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="user" class="form-control" required readonly value="<?php echo $email ?>">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Hospital Name
                    </div>
                    <div class="col-md-10">
                        <input type="text" name="hname" class="form-control" required readonly value="<?php echo $data['hospital_name']?>">
                        <input type="hidden" name="hid" class="form-control" required  value="<?php echo $data['id']?>">
                    </div>
                </div>
                <div class="row form-group">
                    <div class="col-md-2 font1">
                        Appointment Date
                    </div>
                    <div class="col-md-4">
                        <input type="date" name="date" id="date" class="form-control" required onchange="out()"><br>
                        <span id="id1"></span>
                    </div>
                    <div class="col-md-1 font1">
                        Time
                    </div>
                    <div class="col-md-5">
                        <input type="time" name="time" id="time" class="form-control" required>
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
    <script>
		function out(){
		var dd=document.getElementById('date').value;
		if(dd!=''){
			var dates=dd.split('-');
			var d1=dates[0];
			var d2=dates[1];
			var d3=dates[2];
			var date=new Date();
			var d=date.getDate();
			var m=date.getMonth()+1;
			var y=date.getFullYear();
			if(d<10)
			{
				var fulldate=y+"0"+m+"0"+d;
			}
			else{
				var fulldate=y+"0"+m+""+d;	
			}
			
			var bdate=d1+""+d2+""+d3;
			// alert(bdate);
			// alert(fulldate);
			if(bdate>=fulldate)
			{
				document.getElementById('id1').innerHTML="";
				document.getElementById('date').style.borderColor='';
				document.getElementById('date').style.borderWidth='';
				document.getElementById('date').style.borderStyle='';
			
			}
			else{
				document.getElementById('id1').innerHTML="Please Choose a valid date <br>";
				document.getElementById('date').value='';
				document.getElementById('date').style.borderColor='red';
				document.getElementById('date').style.borderWidth='2px';
				document.getElementById('date').style.borderStyle='solid';
			}
		}}
    </script>
<?php
include('footer.php');
?>
<?php
if(isset($_REQUEST['submit'])){
	$user=$_REQUEST['user'];
    $hid=$_REQUEST['hid'];
    $date=$_REQUEST['date'];
    $time=$_REQUEST['time'];
    include('config.php');
	$query="INSERT INTO `appointment`(`user`, `hospital`, `date`, `time`) VALUES ('$user','$hid','$date','$time')";
	$res=mysqli_query($conn,$query);
    $data=mysqli_fetch_array($res);
	if($res>0){
		echo "<script>window.location.assign('my_appointment.php?msg=Appointment Booked Successfully')</script>";
	}
	else{
		echo "<script>window.location.assign('my_appointment.php?msg=Error Try Again')</script>";
	}
}
}
?>