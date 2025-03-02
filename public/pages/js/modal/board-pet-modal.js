let currentStep = 1;
const totalSteps = 4;

// Initial setup to ensure the correct color is applied to the first step and progress bar
window.onload = function () {
  updateProgressBar();
  updateStepStyles(currentStep);
  navigateStep(0); // Initialize the modal by navigating to the first step
};

function navigateStep(direction) {
  document.getElementById(`step${currentStep}`).classList.add("d-none");
  currentStep += direction;

  if (currentStep < 1) {
    currentStep = 1;
  }
  if (currentStep > totalSteps) {
    currentStep = totalSteps;
  }

  document.getElementById(`step${currentStep}`).classList.remove("d-none");

  document.getElementById("prevBtn").classList.toggle("d-none", currentStep === 1);
  document.getElementById("nextBtn").innerText = currentStep === totalSteps ? "Save Boarding" : "Next";

  updateProgressBar();
  updateStepStyles(currentStep); // Update step colors when navigating
  updateOverview(); // Update the overview dynamically as per the current step
}

function updateProgressBar() {
  const progress = (currentStep / totalSteps) * 100;
  document.getElementById("progressBar").style.width = `${progress}%`;

  // Update the step circles
  document.querySelectorAll(".step-circle").forEach((circle, index) => {
    circle.classList.toggle("active", index < currentStep);
  });

  // Update progress bar color based on current step
  const progressBar = document.querySelector(".progress-bar");
  progressBar.className = "progress-bar";
  progressBar.classList.add(`step${currentStep}`);
}

function updateModalTitle(step) {
  const isBoardingTypeSelected = document.querySelector('input[name="boardingType"]:checked');
  const isDaycare = isBoardingTypeSelected && isBoardingTypeSelected.value === 'daycare';
  
  const stepTitles = [
    'Step 1: Select Pet',
    'Step 2: Select Boarding Type',
    isDaycare ? 'Step 3: Select Time Range' : 'Step 3: Select Date Range', 
    'Step 4: Overview'
  ];
  
  document.getElementById('boardingModalLabel').innerHTML = 
    `<h5 class="fw-bold">${stepTitles[step-1]}</h5>`;
}


// Modify the navigateStep function to include the title update:
function navigateStep(direction) {
  document.getElementById(`step${currentStep}`).classList.add("d-none");
  currentStep += direction;

  if (currentStep < 1) {
    currentStep = 1;
  }
  if (currentStep > totalSteps) {
    currentStep = totalSteps;
  }

  document.getElementById(`step${currentStep}`).classList.remove("d-none");
  updateModalTitle(currentStep);

  document.getElementById("prevBtn").classList.toggle("d-none", currentStep === 1);
  document.getElementById("nextBtn").innerText = currentStep === totalSteps ? "Save" : "Next";

  updateProgressBar();
  updateStepStyles(currentStep);
  updateOverview();
}

// Also add this to your window.onload function:
window.onload = function () {
  updateProgressBar();
  updateStepStyles(currentStep);
  updateModalTitle(currentStep);
  navigateStep(0);
};

function updateStepStyles(step) {
  const stepColors = [
    "#ff6b6b", 
    "#4ecdc4",
    "#45b7d1", 
    "#05c93f", 
  ];

  // Get the current step's color
  let currentStepColor = stepColors[step - 1];

  // Apply colors to all steps based on the current step
  document.querySelectorAll(".step-circle").forEach((circle, index) => {
    // Update previous steps with the current step's color
    if (index < step) {
      circle.style.backgroundColor = currentStepColor;
      circle.classList.add("active");
    } else {
      // Reset future steps to default color
      circle.style.backgroundColor = "#ddd";
      circle.classList.remove("active");
    }
  });

  // Update the step titles or text color based on the step
  document.querySelectorAll(".step-item").forEach((item, index) => {
    item.classList.remove("active");
    if (index < step) {
      item.classList.add("active");
    }
  });
}

function updateOverview() {
  let selectedPets = document.getElementById('selectedPets');
  let selectedBoardingType = document.getElementById('selectedBoardingType');
  let overviewSelectedRange = document.getElementById('overviewSelectedRange');

  // Dummy values for demonstration (replace with your logic)
  let petsArray = ["Buddy", "Max", "Bantay"]; // Example pet names
  let boardingType = "Long Stay";
  let dateRange = "March 10 - March 15";
  let total = 5000; // Example total price

  // Define an array of bootstrap badge colors
  const badgeColors = ['bg-primary', 'bg-success', 'bg-warning', 'bg-info', 'bg-danger'];

  // Clear existing content in selectedPets before appending new badges
  selectedPets.innerHTML = "";

  // Loop through petsArray and create a badge for each pet with different colors
  petsArray.forEach((pet, index) => {
      let badge = document.createElement("span");
      badge.className = `badge ${badgeColors[index % badgeColors.length]} me-1`;
      badge.innerText = pet;
      selectedPets.appendChild(badge);
  });

  // Update other elements
  selectedBoardingType.innerText = boardingType;
  overviewSelectedRange.innerText = dateRange;
  document.getElementById('totalPrice').innerText = `₱${total.toFixed(2)}`;
}


