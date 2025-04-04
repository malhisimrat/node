

<!doctype html>
<html class="no-js" lang="zxx">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title> DOCTECH </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">

	<!-- CSS here -->
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/owl.carousel.min.css">
	<link rel="stylesheet" href="assets/css/slicknav.css">
    <link rel="stylesheet" href="assets/css/flaticon.css">
    <link rel="stylesheet" href="assets/css/gijgo.css">
    <link rel="stylesheet" href="assets/css/animate.min.css">
    <link rel="stylesheet" href="assets/css/animated-headline.css">
	<link rel="stylesheet" href="assets/css/magnific-popup.css">
	<link rel="stylesheet" href="assets/css/fontawesome-all.min.css">
	<link rel="stylesheet" href="assets/css/themify-icons.css">
	<link rel="stylesheet" href="assets/css/slick.css">
	<link rel="stylesheet" href="assets/css/nice-select.css">
	<link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="style1.css"
</head>
<body>
    <!--
     <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src="assets/img/logo/loder.png" alt="">
                </div>
            </div>
        </div>
    </div> 
    Preloader Start -->
<header>
    <!--? Header Start -->
    <div class="header-area">
        <div class="main-header header-sticky">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <!-- Logo -->
                    <div class="col-xl-2 col-lg-2 col-md-1">
                        <div class="logo">
                            <a href="index.php" style="color:black;font-size:30px;">HealthGrid</a>
                        </div>
                    </div>
                    <div class="col-xl-10 col-lg-10 col-md-10">
                        <div class="menu-main d-flex align-items-center justify-content-end">
                            <!-- Main-menu -->
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <?php
                                        if(isset($_SESSION['user'])){
                                            $user=$_SESSION['user'];
                                        if($user=="Admin"){
                                            ?>
                                            <li><a href="admin.php">Home</a></li>
                                            <li><a href="add_city.php">City</a>
                                                <ul class="submenu">
                                                    <li><a href="add_city.php">Add City</a></li>
                                                    <li><a href="manage_city.php">Manage</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="add_ambulance.php">Ambulance</a>
                                                <ul class="submenu">
                                                    <li><a href="add_ambulance.php">Add</a></li>
                                                    <li><a href="manage_ambulance.php">Manage</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="add_hospital.php">Hospital</a>
                                                <ul class="submenu">
                                                    <li><a href="add_hospital.php">Add Hospital</a></li>
                                                    <li><a href="manage_hospital.php">Manage</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="view_appointment.php">Appointment</a></li>
                                            <li><a href="manage_user.php">Users</a></li>
                                            <li><a href="view_enquiry.php">Enquiry</a></li>
                                            <li><a href="logout.php">Logout</a></li>
                                            <?php
                                        }
                                        elseif($user=="Hospital"){
                                            ?>
                                            <li><a href="hindex.php">Home</a></li>
                                            <li><a href="appointment.php">Appointment</a>
                                                <ul class="submenu">
                                                    <li><a href="new_appointment.php">New</a></li>
                                                    <li><a href="appointment.php">View</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="logout.php">Logout</a></li>
                                            <?php
                                        }
                                        elseif($_SESSION['user']=='Users'){
                                            ?>
                                            <li><a href="index.php">Home</a></li>
                                            <li><a href="about.php">About</a></li>
                                            <li><a href="hospital.php">Hospital</a></li>
                                            <li><a href="ambulance.php">Ambulance</a></li>
                                            <li><a href="my_appointment.php">Appointment</a></li>
                                            <li><a href="contact.php">Contact</a></li>
                                            <li><a href="logout.php">Logout</a></li>
                                            <?php
                                        }}else
                                        {
                                            ?>
                                        <li><a href="index.php">Home</a></li>
                                        <li><a href="about.php">About</a></li>
                                        <li><a href="hospital.php">Hospital</a>
                                        <li><a href="ambulance.php">Ambulance</a></li>
                                        <li><a href="contact.php">Contact</a></li>
                                        <li><a href="#">Login</a>
                                            <ul class="submenu">
                                                <li><a href="user_login.php">User</a></li>
                                                <li><a href="hospital_login.php">Hospital</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="user_register.php">Register</a></li>
                                            <?php
                                        }
                                        ?>
                                    </ul>
                                </nav>
                            </div>
                            <!-- <div class="header-right-btn f-right d-none d-lg-block ml-30">
                                <a href="#" class="btn header-btn">01654.066.456</a>
                            </div> -->
                        </div>
                    </div>   
                    <!-- Mobile Menu -->
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
</header>