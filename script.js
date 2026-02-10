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
  .querySelectorAll(".contact-button, .nav-phone, .nav-instagram")
  .forEach((link) => {
    link.addEventListener("touchstart", function () {
      this.style.transform = "scale(0.95)";
      this.style.transition = "transform 0.1s ease";
    });

    link.addEventListener("touchend", function () {
      this.style.transform = "";
    });
  });

// Special handling for Instagram links to open in app when on mobile
document.querySelectorAll('a[href*="instagram.com"]').forEach((link) => {
  // Check if user is on mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Replace with instagram:// URL scheme to open in app if installed
    // Keep original href as fallback
    const originalHref = link.getAttribute("href");
    link.setAttribute("href", "instagram://user?username=yourusername");

    // If app is not installed, it will fall back to the web URL
    link.addEventListener("click", function (e) {
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = originalHref;
        }
      }, 500);
    });
  }
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
