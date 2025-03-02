document.addEventListener("DOMContentLoaded", () => {
  // Add page transition animation
  document.body.classList.add("page-transition");
  setTimeout(() => {
    document.body.classList.remove("page-transition");
  }, 500);
  const forgotPasswordForm = document.getElementById("forgotPasswordForm");
  const emailInput = document.getElementById("email");

  forgotPasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get email value
    const email = emailInput.value.trim();

    // Basic validation
    if (!email || !isValidEmail(email)) {
      emailInput.classList.add("input-error");

      // Create error message if it doesn't exist
      let errorText = document.getElementById("errorText");
      if (!errorText) {
        errorText = document.createElement("p");
        errorText.id = "errorText";
        errorText.style.color = "red";
        emailInput.parentNode.appendChild(errorText);
      }

      errorText.textContent = "Please enter a valid email address.";
      errorText.style.display = "block";
      return;
    }

    // Show success message
    showMessage("Password reset link has been sent to your email.", "success");

    setTimeout(() => {
      forgotPasswordForm.reset();
    }, 3000);
  });

  // Remove error styling when user types
  emailInput.addEventListener("input", function () {
    this.classList.remove("input-error");
    const errorText = document.getElementById("errorText");
    if (errorText) {
      errorText.style.display = "none";
    }
  });

  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper function to show messages
  function showMessage(message, type) {
    const existingMessage = document.querySelector(".message");
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create message element
    const messageElement = document.createElement("div");
    messageElement.className = `message message-${type}`;
    messageElement.textContent = message;
    messageElement.style.padding = "10px";
    messageElement.style.marginTop = "10px";
    messageElement.style.borderRadius = "4px";
    messageElement.style.textAlign = "center";

    if (type === "success") {
      messageElement.style.backgroundColor = "#d1fae5";
      messageElement.style.color = "#065f46";
    } else {
      messageElement.style.backgroundColor = "#fee2e2";
      messageElement.style.color = "#b91c1c";
    }

    // Insert message after the form
    forgotPasswordForm.appendChild(messageElement);
  }
});
