<?php
header('Content-Type: text/html; charset=utf-8');

$mysqli = mysqli_connect("localhost", "kovllkkv_0358", "1379", "kovllkkv_0358");

if ($mysqli == false) {
	print("Error... MySQL " . mysqli_connect_error());
} else {

	$name = trim($_POST["name"]);
	$lastname = trim($_POST["lastname"]);
	$email = trim(mb_strtolower($_POST["email"]));
	$phone = $_POST["phone"];
	$message = trim($_POST["message"]);

	$result = $mysqli->query("SELECT * FROM `users` WHERE `email`='$email'");

	if ($result->num_rows != 0) {
		print("Exist!!!");
	} else {
		$mysqli->query("INSERT INTO `users`(`name`, `lastname`, `email`, `phone`, `message`) VALUES ('$name', '$lastname', '$email', '$phone', '$message')");
		print("Ok!");
	}
}
