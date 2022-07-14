function render () {

    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render ();
}

spinnerPage.render ();

let CATALOG = [];


//https://api.jsonserve.com/EOIuo1
fetch ('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear ();
        render ();
    })
    .catch(error => {
        spinnerPage.handleClear ()
        errorPage.render();
    });
