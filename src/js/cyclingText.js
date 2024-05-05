
// English text options
const textOptionsEnglish = ['+ Researcher', '+ Roboticist', '+ AI Developer'];
const buttonTextDoneEnglish = 'Done! 🔥🤖🔥';
const buttonTextCopyEnglish = 'Copy my Email';

// Spanish text options
const textOptionsSpanish = ['+ Investigador', '+ Robotica', '+ Inteligencia Artificial'];
const buttonTextDoneSpanish = 'Listo! 🔥🤖🔥';
const buttonTextCopySpanish = 'Copia mi Email';

// Determine the current language from the <html> element
const language = document.documentElement.lang;

// Choose the appropriate text options based on the language
const textOptions = (language === 'en') ? textOptionsEnglish : textOptionsSpanish;
const buttonTextDone = (language === 'en') ? buttonTextDoneEnglish : buttonTextDoneSpanish;
const buttonTextCopy = (language === 'en') ? buttonTextCopyEnglish : buttonTextCopySpanish;

let currentIndex = 0;
const cyclingText = document.getElementById("cyclingText");
let letterIndex = 0;
let letterTimeout;

function updateText() {
  // Remove any existing content in the cyclingText div
  cyclingText.innerHTML = "";
  // Create a container div for the text and background
  const container = document.createElement("div");
  container.classList.add("cycling-text-background-container");
  cyclingText.appendChild(container);
  // Create a new h3 element
  const heading = document.createElement("h3");
  container.appendChild(heading);
  // Create a background element
  const background = document.createElement("div");
  background.classList.add("cycling-text-background");
  container.appendChild(background);
  // Reset letterIndex for the new text
  letterIndex = 0;
  // Clear any existing timeout
  clearTimeout(letterTimeout);
  // Function to display one letter at a time
  function displayLetter() {
    if (letterIndex < textOptions[currentIndex].length) {
      heading.textContent += textOptions[currentIndex][letterIndex];
      // Update background width for each line
      const lineHeight = parseFloat(getComputedStyle(heading).lineHeight);
      const lines = Math.ceil((heading.offsetHeight + parseFloat(getComputedStyle(heading).marginTop)) / lineHeight);
      if (lines > 1) {
        // If the text spans multiple lines, set background height to container height
        background.style.height = `${container.offsetHeight}px`;
      } else {
        // If the text is on a single line, set background height to match the heading height
        background.style.height = `${heading.offsetHeight}px`;
      }
      background.style.width = `${container.offsetWidth }px`;
      letterIndex++;
      letterTimeout = setTimeout(displayLetter, 100); // Adjust the delay between letters (in milliseconds)
    } else {
      // Move to the next text option after the current one is fully displayed
      currentIndex = (currentIndex + 1) % textOptions.length;
      setTimeout(updateText, 1500); // Delay before displaying the next text option
    }
  }
  // Start displaying the letters
  displayLetter();
}



updateText();

// Copy Button Fnc
// Get the button element
const copyEmailBtn = document.getElementById('copyEmailBtn');

// Add a click event listener to the button
copyEmailBtn.addEventListener('click', copyEmail);

// Function to copy the email to the clipboard
function copyEmail() {
  const email = 'maximiliano.rojas.lema@gmail.com';

  // Create a temporary textarea element
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = email;

  // Append the textarea to the document body
  document.body.appendChild(tempTextarea);

  // Select the text inside the textarea
  tempTextarea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea from the document body
  document.body.removeChild(tempTextarea);

  // Change the button text to "Done! <3"
  copyEmailBtn.textContent = buttonTextDone;

  // Reset the button text after 3 seconds
  setTimeout(function () {
    copyEmailBtn.textContent = buttonTextCopy;
  }, 4000);
}

