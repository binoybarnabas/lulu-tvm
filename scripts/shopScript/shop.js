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
    // console.log(category);
    const h2 = document.createElement('h2');
    h2.classList.add('category');
    h2.textContent = category;
    h2.addEventListener('click',()=>{
        openCategory(category);
    })
    return h2;
}

const openCategory = (category)=>{
    if(category === 'electronics')
    window.location.href = `shopElectronics.html?path=${category}`;
    else if(category === 'jewelery')
    window.location.href = `shopJewelery.html?path=${category}`;
    else if(category === 'men\'s clothing')
    window.location.href = `shopMenClothing.html?path=${category}`;
    else
    window.location.href = `shopWomenClothing.html?path=${category}`;
}   
