## Everytime the user clicks on one of the action squares 

### Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
```
const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
};

const clickOnSquare = (e) => {
  const clickedColor = e.target.classList[1];
  console.log(clickedColor);
  console.log(getElapsedTime());

  // Create a new div element with the class .displayedsquare and set its background color
  const newDisplaySquare = document.createElement('div');
  newDisplaySquare.classList.add('displayedsquare');
  newDisplaySquare.style.backgroundColor = clickedColor;

  // Append the new div to the .displayedsquare-wrapper section
  const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper');
  displaySquareWrapper.appendChild(newDisplaySquare);
};

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}

```
### Create a new <li> in the log below to state when the action was done 
```
// Create a new li element for the log with the timestamp and action text
  const logItem = document.createElement('li');
  logItem.textContent = `[${elapsedTime}] ${logText}`;

  // Append the log item to the ul
  const logList = document.querySelector('.action-log ul');
  logList.appendChild(logItem);
```

## Add an event listener on the document <body>, listening for the keypress event. (hint: have a look at this) 

### When the spacebar is hit randomly change the background color of the whole page
```
document.body.addEventListener('keypress', (e) => {
  // Check if the pressed key is the spacebar (keyCode 32)
  if (e.keyCode === 32) {
    // Generate a random color and set it as the background color
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
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
```
### Log when the spacebar is used the same way you used for the generated squares.
```
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
```
### When the l key is pressed the log gets deleted (erases the generated <li>s). Mind you: using a delete in a for loop might cause issues (as the amount of items to loop over changes), so a while loop might be a good choice instead.
```
// Check if the pressed key is the "l" key 
  if (e.key === "l") {
    // Clear the log by removing all child elements of the ul
    const logList = document.querySelector('ul');
    while (logList.firstChild) {
      logList.removeChild(logList.firstChild);
    }
  }
```

### When the s key is pressed the squares get deleted (erases the generated squares)
```
// Check if the pressed key is the "s" key 
  if (e.key === "s") {
    // Clear the squares by removing all child elements of the .displayedsquare-wrapper
    const displaySquareWrapper = document.querySelector('.displayedsquare-wrapper');
    while (displaySquareWrapper.firstChild) {
      displaySquareWrapper.removeChild(displaySquareWrapper.firstChild);
    }
  }
```
### Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
```
// Add a click event listener to the generated square to show its color in an alert
    newDisplaySquare.addEventListener('click', () => {
      alert(`The color of this square is ${clickedColor}`);
    });
```