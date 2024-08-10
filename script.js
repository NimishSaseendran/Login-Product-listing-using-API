document.getElementById('loginBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if(username === "user" && password === "pass") {
        window.location.href = "cart.html";
    } else {
        alert('Invalid username or password\nPlease Login using Username: "user" and password: "pass"');
    }
});

document.getElementById('clr').addEventListener('click', function() {
    // Clear the input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});
