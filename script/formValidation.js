document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    console.log("submit btn clicked");
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    if (!name) {
      alert("Pelase, enter your name");
      return;
    }
  
    if (!email) {
      alert("Pelase, enter your email");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please, enter a valid email address");
      return;
    }
  
    if (!phone) {
      alert("Pelase, enter your phone number");
      return;
    }
  
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(phone)) {
      alert("Contact number should only consist of numbers.");
      return;
    }
  
    if (!message) {
      alert("Pelase, enter your message");
      return;
    }
  
    alert("Your message was sent successfully.");
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  });