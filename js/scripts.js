document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener for the contact form submission
    var contactForm = document.querySelector("form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent the default form submission action
            alert("Thank you for contacting us! We will get back to you soon.");
            // You can reset the form if needed
            contactForm.reset();
        });
    }
});
