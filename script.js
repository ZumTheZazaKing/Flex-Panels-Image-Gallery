const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', widen));

function widen(){

    this.classList.toggle('open-wide');

}