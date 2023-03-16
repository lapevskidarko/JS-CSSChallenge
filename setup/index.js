fetch("data.json")
    .then((response) => response.json())
    .then((data) => appendData(data))
    .catch((err) => console.log(err));

function appendData(data){
    let mainContainer = document.getElementById("MyData");
    for(let i=0; i< data.length; i++){

        let div = document.createElement("div");

        let profilePicture = document.createElement("img");
        profilePicture.src = data[i].profile_image;
        profilePicture.setAttribute("class", "profilePicture");
        div.appendChild(profilePicture);

        let name = document.createElement("h3");
        name.innerHTML = data[i].name;
        name.setAttribute("class", "date");
        div.appendChild(name);

        let date = document.createElement("h5");
        date.setAttribute("class","date");
        let months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let current_date = new Date(data[i].dateTime);
        let formated_date =
            current_date.getDate() + " " +

            months[current_date.getMonth()] + " " +

            current_date.getFullYear();
        date.innerHTML = formated_date;

        div.appendChild(date);

        let fbicon = document.createElement("span");
        fbicon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M7.98371 0.0333252C3.57448 0.0333252 0 3.6078 0 8.01704C0 11.9716 2.87829 15.2467 6.65219 15.8809V9.6827H4.72629V7.45218H6.65219V5.80751C6.65219 3.89923 7.81771 2.85932 9.52029 2.85932C10.3357 2.85932 11.0365 2.92009 11.2399 2.94685V4.94151L10.059 4.94209C9.13333 4.94209 8.95486 5.3819 8.95486 6.02751V7.45104H11.1637L10.8756 9.68155H8.95486V15.9342C12.905 15.4535 15.9673 12.095 15.9673 8.01475C15.9673 3.6078 12.3929 0.0333252 7.98371 0.0333252Z" fill="#1778F2"/>
        </svg>`;
        fbicon.setAttribute("class", "fbicon");
        div.appendChild(fbicon);

        let img = document.createElement("img");
        img.src = data[i].image;
        img.setAttribute("class", "img");
        div.appendChild(img);

    }
}
