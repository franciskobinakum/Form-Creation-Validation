document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve and trim input values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation variables
    let isValid = true;
    const messages = [];

    // Username validation: minimum 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email validation: must include '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Email must be a valid address and include "@" and "." characters.');
    }

    // Password validation: minimum 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.style.color = '#28a745';
      feedbackDiv.style.backgroundColor = '#d4edda';
      feedbackDiv.textContent = 'Registration successful!';
      // Optionally persist user to localStorage:
      const user = { username, email };
      try {
        localStorage.setItem('registeredUser', JSON.stringify(user));
      } catch (e) {
        // ignore storage errors
      }
      // Reset form if you want
      // form.reset();
    } else {
      feedbackDiv.style.color = '#dc3545';
      feedbackDiv.style.backgroundColor = '#ffbaba';
      // join messages with <br> and set via innerHTML as required
      feedbackDiv.innerHTML = messages.join('<br>');
    }
  });
});
