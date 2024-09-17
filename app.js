    document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#portfolio').scrollIntoView({
      behavior: 'smooth'
    });
  });
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var successMessage = document.getElementById('successMessage');
    successMessage.textContent = 'Submitted!';
    successMessage.style.display = 'block';
    this.reset();
  });