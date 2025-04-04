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
                        <h2>Manage Ambulance</h2>
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
                <th>City Name</th>
                <th>State</th>
                <th>Contact</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <?php
             $query="SELECT * from `ambulance`";
             include('config.php');
             $res=mysqli_query($conn,$query);
             $sno=1;
             while($data=mysqli_fetch_array($res)){
                ?>
                <tr>
                    <td><?php echo $sno?></td>
                    <td><?php echo $data['city']?></td>
                    <td><?php echo $data['state']?></td>
                    <td><?php echo $data['contact']?></td>
                    <td>
                        <a href="edit_ambulance.php?id=<?php echo $data['id']?>" class="text-success"><i class="fa fa-edit"></i></a>
                    </td>
                    <td>
                        <a href="delete_ambulance.php?id=<?php echo $data['id']?>" class="text-danger"><i class="fa fa-trash"></i></a>
                    </td>
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