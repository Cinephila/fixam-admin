document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("response").textContent = "Thank you! Your message has been received.";
});