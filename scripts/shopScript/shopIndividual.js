let url = 'https://fakestoreapi.com/products/'
const urlParam = new URLSearchParams(window.location.search);
const id = Number(urlParam.get('id'));
const category = urlParam.get('category');
// console.log(id);
// console.log(category);


const dataProcess = async (url,id)=>{
    try{
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //console.log(typeof(data[0].id));
    const newData = data.filter((productData)=>{
        if(productData.id == id){
               return productData;   
        }
    }
    );
    const shopIndividualSection = document.querySelector('.shop-individual');
    const shopItem = createShopCard(newData[0]);
    shopIndividualSection.appendChild(shopItem);

    }
    catch(e){
        console.log(e);
    }
}

dataProcess(url,id);

const createShopCard = (item) =>{
    const card = document.createElement('div');
    card.classList.add('card');
    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    const image = document.createElement('img');
    image.src = item.image;
    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');
    const titleh2 = document.createElement('h2');
    titleh2.textContent = item.title;
    const rating = document.createElement('span');
    rating.textContent = "Rating : "+ item.rating.rate + " (" +item.rating.count
    + ")";
    const pricep = document.createElement('p');
    pricep.textContent = "$"+ item.price;
    const categoryh4 = document.createElement('h4');
    categoryh4.textContent = item.category;
    const description = document.createElement('p');
    description.textContent = item.description;

    card.appendChild(productImage);
    productImage.appendChild(image);
    productDetails.appendChild(titleh2);
    productDetails.appendChild(rating);
    productDetails.appendChild(pricep);
    productDetails.appendChild(categoryh4);
    productDetails.appendChild(description);
    card.appendChild(productDetails);

    return card;
}