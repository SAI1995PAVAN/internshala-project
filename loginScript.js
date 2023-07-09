document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
  
    console.log('Login: Email -', email, 'Password -', password);
  
    document.getElementById('login-email').value = '';
      document.getElementById('login-password').value = '';
  });
  