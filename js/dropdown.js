const dropdownButtons = document.querySelectorAll('.cards button');

for (const button of dropdownButtons) {
  function handleClick() {

    const parent = button.parentElement

    const isActive = parent.classList.contains('active')

    if (isActive) {
      parent.classList.remove('active');

      button.setAttribute('aria-label', 'Abrir caixa de texto')
    } else {
      parent.classList.add('active');

      button.setAttribute('aria-label', 'Fechar caixa de texto')
    }
  }

  button.addEventListener('click', handleClick)
}

