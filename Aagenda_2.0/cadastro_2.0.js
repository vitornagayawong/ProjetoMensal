document.addEventListener('DOMContentLoaded', function () {
    const addEventForm = document.getElementById('addEvent');
    const eventsList = document.getElementById('eventsList');
    const searchBar = document.querySelector('.search-bar');

    function saveEventsToLocalStorage() {
        const events = [];
        document.querySelectorAll('.event-item').forEach(eventItem => {
            events.push({
                name: eventItem.querySelector('h3').textContent,
                description: eventItem.querySelector('p:nth-of-type(1)').textContent.replace('Descrição: ', ''),
                date: eventItem.querySelector('p:nth-of-type(2)').textContent.replace('Data: ', ''),
                startTime: eventItem.querySelector('p:nth-of-type(3)').textContent.replace('Horário de Início: ', ''),
                endTime: eventItem.querySelector('p:nth-of-type(4)').textContent.replace('Horário de Término: ', ''),
                urgency: eventItem.querySelector('p:nth-of-type(5)').textContent.replace('Urgência: ', '')
            });
        });
        localStorage.setItem('events', JSON.stringify(events));
    }

    function loadEventsFromLocalStorage() {
        const events = JSON.parse(localStorage.getItem('events')) || [];
        events.forEach(event => {
            addEventToList(event.name, event.description, event.date, event.startTime, event.endTime, event.urgency);
        });
    }

    function addEventToList(name, description, date, startTime, endTime, urgency) {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');

        // Adicionar classe de urgência com base no valor da urgência
        if (urgency === 'alta') {
            eventItem.classList.add('urgency-alta');
        } else if (urgency === 'moderada') {
            eventItem.classList.add('urgency-moderada');
        } else if (urgency === 'baixa') {
            eventItem.classList.add('urgency-baixa');
        }

        eventItem.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Descrição:</strong> ${description}</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Horário de Início:</strong> ${startTime}</p>
        <p><strong>Horário de Término:</strong> ${endTime}</p>
        <p><strong>Urgência:</strong> ${urgency}</p>
        <button class="edit-button">Editar</button>
        <button class="delete-button">Excluir</button>
    `;

        eventItem.querySelector('.delete-button').addEventListener('click', function () {
            eventItem.remove();
            saveEventsToLocalStorage();
        });

        eventItem.querySelector('.edit-button').addEventListener('click', function () {
            document.getElementById('event-name').value = name;
            document.getElementById('event-description').value = description;
            document.getElementById('event-date').value = date;
            document.getElementById('event-start-time').value = startTime;
            document.getElementById('event-end-time').value = endTime;
            document.querySelector(`input[name="urgency"][value="${urgency}"]`).checked = true;

            eventItem.remove();
            saveEventsToLocalStorage();
        });

        eventsList.appendChild(eventItem);
    }

    addEventForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventDescription = document.getElementById('event-description').value;
        const eventDate = document.getElementById('event-date').value;
        const eventStartTime = document.getElementById('event-start-time').value;
        const eventEndTime = document.getElementById('event-end-time').value;
        const eventUrgency = document.querySelector('input[name="urgency"]:checked').value;

        addEventToList(eventName, eventDescription, eventDate, eventStartTime, eventEndTime, eventUrgency);
        saveEventsToLocalStorage();
        addEventForm.reset();
    });

    searchBar.addEventListener('input', function () {
        const searchText = searchBar.value.toLowerCase();
        const eventItems = eventsList.querySelectorAll('.event-item');

        eventItems.forEach(function (eventItem) {
            const eventName = eventItem.querySelector('h3').textContent.toLowerCase();
            if (eventName.includes(searchText)) {
                eventItem.style.display = 'block';
            } else {
                eventItem.style.display = 'none';
            }
        });
    });

    loadEventsFromLocalStorage();
});