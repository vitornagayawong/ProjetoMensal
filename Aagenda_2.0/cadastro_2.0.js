document.addEventListener('DOMContentLoaded', function() {
    const addEventForm = document.getElementById('addEvent');
    const eventsList = document.getElementById('eventsList');
    const searchBar = document.querySelector('.search-bar');

    addEventForm.addEventListener('submit', function(event) {
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
            <p><strong>Descrição:</strong> ${eventDescription}</p>
            <p><strong>Data:</strong> ${eventDate}</p>
            <p><strong>Horário de Início:</strong> ${eventStartTime}</p>
            <p><strong>Horário de Término:</strong> ${eventEndTime}</p>
            <p><strong>Urgência:</strong> ${eventUrgency}</p>
            <button class="delete-button">Excluir</button>
        `;

        eventItem.querySelector('.delete-button').addEventListener('click', function() {
            eventItem.remove();
        });

        eventsList.appendChild(eventItem);

        addEventForm.reset();
    });

    searchBar.addEventListener('input', function() {
        const searchText = searchBar.value.toLowerCase();
        const eventItems = eventsList.querySelectorAll('.event-item');

        eventItems.forEach(function(eventItem) {
            const eventName = eventItem.querySelector('h3').textContent.toLowerCase();
            if (eventName.includes(searchText)) {
                eventItem.style.display = 'block';
            } else {
                eventItem.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addEventForm = document.getElementById('addEvent');
    const eventsList = document.getElementById('eventsList');
    const searchBar = document.querySelector('.search-bar');

    addEventForm.addEventListener('submit', function(event) {
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
            <p><strong>Descrição:</strong> ${eventDescription}</p>
            <p><strong>Data:</strong> ${eventDate}</p>
            <p><strong>Horário de Início:</strong> ${eventStartTime}</p>
            <p><strong>Horário de Término:</strong> ${eventEndTime}</p>
            <p><strong>Urgência:</strong> ${eventUrgency}</p>
        `;

        eventsList.appendChild(eventItem);

        addEventForm.reset();
    });

    searchBar.addEventListener('input', function() {
        const searchText = searchBar.value.toLowerCase();
        const eventItems = eventsList.querySelectorAll('.event-item');

        eventItems.forEach(function(eventItem) {
            const eventName = eventItem.querySelector('h3').textContent.toLowerCase();
            if (eventName.includes(searchText)) {
                eventItem.style.display = 'block';
            } else {
                eventItem.style.display = 'none';
            }
        });
    });
});