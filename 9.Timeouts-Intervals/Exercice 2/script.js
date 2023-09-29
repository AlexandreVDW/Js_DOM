function updateTimeSincePageOpened() {
    const timeDisplay = document.getElementById("timeDisplay");
    let secondsPassed = 0;

    setInterval(function () {
      secondsPassed++;

      if (secondsPassed === 60) {
        timeDisplay.textContent = "1 minute has passed";
      } else if (secondsPassed > 60) {
        const minutes = Math.floor(secondsPassed / 60);
        timeDisplay.textContent = minutes + " minutes have passed";
      } else {
        timeDisplay.textContent = secondsPassed + " seconds have passed";
      }
    }, 1000); // Update every second (1000 milliseconds).
  }

  // Call the function to start updating the time display.
  updateTimeSincePageOpened();