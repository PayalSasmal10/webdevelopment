'use strict'

const inputs = document.querySelectorAll('.controls input');

function updateFunction() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
}
inputs.forEach(input => input.addEventListener('change', updateFunction));
inputs.forEach(input => input.addEventListener('mousemove', updateFunction));
