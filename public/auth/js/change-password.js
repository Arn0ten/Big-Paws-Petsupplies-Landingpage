document.addEventListener("DOMContentLoaded", () => {
  const changePasswordForm = document.getElementById("changePasswordForm");
  const contactInfoInput = document.getElementById("contactInfo");
  const currentPasswordInput = document.getElementById("currentPassword");
  const newPasswordInput = document.getElementById("newPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const errorText = document.getElementById("errorText");

  // Password requirement checkers
  const lengthCheck = document.getElementById("length-check");
  const caseCheck = document.getElementById("case-check");
  const numberCheck = document.getElementById("number-check");
  const specialCheck = document.getElementById("special-check");

  // Password toggle functionality
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const passwordInput = document.getElementById(targetId);
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });
  });

  // Contact info validation
  contactInfoInput.addEventListener("input", function () {
    const value = this.value.trim();
    // Check if it's an email or phone number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    const isPhone = /^\+?[\d\s()-]{10,15}$/.test(value);

    if (value && (isEmail || isPhone)) {
      this.classList.remove("input-error");
      this.classList.add("input-valid");
    } else if (value) {
      this.classList.add("input-error");
      this.classList.remove("input-valid");
    } else {
      this.classList.remove("input-error", "input-valid");
    }
  });

  // Password strength checker and requirements validator
  newPasswordInput.addEventListener("input", function () {
    const password = this.value;
    let strength = 0;

    // Check password requirements
    const hasLength = password.length >= 12;
    const hasCase = /[A-Z]/.test(password) && /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    // Update requirement checkers
    lengthCheck.className = hasLength ? "valid" : "";
    caseCheck.className = hasCase ? "valid" : "";
    numberCheck.className = hasNumber ? "valid" : "";
    specialCheck.className = hasSpecial ? "valid" : "";

    // Calculate strength
    if (hasLength) strength += 1;
    if (hasCase) strength += 1;
    if (hasNumber) strength += 1;
    if (hasSpecial) strength += 1;

    // Update strength indicator
    const strengthIndicator =
      document.querySelector(".password-strength") ||
      document.createElement("div");
    strengthIndicator.className = "password-strength";
    if (strength < 2) {
      strengthIndicator.classList.add("strength-weak");
    } else if (strength < 4) {
      strengthIndicator.classList.add("strength-medium");
    } else {
      strengthIndicator.classList.add("strength-strong");
    }
    this.parentNode.appendChild(strengthIndicator);
  });

  // Form submission
  changePasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Reset error states
    [
      contactInfoInput,
      currentPasswordInput,
      newPasswordInput,
      confirmPasswordInput,
    ].forEach((input) => {
      input.classList.remove("input-error");
    });

    // Get input values
    const contactInfo = contactInfoInput.value.trim();
    const currentPassword = currentPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate inputs
    if (!contactInfo || !currentPassword || !newPassword || !confirmPassword) {
      showMessage("All fields are required.", "error");
      return;
    }

    // Validate contact info
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo);
    const isPhone = /^\+?[\d\s()-]{10,15}$/.test(contactInfo);
    if (!isEmail && !isPhone) {
      contactInfoInput.classList.add("input-error");
      showMessage("Please enter a valid email or phone number.", "error");
      return;
    }

    // Check if new password matches confirmation
    if (newPassword !== confirmPassword) {
      confirmPasswordInput.classList.add("input-error");
      showMessage("New passwords do not match.", "error");
      return;
    }

    // Check if new password is same as current
    if (newPassword === currentPassword) {
      newPasswordInput.classList.add("input-error");
      showMessage(
        "New password must be different from current password.",
        "error",
      );
      return;
    }

    // Check password strength
    const hasLength = newPassword.length >= 12;
    const hasCase = /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword);
    const hasNumber = /[0-9]/.test(newPassword);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword);

    if (!hasLength || !hasCase || !hasNumber || !hasSpecial) {
      newPasswordInput.classList.add("input-error");
      showMessage("Password does not meet all requirements.", "error");
      return;
    }

    try {
      const response = await fetch("/api/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": getCsrfToken(),
        },
        credentials: "same-origin",
        body: JSON.stringify({
          contactInfo,
          currentPassword,
          newPassword,
        }),
      });

      if (response.ok) {
        showMessage("Password updated successfully!", "success");
        setTimeout(() => {
          changePasswordForm.reset();
          const strengthIndicator =
            document.querySelector(".password-strength");
          if (strengthIndicator) strengthIndicator.remove();

          // Reset requirement checkers
          [lengthCheck, caseCheck, numberCheck, specialCheck].forEach(
            (check) => (check.className = ""),
          );

          // Redirect to login page
          setTimeout(() => {
            window.location.href = "login.html";
          }, 1000);
        }, 2000);
      } else {
        const errorData = await response.json();
        showMessage(
          errorData.message || "An error occurred. Please try again.",
          "error",
        );
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage(
        "An unexpected error occurred. Please try again later.",
        "error",
      );
    }
  });

  [
    currentPasswordInput,
    newPasswordInput,
    confirmPasswordInput,
    contactInfoInput,
  ].forEach((input) => {
    input.addEventListener("input", function () {
      this.classList.remove("input-error", "input-valid");
      messageContainer.innerHTML = "";
    });
  });

  function showMessage(message, type) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.className =
      type === "error" ? "error-message" : "success-message";
    messageElement.style.display = "block";

    messageContainer.innerHTML = "";
    messageContainer.appendChild(messageElement);
  }

  // Security measure: Get CSRF token from meta tag
  function getCsrfToken() {
    return document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
  }
});
