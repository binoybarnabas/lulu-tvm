const url = 'https://dummyjson.com/users';

    const getData = async(url)=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            data.users.map((userData)=>{
                showData = document.querySelector('.display');
                const serviceData = createServiceData(userData);
                showData.appendChild(serviceData);
            })
        }
        catch(e){
            console.log(e)
        }
        
    }

    getData(url);

    const createServiceData = (userData)=>{

    // const serviceItem = document.createElement('div');
    // serviceItem.classList.add("item");
    const serviceCards = document.createElement('div');
    serviceCards.classList.add("card");
    const serviceImg = document.createElement('img');
    const serviceDesc = document.createElement('div');
    serviceDesc.classList.add("desc");
    const icon1 = document.createElement('div');
    icon1.classList.add("icon");
    const phoneIcon = document.createElement('img');
    phoneIcon.classList.add("phone-icon");
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    
    serviceImg.src= userData.image;
    h1.textContent = userData.domain;
    h2.textContent = userData.birthDate;
    p.textContent = "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum"
    phoneIcon.src="../../assets/serviceAssets/img/phone.png";

    icon1.appendChild(phoneIcon);
    icon1.appendChild(h2);
    serviceDesc.appendChild(h1);
    serviceDesc.appendChild(icon1);
    serviceDesc.appendChild(p);
    serviceCards.appendChild(serviceImg);
    serviceCards.appendChild(serviceDesc);
    // serviceItem.appendChild(serviceCards);
  

    // serviceCards.addEventListener('click',()=>{
    // openNewPage(userData);
    // console.log("hello event");
    // })
    return serviceCards;

    }

    // const openNewPage = (userData)=>{
    //     window.location.href = `offersInner.html?id=${userData.id}`
    // }