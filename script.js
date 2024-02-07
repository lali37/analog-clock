function updateClock() {
    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();
  
    const secondDegree = ((second / 60) * 360) + 90; // +90 to offset the default 90 degree from CSS
    const minuteDegree = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
  
    document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
    document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initialize the clock position
  updateClock();
  
  
  