const hours = document.querySelector('.form-timer__hour');

const minutes = document.querySelector('.form-timer__minutes');

const seconds = document.querySelector('.form-timer__seconds');

(function timer() {
    seconds.textContent = 59;
    minutes.textContent = 59;
    hours.textContent = 1

    setInterval(() => {
    seconds.textContent = seconds.textContent - 1;
    if (seconds.textContent === '-1') {
        seconds.textContent = 59;
        minutes.textContent = minutes.textContent - 1;
        if (minutes.textContent === '-1') {
            minutes.textContent = 59;
            hours.textContent = hours.textContent - 1;
            if (hours.textContent === '-1') {
                hours.textContent = 1;
            }
        }
    }
}, 1000);
})()

