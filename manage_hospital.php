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
                        <h2>Manage Hospital</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid my-5">      
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
        <table class="table table-bordered table-striped table-hover font2 ">
            <thead>
                <tr>  
                    <th>Sr. No.</th>
                    <th>Hospital</th>
                    <th>Email</th>
                    <!-- <th>Password</th> -->
                    <th>Contact</th>
                    <th>Timings</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Description</th>
                    <th>View</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $query="SELECT * from `hospital`";
                include('config.php');
                $res=mysqli_query($conn,$query);
                $sno=1;
                while($data=mysqli_fetch_array($res)){
                    ?>
                    <tr>
                        <td><?php echo $sno?></td>
                        <td><?php echo $data['hospital_name']?></td>
                        <td><?php echo $data['email']?></td>
                        <!-- <td><?php echo $data['password']?></td> -->
                        <td><?php echo $data['contact']?></td>
                        <td><?php echo $data['opentiming']."-".$data['closetime']?></td>
                        <td><?php echo $data['location']."-".$data['address']?></td>
                        <td><?php echo $data['city']?></td>
                        <td><?php echo $data['description']?></td>
                        <td>
                            <a href="view_hospital.php?id=<?php echo $data['id']?>" class="text-primary"><i class="fa fa-eye"></i></a>
                        </td>
                        <td>
                            <a href="edit_hospital.php?id=<?php echo $data['id']?>" class="text-success"><i class="fa fa-edit"></i></a>
                        </td>
                        <td>
                            <a href="delete_hospital.php?id=<?php echo $data['id']?>" class="text-danger"><i class="fa fa-trash"></i></a>
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