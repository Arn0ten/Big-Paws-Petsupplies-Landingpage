// Function to play sound
function playSound(sound) {
    sound.currentTime = 0; 
    sound.play();
}

//Calendar Function
document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("monthYear");
    const calendarDays = document.getElementById("calendarDays");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    const selectedRange = document.getElementById("selectedRange");
    const longStayRadio = document.getElementById("longStay");
    const daycareRadio = document.getElementById("daycare");
    const calendarContainer = document.getElementById("calendarContainer");
    const timePickerContainer = document.getElementById("timePickerContainer");

    let date = new Date();
    let startDate = null;
    let endDate = null;


    function toggleBoardingType() {
        if (longStayRadio.checked) {
            calendarContainer.classList.remove("d-none");
            timePickerContainer.classList.add("d-none");
        } else {
            calendarContainer.classList.add("d-none");
            timePickerContainer.classList.remove("d-none");
        }
    }
    
    

    function renderCalendar() {
        try {
            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();
            const today = new Date();
            today.setHours(0, 0, 0, 0); 

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            
            monthYear.textContent = `${monthNames[month]} ${year}`;
            calendarDays.innerHTML = "";

            // Add day names to the calendar
            dayNames.forEach(day => {
                const dayNameDiv = document.createElement("div");
                dayNameDiv.textContent = day;
                dayNameDiv.classList.add("day-name");
                calendarDays.appendChild(dayNameDiv);
            });

            // Add empty divs for spacing before first day
            for (let i = 0; i < firstDay; i++) {
                calendarDays.appendChild(document.createElement("div"));
            }

            for (let day = 1; day <= lastDate; day++) {
                const dayDiv = document.createElement("div");
                const selectedDate = new Date(year, month, day);

                dayDiv.textContent = day;
                dayDiv.classList.add(selectedDate < today ? "disabled" : "selectable");

                //Sound click here for your mother
                if (selectedDate >= today) {
                    dayDiv.addEventListener("click", () => {
                        playSound(clickSound);
                        handleDateSelection(selectedDate);
                    });
                    dayDiv.addEventListener("mouseenter", () => playSound(hoverSound));
                }

                // Apply selected range styles
                if (startDate && selectedDate.getTime() === startDate.getTime()) {
                    dayDiv.classList.add("start-date");
                }
                if (endDate && selectedDate.getTime() === endDate.getTime()) {
                    dayDiv.classList.add("end-date");
                }
                if (startDate && endDate && selectedDate > startDate && selectedDate < endDate) {
                    dayDiv.classList.add("in-range");
                }

                calendarDays.appendChild(dayDiv);
            }
        } catch (error) {
            console.error("Error rendering calendar:", error);
        }
    }

    function handleDateSelection(selectedDate) {
        if (!startDate || (startDate && endDate)) {
            startDate = selectedDate;
            endDate = null;
        } else if (selectedDate >= startDate) {
            endDate = selectedDate;
        } else {
            startDate = selectedDate;
            endDate = null;
        }

        updateSelectedRange();
        renderCalendar();
    }

    function updateSelectedRange() {
        if (startDate && endDate) {
            selectedRange.textContent = `${formatDate(startDate)} → ${formatDate(endDate)}`;
        } else if (startDate) {
            selectedRange.textContent = `${formatDate(startDate)} (Select End Date)`;
        } else {
            selectedRange.textContent = "None";
        }
    }

    function formatDate(date) {
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }

    prevMonth.addEventListener("click", () => {
        playSound(clickSound);
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextMonth.addEventListener("click", () => {
        playSound(clickSound);
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    function changeMonth(offset) {
        date.setMonth(date.getMonth() + offset);
        renderCalendar();
    }

    //para dli maka select and user ug same date sa start ug end
    function handleDateSelection(selectedDate) {
        if (!startDate || (startDate && endDate)) {
            startDate = selectedDate;
            endDate = null;
        } else if (selectedDate > startDate) {
            endDate = selectedDate;
        } else {
            startDate = selectedDate;
            endDate = null;
        }
    
        updateSelectedRange();
        renderCalendar();
    }
    

    [longStayRadio, daycareRadio].forEach(radio => radio.addEventListener("change", toggleBoardingType));

    // Initialize defaults
    longStayRadio.checked = true;
    toggleBoardingType();
    renderCalendar();
});
