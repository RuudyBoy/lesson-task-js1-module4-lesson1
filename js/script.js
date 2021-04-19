const url = "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/nbateams";
const container = document.querySelector(".results");


async function nba () {

    try {

    const response = await fetch(url);
    const json = await response.json();

    const teams = json.data;

    container.innerHTML="";

    for (let i = 0; i < teams.length; i++) {

        if (i === 15) {
            break;
        }
        
    

    const teamName = teams[i].full_name;
    const city = teams[i].city;

    if (teamName.startsWith("c") || teamName.startsWith("C")) {
        continue;
    }


    container.innerHTML += `<div class ="card">
     <h4> ${teamName} </h4> 
     <p>${city}</p> 
     <div>`;
    
    } 
    }  

 catch (error) {
        console.log(error);
        container.innerHTML = message("error", error);
    }

}

nba();