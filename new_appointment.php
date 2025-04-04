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
$email=$_SESSION['email'];
$q="SELECT * from `hospital` where `email`='$email'";
include('config.php');
$r=mysqli_query($conn,$q);
$d=mysqli_fetch_array($r);
$hid=$d['id'];
?>
 <div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>New Appointments</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container my-5">
    
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
    <table class="table table-bordered table-striped table-hover font1">
        <thead>
            <tr>  
                <th>Sr. No.</th>
                <th>User Mail</th> 
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <?php
             $query="SELECT * from `appointment` where `hospital`='$hid' and `status`='Pending'";
             include('config.php');
             $res=mysqli_query($conn,$query);
             $sno=1;
             while($data=mysqli_fetch_array($res)){
                ?>
                <tr>
                    <td><?php echo $sno?></td>
                    <td><?php echo $data['user']?></td>
                    <td>
                        <?php echo $data['date']?>
                    </td>
                    <td>
                        <?php echo $data['time']?>
                    </td>
                    <td>
                        <?php
                        if($data['status']=='Pending'){
                            ?>
                                <a href="accept.php?id=<?php echo $data['id']?>">
                                    <i style="font-size:20px" class="fa fa-check text-success"></i>
                                </a>
                                <a href="reject.php?id=<?php echo $data['id']?>">
                                    <i style="font-size:20px" class="fa fa-times text-danger"></i>
                                </a>
                            <?php
                        }
                        else{
                            echo $data['status'];  
                        }
                        ?> 
                    </td>
                </tr>
                <?php
                $sno++;
            }
            ?>
        </tbody>
    </table>
</div>
<?php
include('footer.php');
?>