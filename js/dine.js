const apiURL = fetch("https://www.thiruvananthapuram.lulumall.in/wp-json/wp/v2/");

apiURL
    .then(response => {
        if (response.ok) {
            console.log(response.json());
        }
        // else {
        //     throw new Error("Failed to fetch data from API");
        // }
    })
    .catch(error => console.log(error.message) );