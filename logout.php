<?php
session_start();
unset($_SESSION['email']);
unset( $_SESSION['name']);
unset( $_SESSION['user']);
echo "<script>window.location.assign('user_login.php?msg=Logout Successfully')</script>";
?>