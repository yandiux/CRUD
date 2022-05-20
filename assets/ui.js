function printProducts(products) {
    // Identificar el contenedor
    const container = document.getElementById('products-container');
    // Generar el HTML
    let html = '';
    for(let i = 0; i < products.length; i++)  {
        html += `<div class="col-md-6 col-lg-4 mt-3">
<div class="card color-product">
    <div class="card-body ">
        <p class="shopping-card-title ">${products[i].name}</p>
        <p>$ ${products[i].price}</p>
        
        <img src="${products[i].image}" width="350" class="my-4 alt="bike">
        
        <div class="text-end ">
            <button class="btn btn-danger hover" onclick="deleteProduct(${products[i].id})">
                <i class="fas fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary hover" onclick="editProduct(${products[i].id})">
                <i class="fas fa-pen"></i>
            </button>
        </div>
    </div>
</div>
</div>`
    }
    // Imprimir el HTML
    container.innerHTML = html;
}
export { printProducts }