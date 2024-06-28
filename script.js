function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var busCard = document.getElementById(data);
    var routeCard = event.target;

    if (data.split('-')[1] === routeCard.id.split('-')[1]) {
        routeCard.appendChild(busCard);
        busCard.style.backgroundColor = "blue";
        alert("Correct match!");
    } else {
        alert("Incorrect match. Try again.");
    }
}

// Add event listeners to bus cards
document.querySelectorAll('.bus-cards .card').forEach(card => {
    card.addEventListener('dragstart', drag);
});
