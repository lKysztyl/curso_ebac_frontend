function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let timeString = "";

    switch (true) {
        case hours < 10:
            timeString += "0" + hours;
            break;
        default:
            timeString += hours;
    }

    timeString += ":";

    switch (true) {
        case minutes < 10:
            timeString += "0" + minutes;
            break;
        default:
            timeString += minutes;
    }

    timeString += ":";

    switch (true) {
        case seconds < 10:
            timeString += "0" + seconds;
            break;
        default:
            timeString += seconds;
    }

    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Inicializa o relógio imediatamente