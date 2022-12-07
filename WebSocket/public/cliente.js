function formulario(){
    const socket = io.connect();
    let form = document.getElementById('formProducts');
    let nameProduct = document.getElementById('nameProduct');
    let price = document.getElementById('price');
    

    
    form.addEventListener('submit', (ev) =>{
        ev.preventDefault()
        const cartForServer = {
            nameProduct : nameProduct.value,
            price : price.value
        } 
        console.log(cartForServer);
        socket.emit('cartOfServer',cartForServer);
        nameProduct.value = '';
        price.value = '';

    });

    
    socket.on('informacion', (data) =>{
        console.log(`Guardando productos de cliente ${JSON.stringify(data)}`);
        addNewProduct(data);
    });

   
//Funcion para mostrar a los clientes conectados los productos guardados
function addNewProduct(data){
    console.log(`Add new product and display to clients the products news`);
    alert(`Usuario acaba de agregar un producto a la lista ${JSON.stringify(data)}`);
}

}
window.onload = formulario;

