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

let option = reciveValue('option');

const phoneClass = document.getElementsByClassName("phone");
const tabletClass = document.getElementsByClassName("tablet");
const laptopClass = document.getElementsByClassName("laptop");

if(option == 'phone') {    
    for(let tablet of tabletClass)
        tablet.classList.add('d-none');
    for(let laptop of laptopClass)
        laptop.classList.add('d-none');
}
else if(option == 'tablet')
{
    for(let phone of phoneClass)
        phone.classList.add('d-none');
    for(let laptop of laptopClass)
        laptop.classList.add('d-none');
}
else
{
    for(let phone of phoneClass)
        phone.classList.add('d-none');
    for(let tablet of tabletClass)
        tablet.classList.add('d-none');
}