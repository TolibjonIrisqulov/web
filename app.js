const timeDisplay = document.getElementById('time');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
const alarmStatus = document.getElementById('alarmStatus');

let alarmTime;
let alarmTimeout;

function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);

setAlarmButton.addEventListener('click', () => {
    alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        alarmStatus.textContent = `Budilnik ${alarmTime} ga o'rnatildi.`;
        setAlarm();
    } else {
        alarmStatus.textContent = 'Iltimos, vaqtni kiriting.';
    }
});

function setAlarm() {
    clearTimeout(alarmTimeout);
    const now = new Date();
    const [hours, minutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);

    if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - now;

    alarmTimeout = setTimeout(() => {
        alert('Budilnik! Vaqt keldi!');
        alarmStatus.textContent = '';
    }, timeToAlarm);
}

let selectedSound = 'budilnik1.mp3';

const soundSelect = document.getElementById('soundSelect');

soundSelect.addEventListener('change', (event) => {
    selectedSound = event.target.value; // Tanlangan ovoz
});

function setAlarm() {
    clearTimeout(alarmTimeout);
    const now = new Date();
    const [hours, minutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);

    if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1);
    }

    const timeToAlarm = alarmDate - now;

    alarmTimeout = setTimeout(() => {
        const alarmSound = new Audio(selectedSound); // Tanlangan ovoz
        alarmSound.play();
        alarmStatus.textContent = '';
    }, timeToAlarm);
}

const modeRadios = document.querySelectorAll('input[name="mode"]');

modeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        document.body.className = radio.value; // Rejimni o'zgartirish
    });
});

