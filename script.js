// api url
const api_url = "https://breakingbadapi.com/api/characters";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    let data = await response.json();
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
    `<div class="row row-cols-1 row-cols-md-3 mt-5 gap-3">` 
    
    // Loop to access all rows 
    for (let r of data) {
            tab +=  `    
        <div class="card mb-3" style="max-width: 340px;">
        <div class="row g-0">
        <div class="col-md-4">
        <img src=${r.img} class="img-fluid rounded" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${r.name}</h5>
        <p class="card-text">${r.occupation}</p>
        </div>
        </div>
        </div>
        </div>
        <br /><br />`;
       
    }
    // Setting innerHTML as tab variable
    document.getElementById("Charecters").innerHTML = tab;
}