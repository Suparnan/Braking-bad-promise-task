// api url
const api_url = "https://breakingbadapi.com/api/episodes";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log("Here is your data",data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    
    let tab =
    `<div class="row row-cols-1 row-cols-md-3 mt-4 ">` 
    
    // Loop to access all rows 
    for (let r of data) {
            tab +=  `
        <div class="cols-md-4">
        <div class="card border-dark h-100" style="max-width: 300px">
        <div class="card-header">Season :${r.season} Episode: ${r.episode}</div>
        <div class="card-body">
        <h5 class="card-title">${r.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${r.air_date}</h6>
        <p class="card-text">${r.characters}</p>
        </div>
        </div>
        </div>
       `;        
    }
    
    // Setting innerHTML as tab variable
    document.getElementById("Episodes").innerHTML = tab;
}