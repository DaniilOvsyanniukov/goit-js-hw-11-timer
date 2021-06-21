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

    pad(value) {
    return String(value).padStart(2, '0');
}

    timer() {
        setInterval(() => {
            const time = this.timeCalc(Date.now());

            refs.days.textContent = `${time.days}`;
            refs.hours.textContent = `${time.hours}`;
            refs.mins.textContent = `${time.mins}`;
            refs.secs.textContent = `${time.secs}`;

        }, 1000);
    }

    timeCalc(time) {
        const days = this.pad(Math.floor((this.targetDate.getTime()-time) / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor(((this.targetDate.getTime()-time) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor(((this.targetDate.getTime()-time) % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor(((this.targetDate.getTime() - time) % (1000 * 60)) / 1000));
        
        return { days, hours, mins, secs };
        
    }

};

const deadline = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

deadline.timer()