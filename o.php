<?php

$mm = $_POST["move"];

// Connect to the database
$conn = mysqli_connect("localhost", "root", "", "actual robot movement");

// Insert the data into the database
$sql = "INSERT INTO actual robot movement (actual robot movement) VALUES ('$mm')";

if (mysqli_query($conn, $sql)) {
  echo "Data saved successfully";
} else {
  echo "Error saving data";
}

// Close the connection
mysqli_close($conn);

?>

