document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        alert("Message sent! Thank you for contacting me.");
        // Optionally, send data to the server via AJAX or fetch API here
    } else {
        alert("Please fill out all fields.");
    }
});
