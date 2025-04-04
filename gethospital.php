<?php 
$id=$_REQUEST['x'];
include('config.php');
$query="SELECT * from `hospital` where `location`='$id' OR `city`='$id'";
$res=mysqli_query($conn,$query);
while($data=mysqli_fetch_array($res)){
    ?>
    <div class="col-xl-5 col-lg-5 col-md-6 col-sm-">
        <div class="single-team mb-30">
            <div class="team-img">
                <img src="hospital/<?php echo $data['thumbnail']?>" alt="">
            </div>
            <div class="team-caption">
                <h1><a href="#"><?php echo $data['hospital_name']?></a></h1>
                <h3>Timing: <?php echo $data['opentiming']?>-<?php echo $data['closetime']?></h3>
                <p> Address: <?php echo $data['address']?>, <?php echo $data['city']?> <br>
                Contact- <?php echo $data['contact']?></p>
                <p>Specialist: <?php echo $data['description']?></p>
            </div>
            <div class="card-footer">
                <center><a href="make_visit.php?id=<?php echo $data['id']?>" class="btn">Appointment</a></center>
            </div>
        </div>
    </div>
    <?php
}
?>

    

