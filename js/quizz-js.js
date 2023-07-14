function checkPassword() {
  var password = document.getElementById("password").value;

  // Compare the entered password with the correct password
  if (password === "189") {
    document.getElementById("message").style.display = 'block';
    document.getElementById("text").style.display = "none";
    // Add your code here to display the information you want
  } else {
    document.getElementById("text").style.display = "block";
  }
}