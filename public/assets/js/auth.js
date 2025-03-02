document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform your login validation here
    // If login is successful, redirect to another HTML file
    window.location.href = '/pages/admin/dashboard.html';
  });

  //temporary na redirection from login to admin dashboard
  function redirectToDashboard() {
    window.location.href = '/pages/admin/dashboard.html';
}
