

const loadAllProducts =async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}


 const setAllMenu = async() => {     
    const data = await loadAllProducts();
    const menu = document.getElementById('all-menu');
    const uniqueArray = [];
    for(const product of data) {


            if(uniqueArray.indexOf(product.category)=== -1){
            uniqueArray.push(product.category);
            const li = document.createElement('li');
            li.innerHTML = `<a>${product.category}</a>`;
            menu.appendChild(li);

        }


      }


}

setAllMenu();


 const searchField = document.getElementById('search-field');

 searchField.addEventListener('keypress', async(event) => {

       
  if(event.key === 'Enter'){

    console.log(event.key);
    

  }
 })



