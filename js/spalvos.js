document.querySelector('title').textContent = 'Spalvos';


const colors = ['yellow', 'red', 'green', 'blue','orange','aqua']
const u1DOM = document.querySelector('.colors');


u1DOM.innerHTML = '';

for (const color of colors) {
u1DOM.innerHTML += `<li style = "background-color: ${color};">Spalva: ${color}</li>`;
}

 
