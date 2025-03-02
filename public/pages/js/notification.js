document.addEventListener('DOMContentLoaded', function () {
    let notificationList = document.getElementById("notification-list");
    let unReadMessagesCount = document.getElementById("num-of-notif");
    let markAll = document.getElementById("mark-as-read");

    // Dummy notification data
    const notifications = [
        { ownerImg: "/assets/img/saddog.jpg", text: "Pet boarding request from John Doe for his pet Max.", time: "1m ago", petImg: "/assets/img/saddog.jpg", unread: true },
        { ownerImg: "/assets/img/saddog.jpg", text: "Your pet grooming session is scheduled for tomorrow.", time: "5m ago", petImg: "/assets/img/saddog.jpg", unread: true },
        { ownerImg: "/assets/img/saddog.jpg", text: "Max's vaccination records are updated.", time: "10m ago", petImg: "/assets/img/saddog.jpg", unread: false },
        { ownerImg: "/assets/img/saddog.jpg", text: "Pet boarding request from John Doe for his pet Max.", time: "1m ago", petImg: "/assets/img/saddog.jpg", unread: true },
        { ownerImg: "/assets/img/saddog.jpg", text: "Your pet grooming session is scheduled for tomorrow.", time: "5m ago", petImg: "/assets/img/saddog.jpg", unread: true },
        { ownerImg: "/assets/img/saddog.jpg", text: "Max's vaccination records are updated.", time: "10m ago", petImg: "/assets/img/saddog.jpg", unread: false }
    ];

    function updateUnreadCount() {
        let unReadMessages = document.querySelectorAll(".notificationCard.unread");
        let count = unReadMessages.length;
        if (count === 0) {
            unReadMessagesCount.style.display = "none";
        } else {
            unReadMessagesCount.style.display = "center";
            unReadMessagesCount.innerText = `${count}`;
        }
    }

    function createNotificationCard(ownerImg, text, time, petImg, unread = true) {
        let card = document.createElement("div");
        card.classList.add("notificationCard");
        if (unread) card.classList.add("unread");

        card.innerHTML = `
            <img alt="owner photo" src="${ownerImg}" class="owner-photo" />
            <div class="description">
                <p>${text}</p>
                <p id="notif-time">${time}</p>
            </div>
            <img alt="pet photo" src="${petImg}" class="pet-photo" />
        `;

        card.addEventListener("click", () => {
            card.classList.remove("unread");
            updateUnreadCount();
        });

        return card;
    }

    function loadNotifications() {
        setTimeout(() => {
            document.querySelectorAll(".skeleton").forEach(skeleton => skeleton.remove());
            
            notifications.forEach((notif, index) => {
                let card = createNotificationCard(notif.ownerImg, notif.text, notif.time, notif.petImg, notif.unread);
                notificationList.appendChild(card);
    
                // Delay each card animation for a smooth effect
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200); // Stagger effect (200ms per card)
            });
    
            updateUnreadCount();
        }, 100);
    }
    

    // Mark all as read
    markAll.addEventListener("click", () => {
        document.querySelectorAll(".notificationCard.unread").forEach(message => {
            message.classList.remove("unread");
        });
        updateUnreadCount();
    });

    loadNotifications();
});