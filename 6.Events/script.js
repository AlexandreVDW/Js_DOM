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

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


