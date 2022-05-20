import { getProducts,createProduct, editProduct, deleteProduct, updateProduct} from './crud.js'


getProducts();
window.createProduct = createProduct;
window.deleteProduct = deleteProduct;
window.editProduct = editProduct;
window.updateProduct = updateProduct

// Crear la tarea con datos de un formulario
// Después de crear una tarea actualizar el listado de tareas sin recargar la página