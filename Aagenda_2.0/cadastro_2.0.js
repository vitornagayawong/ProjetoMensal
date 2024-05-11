document.addEventListener('DOMContentLoaded', function () {
    const addEventForm = document.getElementById('addEvent');
    const eventsList = document.getElementById('eventsList');

    addEventForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventDescription = document.getElementById('event-description').value;
        const eventDate = document.getElementById('event-date').value;
        const eventStartTime = document.getElementById('event-start-time').value;
        const eventEndTime = document.getElementById('event-end-time').value;
        const eventUrgency = document.querySelector('input[name="urgency"]:checked').value;

        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${eventName}</h3>
            <p><strong>Description:</strong> ${eventDescription}</p>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Start Time:</strong> ${eventStartTime}</p>
            <p><strong>End Time:</strong> ${eventEndTime}</p>
            <p><strong>Urgency:</strong> ${eventUrgency}</p>
        `;

        eventsList.appendChild(eventItem);

        addEventForm.reset();
    });
});
