import './style.css';
import {
  InviewTimer
} from './inview-timer';

const targets = document.querySelectorAll('.target');
for (const target of targets) {
  target.addEventListener('timer timedout', (event) => {
    const color = (Math.random() * 0xFFFFFF | 0).toString(16);
    const randomColor = '#' + ('000000' + color).slice(-6);
    target.style.backgroundColor = randomColor;
  });
}
const inviewTimer = new InviewTimer({
  debug: true,
  observeTargets: targets,
  inviewTargetOptions: {
    timeout: 5000,
    timerLoop: true,
  },
  intersectionObserverOptions: {
    threshold: 0.5
  }
});

inviewTimer.observe();