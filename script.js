document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Save or process the form data as needed

  window.location.href = "registration2.html";
});
