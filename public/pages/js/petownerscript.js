//Webfont
WebFont.load({
    google: { families: ["Public Sans:300,400,500,600,700"] },
    custom: {
      families: [
        "Font Awesome 5 Solid",
        "Font Awesome 5 Regular",
        "Font Awesome 5 Brands",
        "simple-line-icons",
      ],
      urls: ["/assets/css/fonts.min.css"],
    },
    active: function () {
      sessionStorage.fonts = true;
    },
  });
//Pet Owner Information
document.addEventListener("DOMContentLoaded", function () {
    // Handle Profile Picture Preview
    document.getElementById("profilePicture").addEventListener("change", function (event) {
        let reader = new FileReader();
        reader.onload = function () {
            document.getElementById("avatarPreview").src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    });

    // Initialize Date Range Picker
    $("#dateRange").datepicker({
        format: "mm/dd/yyyy",
        todayHighlight: true,
        autoclose: true,
        clearBtn: true
    });
});



//Pang Catch og missing fields for required info
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitForm").addEventListener("click", function (event) {
        event.preventDefault();
        let firstError = null;
        document.querySelectorAll(".required-field").forEach(function (input) {
            if (input.value.trim() === "") {
                input.classList.add("is-invalid");
                if (!firstError) {
                    firstError = input;
                }
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (firstError) {
            firstError.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        } else {
            //calling swal for confirmation and success dialog
            swal({
                title: "Confirm Submission",
                text: "Are you sure you want to submit the form?",
                icon: "warning",
                buttons: {
                    cancel: true,
                    confirm: {
                        text: "Submit",
                        value: true,
                        visible: true,
                        className: "btn btn-success",
                        closeModal: true
                    }
                }
            }).then((willSubmit) => {
                if (willSubmit) {
                    swal({
                        title: "Success!",
                        text: "Your registration has been successfully submitted.",
                        icon: "success",
                        button: {
                            text: "OK",
                            className: "btn btn-success"
                        }
                    }).then(() => {
                        document.getElementById("registrationForm").submit();
                    });
                }
            });

        }
    });
});

//Pang clear form
document.getElementById("clearForm")
                      .addEventListener("click", function () {
                        swal({
                          title: "Confirm action",
                          text: "Are you sure you want to clear the form?",
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            document
                              .querySelectorAll(".required-field")
                              .forEach(function (input) {
                                input.value = "";
                              });
                            swal("Poof! Your form has been cleared!", {
                              icon: "success",
                              button: {
                                text: "OK",
                                className: "btn btn-success"
                            }
                            });
                          } else {
                            
                          }
                        });
                      });

  //City and Province Dropdown, nag API ta kay para ma list tanang City Province sa PH
  document.addEventListener("DOMContentLoaded", async function () {
    const provinceSelect = document.getElementById("province");
    const citySelect = document.getElementById("city");

    // Fetch and load provinces
    async function loadProvinces() {
      try {
        const response = await fetch("https://psgc.gitlab.io/api/provinces/");
        const provinces = await response.json();

        provinces.forEach((province) => {
          let option = new Option(province.name, province.code);
          provinceSelect.add(option);
        });
      } catch (error) {
        console.error("Error loading provinces:", error);
      }
    }

    // Fetch and load cities based on selected province
    async function loadCities(provinceCode) {
      try {
        citySelect.innerHTML = `<option value="" disabled selected>Loading...</option>`;
        const response = await fetch(`https://psgc.gitlab.io/api/provinces/${provinceCode}/cities`);
        const cities = await response.json();

        citySelect.innerHTML = `<option value="" disabled selected>Select City/Town</option>`;
        cities.forEach((city) => {
          let option = new Option(city.name, city.code);
          citySelect.add(option);
        });
      } catch (error) {
        console.error("Error loading cities:", error);
      }
    }

    // Load cities when a province is selected
    provinceSelect.addEventListener("change", function () {
      const selectedProvinceCode = this.value;
      if (selectedProvinceCode) {
        loadCities(selectedProvinceCode);
      }
    });

    // Initialize dropdowns
    loadProvinces();
  });

  


