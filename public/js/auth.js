anime({
    targets: '.auth-box',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutExpo'
});

anime({
    targets: '.auth-title',
    opacity: [0, 1],
    delay: 500,
    duration: 1500
});

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');

if(registerForm)
{
    registerForm.addEventListener('submit', function(e)
    {
        e.preventDefault();

        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('confirmPassword').value;

        if(password !== confirm)
        {
            alert('Passwords do not match');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];

        let existingUser = users.find(function(user)
        {
            return user.email === email;
        });

        if(existingUser)
        {
            alert('Email already registered');
            return;
        }

        users.push({
            name: name,
            email: email,
            password: password
        });

        localStorage.setItem('users', JSON.stringify(users));

        alert('Registration Successful');

        window.location.href = 'login.html';
    });
}

if(loginForm)
{
    loginForm.addEventListener('submit', function(e)
    {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        let validUser = users.find(function(user)
        {
            return user.email === email &&
                   user.password === password;
        });

        if(validUser)
        {
            localStorage.setItem('currentUser', validUser.name);

            const popup = document.createElement('div');

            popup.classList.add('login-popup');

            popup.innerHTML = `
                <div class="popup-box">
                    <h2>🎉 Login Successful</h2>
                    <p>Welcome back, ${validUser.name}!</p>
                </div>
            `;

            document.body.appendChild(popup);

            setTimeout(function()
            {
                window.location.href = 'index.html';
            }, 2000);
        }
        else
        {
            alert('Invalid Email or Password');
        }
    });
}