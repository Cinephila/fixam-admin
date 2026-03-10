document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thank you! Your message has been received.";

});

// Contact form logic
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thank you! Your message has been received.";
});

// Delete account form logic
document.getElementById("deleteForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("deleteResponse").textContent = "Your account deletion request has been submitted. Our team will process it within 30 days.";
});
