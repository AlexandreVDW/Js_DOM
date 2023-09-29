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


  

  