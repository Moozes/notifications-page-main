let actionButton = document.getElementById("action-button").addEventListener("click", function() {
    let unreadNotificationArray = document.querySelectorAll(".unread")
    unreadNotificationArray.forEach(elm => {
        elm.classList.remove("unread")
    })

    let redDots = document.querySelectorAll(".red-dot")
    redDots.forEach(elm => {
        elm.classList.add("hide")
    })

    let notificationsNumber = document.querySelector(".number")
    notificationsNumber.classList.add("hide")
})