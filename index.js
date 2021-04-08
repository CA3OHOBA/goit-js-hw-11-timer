class CountdownTimer {
    constructor(selector, targetDate){
    this.selector = document.querySelector(`${selector}`);
    this.targetDate = targetDate;
  }

  createTimer() {
    const nowDate = new Date(this.targetDate).getTime();

    function pad(value){
  return String(value).padStart(2, '0');
}
  let intervalId = setInterval(()=>{
  const date = Date.now();
  let deltaTime = nowDate - date
  if (deltaTime < 0){
    deltaTime = 0
    clearInterval(intervalId)
  }
  this.selector.querySelector('[data-value="days"]').textContent = pad(Math.floor((deltaTime / (1000 * 60 * 60 * 24))));
  this.selector.querySelector('[data-value="hours"]').textContent = pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  this.selector.querySelector('[data-value="mins"]').textContent =  pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
  this.selector.querySelector('[data-value="secs"]').textContent = pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
}, 1000)
    }
    }
const timer1 = new CountdownTimer('#timer-1', 'Jul 14 , 2021')
timer1.createTimer()

const timer2 = new CountdownTimer('#timer-2', 'April 8, 2021')
timer2.createTimer()
