const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservation = function () {
    const personName = document.getElementById("inputName").value
    if (reservations[personName] && !reservations[personName].claimed) {
        console.log("Welcome " + personName)
    } else if (reservations[personName] && reservations[personName].claimed) {
        console.log("Hmm, someone already claimed this reservation")
    } else if (!reservations[personName]) {
        console.log("You have no reservation")
    }
}