// Toggle between signup and login forms
function toggleForm() {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');
    if (signupForm.style.display === 'none') {
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Perform form validation and actions (for demo purposes, just log)
    if (username && email && password) {
        alert(`Signup Successful!\nUsername: ${username}\nEmail: ${email}`);
        toggleForm(); // Switch to login form
    } else {
        alert('Please fill in all fields');
    }
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Perform form validation and actions (for demo purposes, just log)
    if (username && password) {
        alert(`Login Successful!\nUsername: ${username}`);
    } else {
        alert('Please fill in all fields');
    }
});
