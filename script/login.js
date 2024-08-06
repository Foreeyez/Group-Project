const users = [
    { email: 'user1@gmail.com', password: 'password1' },
    { email: 'user2@gmail.com', password: 'password2' },
    { email: 'user3@gmail.com', password: 'password3' },
    { email: 'user4@gmail.com', password: 'password4' },
    { email: 'user5@gmail.com', password: 'password5' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // const email = document.getElementById('loginUsername').value;
    const email = document.getElementById('loginemail').value;
    const password = document.getElementById('loginPassword').value;
    const loginMessage = document.getElementById('loginMessage');

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        loginMessage.style.color = 'green';
        loginMessage.textContent = 'Login successful!';
        showProfile(user);
    } else {
        loginMessage.style.color = 'red';
        loginMessage.textContent = 'Invalid email or password.';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('signupUseremail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const signupMessage = document.getElementById('signupMessage');

    if (password !== confirmPassword) {
        signupMessage.style.color = 'red';
        signupMessage.textContent = 'Passwords do not match.';
        return;
    }

    if (users.find(user => user.email === email)) {
        signupMessage.style.color = 'red';
        signupMessage.textContent = 'Username already taken.';
        return;
    }

    users.push({ email, password });
    signupMessage.style.color = 'green';
    signupMessage.textContent = 'Sign up successful!';
});

function showSignupForm() {
    document.getElementById('loginFormContainer').style.display = 'none';
    document.getElementById('signupFormContainer').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signupFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
}

function showProfile(user) {
    window.location.href = 'index.html';
    document.getElementById('profileUsername').textContent = `Username: ${user.username}`;
}