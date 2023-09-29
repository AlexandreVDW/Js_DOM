# Exercise 1

## Write a function that mimics the behaviour of a typewriter.

## Using setInterval display the word Keller one character at a time (one letter per second). Once the word is written on the screen clear the interval.

```
function typewriterEffect() {
    const word = "Keller";
    let index = 0;
    const outputElement = document.getElementById("output");
    const typewriterAudio = document.getElementById("typewriterAudio");

    const intervalId = setInterval(function () {
      if (index < word.length) {
        const char = word.charAt(index);
        outputElement.textContent += char;
        typewriterAudio.play();
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  typewriterEffect();
```

# Exercise 2

## Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

```
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
```

# Exercise 3 - Whack-A-Mole (bonus)

## Let's create a simple Whack-A-Mole clone.

### The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. Everytime you click on a mole, your score increases.