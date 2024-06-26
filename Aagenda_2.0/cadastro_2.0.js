document.addEventListener('DOMContentLoaded', function () {
    const addEventForm = document.getElementById('addEvent');
    const eventsList = document.getElementById('eventsList');
    const searchBar = document.querySelector('.search-bar');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closePopupBtn = document.getElementById('closePopupBtn');

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

            const urgencyInputs = document.querySelectorAll('input[name="urgency"]');
            urgencyInputs.forEach(input => {
                if (input.value === urgency) {
                    input.checked = true;
                }
            });

            eventItem.remove();
            saveEventsToLocalStorage();
        });

        eventsList.appendChild(eventItem);
        saveEventsToLocalStorage();
        scheduleReminder(name, date, startTime);
    }

    function scheduleReminder(name, date, startTime) {
        const eventDateTime = new Date(`${date}T${startTime}`);
        const reminderTime = new Date(eventDateTime.getTime() - 20 * 60000); // 20 minutos antes

        const now = new Date();

        if (reminderTime > now) {
            const timeout = reminderTime.getTime() - now.getTime();
            setTimeout(() => {
                showReminder(name);
            }, timeout);
        }
    }

    function showReminder(name) {
        popupMessage.textContent = `Lembrete: Você tem um compromisso: ${name}`;
        popup.style.display = 'flex';
    }

    addEventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('event-name').value;
        const description = document.getElementById('event-description').value;
        const date = document.getElementById('event-date').value;
        const startTime = document.getElementById('event-start-time').value;
        const endTime = document.getElementById('event-end-time').value;
        const urgency = document.querySelector('input[name="urgency"]:checked').value;

        addEventToList(name, description, date, startTime, endTime, urgency);

        addEventForm.reset();
    });

    searchBar.addEventListener('input', function () {
        const searchTerm = searchBar.value.toLowerCase();
        const eventItems = document.querySelectorAll('.event-item');

        eventItems.forEach(eventItem => {
            const eventName = eventItem.querySelector('h3').textContent.toLowerCase();
            const eventDescription = eventItem.querySelector('p:nth-of-type(1)').textContent.toLowerCase();

            if (eventName.includes(searchTerm) || eventDescription.includes(searchTerm)) {
                eventItem.style.display = '';
            } else {
                eventItem.style.display = 'none';
            }
        });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    loadEventsFromLocalStorage();
});
