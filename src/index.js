import './sass/main.scss';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.selector = selector;
    };

    timer() {
        setInterval(() => {
            const time = Date.now();
            const days = Math.floor((this.targetDate.getTime()-time) / (1000 * 60 * 60 * 24));
            const hours = Math.floor(((this.targetDate.getTime()-time) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor(((this.targetDate.getTime()-time) % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor(((this.targetDate.getTime()-time) % (1000 * 60)) / 1000);

            refs.days.textContent = `${days}`;
            refs.hours.textContent = `${hours}`;
            refs.mins.textContent = `${mins}`;
            refs.secs.textContent = `${secs}`;

        }, 1000);
    }

};

const deadline = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

deadline.timer()