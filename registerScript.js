


document.getElementById('register-form').addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault(); 
  let username = document.getElementById('register-username').value;
  let email = document.getElementById('register-email').value;
  let password = document.getElementById('register-password').value;

  // Perform registration validation

  let isValid = true;
  
  if (username.length===0 || email.length === 0 || password.length === 0) {
    isValid = false;
    alert('Please enter required details')
  }

  // Validate email format
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    isValid = false;
    alert('Invalid email format');
  }
  
  // Validate password strength
  let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  if (!passwordRegex.test(password)) {
    isValid = false;
    alert('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character');
  }
  
  if (isValid) {
    console.log('Register: Username -', username, 'Email -', email, 'Password -', password);
    document.getElementById('register-username').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
  }
  
    
});
