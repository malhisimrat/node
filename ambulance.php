<?php
include('header.php');
?>
<div class="slider-area2">
        <div class="slider-height2 d-flex align-items-center">
            <div class="container">
                <div class="row">
                <div class="col-xl-12">
                    <div class="hero-cap hero-cap2 text-center">
                        <h2>Ambulance</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
<div class="container">
    <div class="row justify-content-center my-2">
        <div class="col-lg-6">
            <div class="section-tittle text-center mb-100">
                <div class="row form-contact contact_formt">
                    <div class="col-md-11">
                        <form method="post">
                        <input type="text" name="city" placeholder="Enter City" id="location" class="form-control my-2">
                    </div>
                    <div class="col-md-1">
                        <button name="btn" class="btn">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
    if(isset($_REQUEST['btn'])){
    $city=$_REQUEST['city'];
    $query="SELECT * from `ambulance` where `city`='$city'";
    }
    else{
        $query="SELECT * from `ambulance`"; 
    }
    include('config.php');
    $ress=mysqli_query($conn,$query);
    ?>
    <hr>
    <div class="table-responsive container mb-5  ">
        <table class="table font2 table-borderless table-hover">
            <tr>
                <th>Sr. no</th>
                <th>City</th>
                <th>State</th>
                <th>Contact</th>
            </tr>
            <?php
            $sno=1;
            while($data=mysqli_fetch_array($ress)){
                ?>
                <tr>
                    <td><?php echo $sno?></td>
                    <td><?php echo $data['city']?></td>
                    <td><?php echo $data['state']?></td>
                    <td><?php echo $data['contact']?></td>
                    <!-- <td><Button onclick="call()">Call</Button></td>
                    <input type="hidden" id="id1" value="<?php echo $data['contact']?>"> -->
                </tr>
                <?php
                $sno++;
            }
            ?>
        </table>
    </div>
</div>
<!-- <script>
    function call(){
        var num=document.getElementById('id1').value;
        window.open('tel:'+num);
    }
</script> -->
<?php
include('footer.php');
?>