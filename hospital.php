
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
                    <h2>Hospital</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
<div class="team-area my-5">
        <div class="container">
            <!-- Section Tittle -->
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-tittle text-center mb-100">
                        <div class="row form-contact contact_formt">
                            <div class="col-md-11">
                                <input type="text" name="location" placeholder="Enter Location or City" id="location" class="form-control">
                            </div>
                            <div class="col-md-1">
                                <button onclick="hit()" class="btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="result">
                <?php
                $query="SELECT * from `hospital`";
                include('config.php');
                $res=mysqli_query($conn,$query);
                $sno=1;
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
            </div>
        </div>
    </div>
    <script>
			function hit()
				{
                var vals=document.getElementById('location').value;
                //alert(vals);
				var obj;
				var url="gethospital.php?x="+vals;
				if(window.XMLHttpRequest)
					{
					obj=new XMLHttpRequest();
					}
					else
					{
						obj= new ActiveXObject("Microsoft.XMLHTTP");
					}
					obj.open("GET",url,true);
					obj.send();
					obj.onreadystatechange=function()
					{
						if(obj.readyState == 4 && obj.status==200)
						{
							var res=obj.responseText;
							
							document.getElementById("result").innerHTML=res;
						}
					}
				}
		</script>
<?php
include('footer.php');
?>