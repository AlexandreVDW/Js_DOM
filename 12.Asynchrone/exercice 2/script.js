document.addEventListener("DOMContentLoaded", () => {
    const fetchButton = document.getElementById("fetchButton");
    const textNameInput = document.getElementById("TextName");
    const resultDiv = document.getElementById("result");
  
    fetchButton.addEventListener("click", () => {
      const name = textNameInput.value;
  
      // Check if the name input is not empty
      if (name.trim() !== "") {
        fetchName(name)
          .then((json) => {
            // Create a new div to display the result
            const resultElement = document.createElement("div");
            resultElement.textContent = `Name: ${name}, Age: ${json.age}, Count: ${json.count}`;
  
            // Append the result to the resultDiv
            resultDiv.appendChild(resultElement);
          })
          .catch((error) => {
            console.log("There was an error!", error);
          });
      } else {
        console.log("Please enter a name.");
      }
    });
  
    const fetchName = (name) => fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      });
  });
  