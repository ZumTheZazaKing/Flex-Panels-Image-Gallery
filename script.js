const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('mouseover', widen));

panels.forEach(panel => panel.addEventListener('mouseout', unwiden));

function widen(){

    this.classList.add('open-wide');

}

function unwiden(){

    this.classList.remove('open-wide');

}