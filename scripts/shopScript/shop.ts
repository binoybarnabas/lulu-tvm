const url: string = 'https://fakestoreapi.com/products/categories';

const getData  = async (): Promise<void> => {
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
console.log(document.cookie);
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

const sessionUser:string | null = localStorage.getItem('userCache');

if(sessionUser == null){
  console.log("inside userCache");
  const dropdownContainer = document.getElementById("dropdownContainer") as HTMLDivElement;
  dropdownContainer.style.display = 'none';
  
}
else{
const dropdownToggle = document.getElementById("dropdownToggle") as HTMLDivElement;
dropdownToggle.style.display = 'block';
dropdownToggle.textContent = sessionUser;
console.log(sessionUser);
}

document.addEventListener("DOMContentLoaded", () => {
  const dropdownContainer = document.getElementById("dropdownContainer") as HTMLDivElement;
  const dropdownToggle = document.getElementById("dropdownToggle") as HTMLSpanElement;
  let dropdownMenu: HTMLDivElement | null = null; // Track the dropdown menu

  // Create a function to handle the click event
  function handleDropdownClick() {
    // If the dropdown menu exists, remove it and return
    if (dropdownMenu) {
      dropdownContainer.removeChild(dropdownMenu);
      dropdownMenu = null;
      return;
    }

    // Create the dropdown menu 
    dropdownMenu = document.createElement("div");
    dropdownMenu.classList.add("dropdown-menu", "show");

    // Create the logout option
    const logoutOption = document.createElement("a");
    logoutOption.classList.add("dropdown-item");
    logoutOption.href = "#";
    logoutOption.textContent = "Logout";
    logoutOption.addEventListener("click", () => {
      // Handle the logout logic here
      // alert("Logout clicked!");
      $('#logoutConfirmationModal').modal('show');
    });

    // Add click event listener to confirm logout button in the modal
    document.getElementById('confirmLogoutBtn')?.addEventListener('click', function () {
      // Handle the logout logic here
      // Redirect to home.html
      // Replace "yourCookieName" with the actual name of your cookie
      document.cookie = "sessionUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem('userCache');
      console.log("cookie removed : " + document.cookie);
      window.location.href = '../../pages/shopPage/shopPageLogin.html';
    });
    // Append the logout option to the dropdown menu
    dropdownMenu.appendChild(logoutOption);

    // Append the dropdown menu to the container
    dropdownContainer.appendChild(dropdownMenu);
  }

  // Add the click event listener to the container
  dropdownToggle.addEventListener("click", handleDropdownClick);
});
