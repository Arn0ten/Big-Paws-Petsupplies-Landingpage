document.addEventListener("DOMContentLoaded", function () {
    // Simulate fetching data (Replace this with actual API call)
    setTimeout(loadPetOwners, 2000); // Simulating a delay for skeleton loader
  });

  function loadPetOwners() {
    const skeletonLoader = document.getElementById("skeletonLoader");
    const ownerTableBody = document.getElementById("ownerTableBody");

    // Hide skeleton loader
    skeletonLoader.style.display = "none";
    // Show actual data table
    ownerTableBody.style.display = "table-row-group";

    // Sample data
    const data = [
        { avatar: 'sleepingcat.jpg', owner: 'Maria Santos', contact: '09175551234', email: 'maria.santos@email.com', address: 'Unit 1234, Tower A, SM Light Residences, EDSA Corner Madison Street, Mandaluyong City, Metro Manila', pets: ['Brownie (Aspin)', 'Mingming (Puspin)'] },
        { avatar: 'saddog.jpg', owner: 'Juan Dela Cruz', contact: '09181234567', email: 'juan.delacruz@email.com', address: '123 Don Mariano Santos Avenue, Barangay Commonwealth, Quezon City, Metro Manila 1121', pets: ['Bantay (Aspin)', 'Tiger (Persian Cat)'] },
        { avatar: 'smilingsog.jpg', owner: 'Rosa Reyes', contact: '09198887777', email: 'rosa.reyes@email.com', address: 'Block 15 Lot 7 Phase 2, BF Homes Parañaque, Dr. A. Santos Avenue, Parañaque City, Metro Manila', pets: ['Lucky (Shih Tzu)', 'Whitey (African Lovebird)'] },
        { avatar: 'profile.jpg', owner: 'Pedro Mendoza', contact: '09954443333', email: 'pedro.mendoza@email.com', address: '789 Governor M. Cuenco Avenue, Barangay Mabolo, Cebu City, Cebu 6000', pets: ['Blackie (Labrador)', 'Chichi (Siamese)'] },
        { avatar: 'saddog.jpg', owner: 'Elena Rodriguez', contact: '09276668888', email: 'elena.rodriguez@email.com', address: 'Unit 507 Green Residences, Taft Avenue corner Pablo Ocampo Street, Malate, Manila, Metro Manila', pets: ['Pogi (Beagle)', 'Princess (Persian)'] },
        { avatar: 'google.png', owner: 'Antonio Garcia', contact: '09362221111', email: 'antonio.garcia@email.com', address: '456 President Corazon C. Aquino Avenue, Barangay Batasan Hills, Quezon City, Metro Manila 1126', pets: ['Max (Golden Retriever)', 'Tweety (Parakeet)'] }
      ];

    $(document).ready(function () {
      const rowsPerPage = 5;
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
              <td class="owner-column">${row.owner}</td>
              <td class="contact-column">${row.contact}</td>
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
              </tr>
            `;
            tbody.append(rowHtml);
            });

        $("#prevPage").prop("disabled", page === 1);
        $("#nextPage").prop("disabled", page === totalPages);
      }

      // Keep your existing event handlers
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