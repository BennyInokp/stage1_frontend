document.addEventListener('DOMContentLoaded', (event) => {
    function updateTime() {
      const currentTime = new Date().toUTCString();
      document.getElementById('currentTime').textContent = currentTime;
    }
  
    function updateDay() {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDay = days[new Date().getUTCDay()];
      document.getElementById('currentDay').textContent = currentDay;
    }
  
    updateTime();
    updateDay();
    
    setInterval(updateTime, 1000);
  });
  