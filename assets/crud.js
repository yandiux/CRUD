import { printProducts } from "./ui.js";

const baseURL='https://e-commerce-api-academlo.herokuapp.com/api'
let editingID = null;

function getProducts() {
    axios.get('https://e-commerce-api-academlo.herokuapp.com/api/products')
        .then(function (response) {
            const products = response.data;
            printProducts(products);
        })
        .catch(function (error) {
            console.log(error);
        })
}

function createProduct() {
    const newProduct = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image-url').value
    }

    axios.post('https://e-commerce-api-academlo.herokuapp.com/api/products', newProduct)
        .then(function (response) {
            alert('Se creo el producto correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo crear el producto');
            console.log(error);
        })
}

function deleteProduct(id) {
    const confirmation = confirm('¿Estás seguro de eliminar la tarea?');
    if(!confirmation){
        return
    }
    
    axios.delete(`${baseURL}/products/${id}`)
        .then(function () {
            alert('La tarea se eliminó correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo eliminar la tarea');
        })
}

function editProduct(id) {
    axios.get(`${baseURL}/products/${id}`)
        .then(function (response) {
            editingID = id;
            const product =  response.data;
            document.getElementById('name').value = product.name;
            document.getElementById('price').value = product.price;
            document.getElementById('image-url').value = product.image;
        })
        .catch(function (error) {
            alert('No se pudo cargar la tarea');
        })
}

function updateProduct() {
    const productEdited = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        image: document.getElementById('image-url').value
    }

    axios.put(`${baseURL}/products/${editingID}`, productEdited)
        .then(function (response) {
            alert('Se editó la tarea correctamente');
            getProducts();
        })
        .catch(function (error) {
            alert('No se pudo editar la tarea');
        })
}

export { getProducts, createProduct, deleteProduct, editProduct, updateProduct}