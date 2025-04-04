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
session_start();
include('header.php');
?>
<div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>View hospital</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid my-5">
    <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="card mb-3" style="max-width: 100%;">
                <div class="row ">
                    <div class="col-md-4">
                        <img src="hospital/<?php echo $data['thumbnail']?>" class="img-fluid rounded-start img-thumbnail" alt="..." style="height:200px; width:100%;">
                    </div>
                    <div class="col-md-8 ">
                        <div class="card-body ">
                            <h2 class="card-title "><?php echo $data['hospital_name']?></h2>
                            <h4>Timings: <?php echo $data['opentiming']?>- <?php echo $data['closetime']?></h4>
                            <p class="card-text"><?php echo $data['description']?></p>
                            <p class="card-text font1">
                                Location: <?php echo $data['location']?>,<br>
                                City: <?php echo $data['city']?>,<br>
                                Address: <?php echo $data['address']?>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-3">
                            <a href="edit_hospital.php?id=<?php echo $data['id']?>" class="text-success font1"><i class="fa fa-edit "></i> Edit</a>
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                            <a href="delete_hospital.php?id=<?php echo $data['id']?>" class="text-danger font1"><i class="fa fa-trash" ></i> Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<?php
include('footer.php');
?>