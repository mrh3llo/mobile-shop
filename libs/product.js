function reciveValue(value) {
    /*
    Here the value is what in the url we named at the funtion above.
    For example <<"product.html?option=" + option;>>
    - we have 2 "option" in the url:
        + The first is the name of the variable we named in the url to recive.
        + The second is the variable in that function.
    This function we add the 
    */

    const urlValue = new URLSearchParams(window.location.search);
    return urlValue.get(value);
}

console.log(reciveValue('option'));

function isDisplay(display) {
    if(display == false)
        return 'd-none';
    else
        return '';
}

/*
///////////////////////////////////////////////////////////////
///////////////     GET DATA FROM JSON FILE     ///////////////
///////////////////////////////////////////////////////////////
*/

xhttp = new XMLHttpRequest();
let productObjList;
let productQuantity = 0;

xhttp.onreadystatechange = function() {
    console.log('readyState: ' + this.readyState);
    
    //4 and 200 is the status set by XMLHttpRequest.
    if(this.readyState == 4 && this.status == 200) {
        //Change responseText to Object
        productObjList = JSON.parse(this.responseText); 
        displayProduct(productObjList);
    }
}

xhttp.open('GET', '../json/product.json', true);
xhttp.send();

function displayProduct(productObjList) {
    let displayProduct = '';
    let display = true;

    productObjList.forEach(productObj => {
        console.log('Product: ' + productObj.name);

        //Check the option in the url to display a product card
        if(reciveValue('option') == null)
            display = true;
        else if(productObj.type != reciveValue('option'))
            display = false;
        else
            display = true;

        //Get data form product.json then display
        displayProduct += `
        <a class="product-link" href="${productObj.link}">
            <div class="${productObj.type} ${isDisplay(display)} product-card card m-2 p-0 zoom-out-anm">
                <div class="card-header d-flex justify-content-center">
                    <img class="card-img-top" src="${productObj.img}" alt="${productObj.name}">
                    <div class="detail w-50">
                        <div class="d-flex">
                            <img class="icon" src="../media/icon/cpu.png" alt="CPU icon">
                            <h6>${productObj.cpu}</h6>
                        </div>
                        <div class="d-flex">
                            <img class="icon" src="../media/icon/ram.png" alt="RAM icon">
                            <h6>${productObj.ram}</h6>
                        </div>
                        <div class="d-flex">
                            <img class="icon" src="../media/icon/rom.png" alt="ROM icon">
                            <h6>${productObj.rom}</h6>
                        </div>
                        <div class="d-flex">
                            <img class="icon" src="../media/icon/phone-mornitor.png" alt="Mornitor icon">
                            <h6>${productObj.display} inches</h6>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${productObj.name}</h5>
                    <h5 class="card-title text-center text-danger">${productObj.price}</h5>
                    <p class="card-text">${productObj.description}</p>
                </div>
                <div class="card-footer">
                    <button class="btn">Order Now</button>
                </div>
            </div>
        </a>`;
    });

    document.getElementById('product').innerHTML = displayProduct;
};