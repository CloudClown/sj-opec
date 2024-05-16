document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log('submit btn clicked')

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;


    if (!name) {
        alert('enter your name');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
        alert('Contact number should only consist of numbers.');
        return;
    }

    if (!message) {
        alert('Enter your message.');
        return;
    }

    alert('Your message was sent successfully.');

});
