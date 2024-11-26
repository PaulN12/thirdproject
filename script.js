// Check if the user is logged in when loading the page
window.onload = () => {
  if (localStorage.getItem('loggedIn') === 'true') {
    window.location.href = 'home.html';
  }
};

// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simulate email/password check
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'home.html';
  } else {
    alert('Please enter valid credentials.');
  }
});

// Handle Google SSO (simulated)
document.getElementById('googleSSO')?.addEventListener('click', function(e) {
  e.preventDefault();

  // Simulate Google SSO login
  localStorage.setItem('loggedIn', 'true');
  localStorage.setItem('userEmail', 'user@example.com');
  window.location.href = 'home.html';
});

// Handle logout
if (document.getElementById('logoutBtn')) {
  document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'index.html';
  });

  // Show the logged-in user's email
  const userEmail = localStorage.getItem('userEmail');
  document.getElementById('userEmail').textContent = `Logged in as: ${userEmail}`;
}
