//Pet Profile picture 
function updatePetAvatar() {
    const petType = document.getElementById("petType").value;
    const petAvatarPreview = document.getElementById("petAvatarPreview");
    let randomIndex;
    if (petType === "dog") {
        randomIndex = Math.floor(Math.random() * 6) + 1;
        petAvatarPreview.src = `/assets/img/random-dogs/dog${randomIndex}.jpg`;
    } else if (petType === "cat") {
        randomIndex = Math.floor(Math.random() * 6) + 1;
        petAvatarPreview.src = `/assets/img/random-cats/cat${randomIndex}.jpg`;
    } else if (petType === "bird") {
        randomIndex = Math.floor(Math.random() * 5) + 1;
        petAvatarPreview.src = `/assets/img/random-birds/bird${randomIndex}.jpg`;
    } else {
        randomIndex = Math.floor(Math.random() * 6) + 1;
        petAvatarPreview.src = `/assets/img/random-dogs/dog${randomIndex}.jpg`;
    }
}

  function previewPetAvatar(event) {
    const reader = new FileReader();
    reader.onload = function () {
      const petAvatarPreview =
        document.getElementById("petAvatarPreview");
      petAvatarPreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
//Pet Type and Pet Breed
function updateBreedOptions() {
    const petType = document.getElementById("petType").value;
    const petBreed = document.getElementById("petBreed");
    petBreed.innerHTML = ""; 

    let breeds = [];

    if (petType === "dog") {
      breeds = [
        "Labrador Retriever",
        "German Shepherd",
        "Golden Retriever",
        "Bulldog",
        "Beagle",
      ];
    } else if (petType === "cat") {
      breeds = [
        "Persian",
        "Maine Coon",
        "Siamese",
        "Ragdoll",
        "Sphynx",
      ];
    } else if (petType === "bird") {
      breeds = [
        "Parrot",
        "Canary",
        "Finch",
        "Cockatiel",
        "Parakeet",
      ];
    } else {
      petBreed.outerHTML =
        '<input type="text" class="form-control mb-3" id="petBreed" placeholder="Enter Pet Breed" />';
      return;
    }

    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      petBreed.appendChild(option);
    });
  }



  // Function to toggle Date Picker and Time Picker
  function toggleBoardingType() {
    let isLongStay = document.getElementById("longStay").checked;
    document
      .getElementById("calendarContainer")
      .classList.toggle("d-none", !isLongStay);
    document
      .getElementById("timePickerContainer")
      .classList.toggle("d-none", isLongStay);
  }

  // Dynamically Populate Pet Selection with Images
  document.addEventListener("DOMContentLoaded", function () {
    let petSelectionContainer = document.getElementById(
      "petSelectionContainer"
    );

    // Example Pet Data (Replace with API or Database Fetch)
    let pets = [
      { name: "Bella", img: "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_398.jpg" },
      { name: "Max", img: "https://images.dog.ceo/breeds/chihuahua/n02085620_2479.jpg" },
      { name: "Charlie", img: "https://images.dog.ceo/breeds/labrador/n02099712_5769.jpg" },
      { name: "Luna", img: "https://images.dog.ceo/breeds/maltese/n02085936_2741.jpg" },
    ];

    pets.forEach((pet) => {
      let petItem = document.createElement("div");
      petItem.className = "pet-item text-center";
      petItem.innerHTML = `
<input type="checkbox" class="btn-check" id="${pet.name}" autocomplete="off">
<label class="btn btn-outline-dark" for="${pet.name}">
  <img src="${pet.img}" alt="${pet.name}" class="rounded-circle border p-1" width="60" height="60">
  <br> ${pet.name}
</label>
`;
      petSelectionContainer.appendChild(petItem);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Simulate fetching data (Replace this with actual API call)
    setTimeout(loadPetOwners, 1000); 
  });

  function loadPetOwners() {
    const skeletonLoader = document.getElementById("skeletonLoader");
    const ownerTableBody = document.getElementById("ownerTableBody");

    // Fade out skeleton loader smoothly
    skeletonLoader.style.transition = "opacity 1.3s ease-out";
    skeletonLoader.style.opacity = "0";

    setTimeout(() => {
        skeletonLoader.style.display = "none";

        // Fade in actual data
        ownerTableBody.style.display = "table-row-group";
        ownerTableBody.style.opacity = "0"; 
        ownerTableBody.style.transition = "opacity 1.3s ease-in";
        ownerTableBody.style.opacity = "1";

        displayTableData(1); 
    }, 1); 

    // Sample data
    const data = [
      { avatar: 'sleepingcat.jpg', owner: 'Maria Santos', contact: '09175551234', email: 'maria.santos@email.com', address: 'Unit 1234, Tower A, SM Light Residences, EDSA Corner Madison Street, Mandaluyong City, Metro Manila', pets: ['Brownie (Aspin)', 'Mingming (Puspin)'] },
      { avatar: 'saddog.jpg', owner: 'Juan Dela Cruz', contact: '09181234567', email: 'juan.delacruz@email.com', address: '123 Don Mariano Santos Avenue, Barangay Commonwealth, Quezon City, Metro Manila 1121', pets: ['Bantay (Aspin)', 'Tiger (Persian Cat)'] },
      { avatar: 'smilingsog.jpg', owner: 'Rosa Reyes', contact: '09198887777', email: 'rosa.reyes@email.com', address: 'Block 15 Lot 7 Phase 2, BF Homes Parañaque, Dr. A. Santos Avenue, Parañaque City, Metro Manila', pets: ['Lucky (Shih Tzu)', 'Whiskers (Maine Coon)'] },
      { avatar: 'profile.jpg', owner: 'Pedro Mendoza', contact: '09954443333', email: 'pedro.mendoza@email.com', address: '789 Governor M. Cuenco Avenue, Barangay Mabolo, Cebu City, Cebu 6000', pets: ['Blackie (Labrador)', 'Chichi (Siamese)'] },
      { avatar: 'saddog.jpg', owner: 'Elena Rodriguez', contact: '09276668888', email: 'elena.rodriguez@email.com', address: 'Unit 507 Green Residences, Taft Avenue corner Pablo Ocampo Street, Malate, Manila, Metro Manila', pets: ['Pogi (Beagle)', 'Princess (Persian Cat)'] },
      { avatar: 'google.png', owner: 'Antonio Garcia', contact: '09362221111', email: 'antonio.garcia@email.com', address: '456 President Corazon C. Aquino Avenue, Barangay Batasan Hills, Quezon City, Metro Manila 1126', pets: ['Max (Golden Retriever)', 'Mittens (Bengal Cat)'] },
      { avatar: 'happydog.jpg', owner: 'Daniel Cruz', contact: '09123334444', email: 'daniel.cruz@email.com', address: '456 Greenbelt Drive, Makati City, Metro Manila', pets: ['Rocky (Bulldog)', 'Luna (Ragdoll Cat)'] },
      { avatar: 'fluffycat.jpg', owner: 'Carmen Villanueva', contact: '09987776655', email: 'carmen.villanueva@email.com', address: '678 Alabang Hills, Muntinlupa City, Metro Manila', pets: ['Snowball (Poodle)', 'Shadow (Siberian Cat)'] },
      { avatar: 'dogowner.jpg', owner: 'Luis Gonzales', contact: '09192223334', email: 'luis.gonzales@email.com', address: '159 Ayala Avenue, Makati City, Metro Manila', pets: ['Rex (Doberman)', 'Cleo (British Shorthair)'] },
      { avatar: 'catlady.jpg', owner: 'Ana Fernandez', contact: '09221114444', email: 'ana.fernandez@email.com', address: '23 Tomas Morato Avenue, Quezon City, Metro Manila', pets: ['Charlie (Chow Chow)', 'Bella (Scottish Fold)'] }
    ];
    
    
    
    $(document).ready(function () {
      const rowsPerPage = 6;
      let currentPage = 1;
      function displayTableData(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const rowsToDisplay = data.slice(start, end);
        const totalPages = Math.ceil(data.length / rowsPerPage);
        const tbody = $('#ownerTable tbody');
        tbody.empty();
        const badgeColors = ['primary', 'danger', 'warning', 'success'];
        let colorIndex = 0;
        rowsToDisplay.forEach(row => {
          const petsHtml = row.pets.map(pet => {
            const badgeColor = badgeColors[colorIndex];
            colorIndex = (colorIndex + 1) % badgeColors.length;
            return `<span class="badge bg-${badgeColor}">${pet}</span>`;
          }).join(' ');
          const rowHtml = `
            <tr>
              <td><div class="avatar avatar-sm"><img src="/assets/img/${row.avatar}" alt="..." class="avatar-img rounded-circle" /></div></td>
              <td>${row.owner}</td>
              <td>${row.contact}</td>
              <td>${row.email}</td>
              <td class="address-column" data-address="${row.address}">${row.address}</td>
              <td>${petsHtml}</td>
              <td>
                <div class="d-flex align-items-center gap-2">
                  <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#addPetModal"><i class="fa fa-plus"></i> Pet</button>
                  <button class="btn btn-info btn-sm"><i class="fa fa-edit"></i> Edit</button>
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#boardingModal"><i class="fa fa-bed"></i> Board</button>
                  <button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i> Delete</button>
                </div>
              </td>
            </tr>`;
          tbody.append(rowHtml);
        });
        $("#prevPage").prop("disabled", page === 1);
        $("#nextPage").prop("disabled", page === totalPages);
      }
      $(document).on('click', '.address-column', function () {
        const fullAddress = $(this).data('address');
        $('#addressModal .modal-body').text(fullAddress); 
        $('#addressModal').modal('show');
      });
      $("#nextPage").click(function () {
        if (currentPage * rowsPerPage < data.length) {
          currentPage++;
          displayTableData(currentPage);
        }
      });
      $("#prevPage").click(function () {
        if (currentPage > 1) {
          currentPage--;
          displayTableData(currentPage);
        }
      });
      displayTableData(currentPage);
    });
  }
