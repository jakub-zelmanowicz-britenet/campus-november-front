getProducts()
    .then( products => {

        const productsElement = document.querySelector('#products');
        products.forEach( product => {
            productsElement.innerHTML += `
                <div class="product">
                    <img class="product__img" src="${product.id}.jpeg" alt="Samochód"/>
                    <h3 class="product__title"> ${product.name} </h3>
                    <div class="product__info">
                        <p class="product__price"> Cena ${product.price}PLN </p>
                        <p class="product__buy" role="button"> KUP </p>
                    </div>
                </div>
        `;
        } );

    } )
    .catch( e => {
        console.log(e);
    });

const url = window.location.search;
const params = new URLSearchParams(url);

if (params.has('categoryId')) {
    const categoryId = params.get('categoryId');
    console.log('[DEBUG] ' + categoryId);
}