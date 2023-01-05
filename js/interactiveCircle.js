const circle = document.querySelector('.interactive .circle');

const buttons = document.querySelectorAll('.interactive button');
const [buttonYellow, buttonRed, buttonGray] = buttons;

const texts = document.querySelectorAll('.interactive .circle strong');
const [textYellow, textRed, textGray] = texts;

function handleColorChange(button, color, text) {
  function resetStyles() {
    circle.className = 'circle';

    for (const text of texts) {
      text.classList.remove('active');
    }

    for (const button of buttons) {
      button.classList.remove('active');

      const icon = button.firstElementChild;

      icon.src = 'icones/icon-plus.svg';
    }

    buttonYellow.setAttribute(
      'aria-label',
      'Mudar cor do círculo para amarelo'
    );

    buttonRed.setAttribute('aria-label', 'Mudar cor do círculo para vermelho');

    buttonGray.setAttribute('aria-label', 'Mudar cor do círculo para cinza');
  }

  function addNewStyles() {
    text.classList.add('active');
    button.classList.add('active');

    if (color) circle.classList.add(color);

    const icon = button.firstElementChild;

    icon.src = 'icones/icon-minus.svg';
  }

  resetStyles();
  addNewStyles();

  button.removeAttribute('aria-label');
}

buttonYellow.addEventListener('click', () => {
  handleColorChange(buttonYellow, undefined, textYellow);
});

buttonRed.addEventListener('click', () => {
  handleColorChange(buttonRed, 'red', textRed);
});

buttonGray.addEventListener('click', () => {
  handleColorChange(buttonGray, 'gray', textGray);
});
