const socket = io.connect();

const form = document.getElementById(formProducts);
const nameProduct = document.getElementById(title);

form.addEventListener('submit', (ev)=>{
    ev.preventDefault();
    console.log('se hizo click en el submit');

})
console.log('Holaaaa');