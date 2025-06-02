function categorize(option) {
    window.location.href = 'product.html?option=' + option;
}

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

let option = toString(reciveValue('option'));

if(option == 'phone') {
    console.log('Option: Phone');
    
}