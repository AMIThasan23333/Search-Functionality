

const loadAllProducts =async () => {

    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;

}


const setAllMenu = async() => {

    const data = await loadAllProducts();

    console.log(data);


}

setAllMenu();


