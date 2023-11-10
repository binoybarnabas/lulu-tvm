const url = 'https://dummyjson.com/users';

    const getData = async(url)=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            data.users.map((userData)=>{
                showData = document.querySelector('.display');
                const eventData = createEventData(userData);
                showData.appendChild(eventData);
            })
        }
        catch(e){
            console.log(e)
        }
        
    }

    getData(url);

    const createEventData = (userData)=>{

    const eventCards = document.createElement('div');
    eventCards.classList.add("item");
    const eventImage = document.createElement('div');
    eventImage.classList.add("image");
    const eventDesc = document.createElement('div');
    eventDesc.classList.add("event-desc");
    const icon1 = document.createElement('div');
    icon1.classList.add("icon");
    const calenderIcon = document.createElement('div');
    calenderIcon.classList.add("calender-icon");
    const calender = document.createElement('img');
    const icon2 = document.createElement('div');
    icon2.classList.add("icon");   
    const mapIcon = document.createElement('div');
    mapIcon.classList.add("map-icon");
    const map = document.createElement('img');
    const h2 = document.createElement('h1');
    const h3 = document.createElement('h1');
    const eventImg = document.createElement('img');
    
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const button = document.createElement('button');
    
    calender.src="../../assets/eventAssets/img/calender.png";
    map.src="../../assets/eventAssets/img/map.png";
    eventImg.src= userData.image;
    h1.textContent = userData.domain;
    p.textContent = userData.birthDate;
    h2.textContent = userData.domain;
    h3.textContent = userData.birthDate;
    button.textContent="SHOW MORE";

    eventImage.appendChild(eventImg);
    eventDesc.appendChild(h1);
    calenderIcon.appendChild(calender);
    icon1.appendChild(calenderIcon);
    icon1.appendChild(h2);
    mapIcon.appendChild(map);
    icon2.appendChild(mapIcon);
    icon2.appendChild(h3);
    eventDesc.appendChild(icon1);
    eventDesc.appendChild(icon2);
    eventDesc.appendChild(p); 
    eventDesc.appendChild(button);
    eventCards.appendChild(eventImage);
    eventCards.appendChild(eventDesc);
    

    button.addEventListener('click',()=>{
    openNewPage(userData);
    console.log("hello event");
    })
    return eventCards;

    }

    const openNewPage = (userData)=>{
        window.location.href = `eventInner.html?id=${userData.id}`
    }