const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  const clickedColor = e.target.classList[1];
  const log = ("[" +getElapsedTime()+"]"+" Created a new "+clickedColor+" square");

  // Create a new div element with the class .displayedsquare and set its background color
    const newDisplaySquare = document.createElement('div');
    newDisplaySquare.classList.add('displayedsquare', clickedColor);

  // Add a click event listener to the generated square to show its color in an alert
    newDisplaySquare.addEventListener('click', () => {
      alert(`The color of this square is ${clickedColor}`);
    });

  // Append the new div to the .displayedsquare-wrapper section
    const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper');
    displaySquareWrapper.appendChild(newDisplaySquare);

  // Create a new li element for the log with the timestamp and action text
    const logItem = document.createElement('li');
    logItem.textContent = log;

  // Append the log item to the ul
    const logList = document.querySelector('ul');
    logList.appendChild(logItem);
};

document.body.addEventListener('keypress', (e) => {
  // Check if the pressed key is the spacebar (keyCode 32)
    if (e.keyCode === 32) {
    // Generate a random color and set it as the background color
      const randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;

    // Create a log entry for using the spacebar
      const log = "[" + getElapsedTime() + "] Used the spacebar to change background color";
      const logItem = document.createElement('li');
      logItem.textContent = log;

    // Append the log item to the ul
      const logList = document.querySelector('ul');
      logList.appendChild(logItem);
  }

  // Check if the pressed key is the "l" key 
    if (e.key === "l") {
    // Clear the log by removing all child elements of the ul
      const logList = document.querySelector('ul');
      while (logList.firstChild) {
        logList.removeChild(logList.firstChild);
    }
  }

  // Check if the pressed key is the "s" key 
    if (e.key === "s") {
    // Clear the squares by removing all child elements of the .displayedsquare-wrapper
      const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper');
      while (displaySquareWrapper.firstChild) {
        displaySquareWrapper.removeChild(displaySquareWrapper.firstChild);
    }
  }
});

  // Function to generate a random color in hexadecimal format
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

    const actionSquares = document.querySelectorAll('.actionsquare')
    for (let actionSquare of actionSquares) {
      actionSquare.addEventListener('click', clickOnSquare)
    }


