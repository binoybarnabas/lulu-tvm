let url = 'https://fakestoreapi.com/products/categories'
const getData = async ()=>{
    const response = await fetch(url);
    const data = await response.json(); 
    data.map((category)=>{
        const shopList = document.querySelector('.shop-list');
        const categoryShow = createCategory(category);
        shopList.appendChild(categoryShow);
    })
}
getData(url);

const createCategory = (category) => {
    const h2 = document.createElement('h2');
    h2.classList.add('category');
    h2.textContent = category;
    h2.addEventListener('click',()=>{
        openCategory(category);
    })
    return h2;
}

const openCategory = ()=>{
    window.location.href = ``;
}