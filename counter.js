document.addEventListener("DOMContentLoaded", function () {
    fetch("https://countapi.mileshilliard.com/api/v1/hit/Drone")
        .then(response => response.json())
        .then(data => {
            document.getElementById("visitor-count").textContent = data.value;
        })
        .catch(() => {
            document.getElementById("visitor-count").textContent = "unavailable";
        });
});

