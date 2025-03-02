
//skeleton loader
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      document.getElementById("skeletonLoader").classList.add("hidden");
      document.getElementById("realForm").classList.remove("hidden");
    }, 2000); 
  });