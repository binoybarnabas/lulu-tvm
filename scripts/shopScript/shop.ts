const url: string = 'https://fakestoreapi.com/products/categories';

const getData = async (): Promise<void> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data: string[] = await response.json();
    
    // Assuming .shop-list exists in your HTML
    // console.log(data);    

    data.forEach((category) => {
        const shopList = document.querySelector('.shop-list') as HTMLElement;
      const categoryShow = createCategory(category);
      shopList.appendChild(categoryShow);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors as needed
  }
};

getData();

const createCategory = (category: string): HTMLHeadingElement => {
  const h2 = document.createElement('h2');
  h2.classList.add('category','pop-out');
  h2.textContent = category;
  h2.addEventListener('click', () => {
    openCategory(category);
  });
  return h2;
};



const openCategory = (category:string)=>{
    if(category === 'electronics')
    window.location.href = `shopElectronics.html?path=${category}`;
    else if(category === 'jewelery')
    window.location.href = `shopJewelery.html?path=${category}`;
    else if(category === 'men\'s clothing')
    window.location.href = `shopMenClothing.html?path=${category}`;
    else
    window.location.href = `shopWomenClothing.html?path=${category}`;
}  
