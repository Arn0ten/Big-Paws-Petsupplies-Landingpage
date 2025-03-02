document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const errorText = document.getElementById("errorText");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    // Basic validation
    if (!email || !password) {
      showMessage("Email and password are required.", "error");
      return;
    }

    // Allow login with specific credentials
    if (email === "admin@admin" && password === "1234") {
      window.location.href = "/pages/admin/dashboard.html";
      return;
    }

    try {
      //  HTTPs
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": getCsrfToken(),
        },
        credentials: "same-origin",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isTemporary) {
          window.location.href = "new-user.html";
        } else {
          window.location.href = "dashboard.html";
        }
      } else {
        const errorData = await response.json();
        showMessage(errorData.message || "Invalid email or password.", "error");
        emailInput.classList.add("input-error");
        passwordInput.classList.add("input-error");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage(
        "An unexpected error occurred. Please try again later.",
        "error",
      );
    }
  });

  // Remove red border when user types
  [emailInput, passwordInput].forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("input-error");
      errorText.style.display = "none";
    });
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });

  function showMessage(message, type) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.className =
      type === "error" ? "error-message" : "success-message";
    messageElement.style.display = "block";
    messageElement.style.paddingBottom = "10px";

    const existingMessage = document.querySelector(
      ".error-message, .success-message",
    );
    if (existingMessage) {
      existingMessage.replaceWith(messageElement);
    } else {
      const loginButton = loginForm.querySelector("button[type='submit']");
      loginForm.insertBefore(messageElement, loginButton);
    }
  }

  function getCsrfToken() {
    return document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
  }
});
