// Function to toggle the navigation menu
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active'); // Toggle the 'active' class for the menu
}

// Initialize EmailJS with your public key
emailjs.init('0JLQzwfk8fJnx9qv6'); // Replace with your actual public key

// Function to send form data
function sendEmail(event) {
  event.preventDefault(); // Prevent default form submission

  // Send the email using EmailJS
  emailjs.sendForm('service_wpggiqn', 'template_ozi3e3g', event.target) // Updated template ID here
      .then((result) => {
          // Success alert
          alert('Thank you! Your message has been sent!');
      }, (error) => {
          // Error alert
          alert('Oops! Something went wrong. Please try again later.');
      });
}

// Add event listener for form submission
document.getElementById('contactForm').addEventListener('submit', sendEmail);
