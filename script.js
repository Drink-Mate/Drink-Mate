// Simple hover effects for buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Enhanced touch feedback for mobile
document
  .querySelectorAll(".contact-button, .nav-phone, .nav-instagram, .nav-tiktok")
  .forEach((link) => {
    link.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)";
      this.style.transition = "transform 0.1s ease";
    });

    link.addEventListener("touchend", function () {
      this.style.transform = "";
    });
  });

// Add click animation to contact buttons
document.querySelectorAll(".contact-button").forEach((button) => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});
