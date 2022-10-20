import JSConfetti from '/../node_modules/js-confetti/dist/es/index.js';

const jsConfetti = new JSConfetti();

const init = () => {
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    });
  });
}

init();