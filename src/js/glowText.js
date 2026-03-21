function applyGlowEffect(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  const nodes = Array.from(el.childNodes);
  el.innerHTML = '';

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.trim().split(/\s+/);
      words.forEach((word) => {
        if (!word) return;
        const wordSpan = document.createElement('span');
        wordSpan.style.whiteSpace = 'nowrap';
        wordSpan.style.display = 'inline-block';
        word.split('').forEach((char) => {
          const span = document.createElement('span');
          span.classList.add('glow-letter');
          span.textContent = char;
          wordSpan.appendChild(span);
        });
        el.appendChild(wordSpan);
      });
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.style.whiteSpace = 'nowrap';
      node.style.display = 'inline-block';
      const inner = node.textContent.split('').map((char) =>
        `<span class="glow-letter" style="font-family:inherit;font-style:inherit;">${char}</span>`
      ).join('');
      node.innerHTML = inner;
      el.appendChild(node);
    }
  });

  el.querySelectorAll('.glow-letter').forEach((span, i) => {
    span.style.animationDelay = `${i * 0.08}s`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyGlowEffect('.glow-headline h2');  // ← change selector to match your element
});
