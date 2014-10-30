<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $from = 'hassan.xyz contact form';

//Headers
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: <".$from.">" ;

    $to = 'hassan.xyz.site@gmail.com'; 
    $subject = 'Hello';
    $human = $_POST['human'];
      
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
        
  if ($_POST['submit'] && $human == '4') {         
        if (mail ($to, $subject, $body, $from)) { 
      echo '<p>Your message has been sent!</p>';
  } else { 
      echo '<p>Something went wrong, go back and try again!</p>'; 
  } 
    } else if ($_POST['submit'] && $human != '4') {
  echo '<p>You answered the anti-spam question incorrectly!</p>';
    }
?>