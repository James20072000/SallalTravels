console.log("script started");

const places = ["France", "Germany", "United States", "Japan", "Italy"];

let index = 0;

setInterval(() => {
    document.getElementById("place").textContent = places[index];

    index = (index + 1) % places.length;
}, 200);

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const startDate = document.getElementById("startDate").value;

    const endDate = document.getElementById("endDate").value;

    const description = document.getElementById("description").value;

    console.log(startDate, endDate, description);

    const today = new Date().toISOString().split("T")[0];

    console.log(today);

    // FUTURE DATE CHECK
    if (startDate < today) {
        alert("Start date must be in future");

        return;
    }

    // END DATE CHECK
    if (endDate <= startDate) {
        alert("End date must be greater than start date");

        return;
    }

    // DESCRIPTION LENGTH CHECK
    if (description.length < 50 || description.length > 500) {
        alert("Description must be between 50 and 500 characters");

        return;
    }

    // SUCCESS MESSAGE
    alert("Booking Successful");

    form.reset();
});
