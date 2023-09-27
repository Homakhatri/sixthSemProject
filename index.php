
<?php
session_start();
$i = 1;


?>
<!DOCTYPE html>
<html>
<head>
  <title>Your Hospital</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <!-- Header -->
  <header>
    <nav>
      <ul>
        <li><a href="signup.php">Signup</a></li>
        <li><a href="login.php">Login</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Doctors</a></li>
      </ul>
    </nav>
  </header>

  <!-- Banner -->
  <section id="banner">
    <div class="banner-content">
      <h1>Welcome to our Hospital</h1>
      <img src="uploadImage/Logo/doctor.jpeg" class="fullscreen-image" alt="doctor">
    </div>
  </section>

  <div class="card-group">
  <?php
  // Assuming you have established a database connection
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "clinic_db";
 


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
  
  // Perform a query to fetch the doctor data from the database
  $query = "SELECT * FROM doctor";
  $result = mysqli_query($conn, $query);

  // Loop through the result set and create a card for each doctor
  while ($row = mysqli_fetch_assoc($result)) {
    $doctorName = $row['doctorname'];
    $doctorEducation = $row['education'];
    $doctorID = $row['doctorid'];
    ?>
    
   

    <div class="card" style="width: 200px;">
      <!-- <div class="card-body text-center"> -->
        <div class="cardImageDiv">
          <img src="uploadImage/Logo/doctor<?php echo $i; $i++; ?>.jpg" class="card-img-top" alt="doctor">
        </div>

        <h5 class="card-title"><?php echo $doctorName; ?></h5>
        <p class="card-text"><?php echo $doctorEducation; ?></p>
        <a href="http://localhost/hospital/login.php?doctor=<?php echo $doctorID; ?>" class="btn btn-primary">Get Appointment</a>
        <!-- <a href="http://localhost/hospital/viewdoctor.php?doctor=<?php echo $doctorID; ?>" class="btn btn-primary">View Details</a> -->
      <!-- </div> -->
      
    </div>

  <?php
  }
  ?>

</div>


  <!-- Contact -->
  <section id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>For inquiries or appointments, please contact us:</p>
      <div class="contact-info">
        <p>Phone: 9800052891</p>
        <p>Email: info@yourhospital.com</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2023 Your Hospital. All rights reserved.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
