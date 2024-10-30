document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const message = document.getElementById('message');

    message.textContent = `Welcome, ${name}! You have joined as a ${role}.`;
    