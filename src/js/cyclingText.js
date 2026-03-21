// ── Text options ──
const textOptionsEnglish = ['+ Researcher', '+ Roboticist', '+ AI Developer'];
const textOptionsSpanish = ['+ Investigador', '+ Robotica', '+ Inteligencia Artificial'];

const buttonTextDoneEnglish = 'Done! 🔥🤖🔥';
const buttonTextCopyEnglish = 'Copy my Email';
const buttonTextDoneSpanish = 'Listo! 🔥🤖🔥';
const buttonTextCopySpanish = 'Copia mi Email';

const language = document.documentElement.lang;
const textOptions = (language === 'en') ? textOptionsEnglish : textOptionsSpanish;
const buttonTextDone = (language === 'en') ? buttonTextDoneEnglish : buttonTextDoneSpanish;
const buttonTextCopy = (language === 'en') ? buttonTextCopyEnglish : buttonTextCopySpanish;

const phraseColors = [
  'rgb(127, 236, 255)',
  'rgb(180, 160, 255)',
  'rgb(127, 255, 212)',
];

let currentIndex = 0;
const cyclingText = document.getElementById('cyclingText');
let letterTimeout;

// Reserve outer space
cyclingText.style.minHeight = '3em';

function updateText() {
  cyclingText.innerHTML = '';

  const container = document.createElement('div');
  container.classList.add('cycling-text-background-container');
  // Lock container height so it never shrinks during delete
  container.style.minHeight = '2em';
  cyclingText.appendChild(container);

  const heading = document.createElement('h3');
  heading.setAttribute('data-cursor', '|');
  heading.style.color = phraseColors[currentIndex];
  // Lock heading height so it doesn't collapse when spans are removed
  heading.style.minHeight = '1em';
  container.appendChild(heading);

  clearTimeout(letterTimeout);

  let letterIndex = 0;
  const currentText = textOptions[currentIndex];

  // ── Type ──
  function typeLetter() {
    if (letterIndex < currentText.length) {
      const span = document.createElement('span');
      span.textContent = currentText[letterIndex];
      span.style.opacity = '0';
      span.style.transition = 'opacity 0.15s ease';
      heading.appendChild(span);
      requestAnimationFrame(() => requestAnimationFrame(() => span.style.opacity = '1'));
      letterIndex++;
      letterTimeout = setTimeout(typeLetter, 100);
    } else {
      heading.removeAttribute('data-cursor');
      letterTimeout = setTimeout(deleteLetter, 1500);
    }
  }

  // ── Delete ──
  function deleteLetter() {
    const spans = heading.querySelectorAll('span');
    if (spans.length > 0) {
      const last = spans[spans.length - 1];
      last.style.opacity = '0';
      setTimeout(() => last.remove(), 150);
      letterTimeout = setTimeout(deleteLetter, 60);
    } else {
      currentIndex = (currentIndex + 1) % textOptions.length;
      letterTimeout = setTimeout(updateText, 300);
    }
  }

  typeLetter();
}

updateText();

// ── Copy Email Button ──
const copyEmailBtn = document.getElementById('copyEmailBtn');
copyEmailBtn.addEventListener('click', copyEmail);

function copyEmail() {
  const email = 'magicalengineeringlab@gmail.com';

  if (navigator.clipboard) {
    navigator.clipboard.writeText(email);
  } else {
    const tmp = document.createElement('textarea');
    tmp.value = email;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
  }

  copyEmailBtn.textContent = buttonTextDone;
  setTimeout(() => copyEmailBtn.textContent = buttonTextCopy, 4000);
}
