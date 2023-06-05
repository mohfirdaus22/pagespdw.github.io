
    // Function to get current date and time 
    function getCurrentDateTime() { 
        var currentDateTime = new Date(); 
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false }; 
        return currentDateTime.toLocaleDateString('en-US', options); 
      } 
   
      // Function to greet based on current time 
      function getGreeting() { 
        var currentHour = new Date().getHours(); 
        if (currentHour < 12) { 
          return 'Good morning!'; 
        } else if (currentHour < 18) { 
          return 'Good afternoon!'; 
        } else { 
          return 'Good evening!'; 
        } 
      } 
   
      // Update greeting and datetime elements 
      document.getElementById('greeting').innerText = getGreeting(); 
      document.getElementById('datetime').innerText = getCurrentDateTime(); 
  