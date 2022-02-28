"use strict";


//Function to create a new artist. 

function createNewArtist(name, genre, age, country){

    let newArtist = { 
        name: name, 
        genre: genre,
        age: age,
        country: country,

    }

    return newArtist;
}


//Function to add it to the database of other artists

function addArtistToDatabase(database, artist){
    database.push(artist);
}


//Function to remove an artist by ID from the database. 

function removeArtistById(artists, id){
    
    for(let i = 0; i < artists.length; i++){
        let artist = artists[i]
    

        if(artist.id == id){
            artist.splice(i,1);

        }
    
    }
}


//Two functions to get artists by using genre and country. Theese will be used in the
// filtering process later on in the code. 

function getArtistByGenre(artists, genre){

    let artistByGenre = [];

    for(let artist of artists){
        if(artist.genre.toLowerCase() == genre.toLowerCase()){
        artistByGenre.push(artist);
        }
    }

    return artistByGenre;

}


function getArtistByCountry(artists, country){
    
   let artistByCountry = [];

        for(let artist of artists){
            if(artist.country.toLowerCase() == country.toLowerCase()){
            artistByCountry.push(artist);
        }

    }

        return artistByCountry;
}



//Function to make a new div in HTML for the artist created by createNewArtist - function. 
function makeArtist(artist){
    let div = document.createElement("div");
    div.classList.add("artist");
    div.id = artist.id;
    div.innerHTML = `
    <div>${artist.name}</div>
    <div>${artist.genre}</div>
    <div>${artist.age}</div>
    <div>${artist.country}</div>
    <button type = "button">Remove</div>
    `;

    return div;
}


//Funciton to make the array of artists into HTML
function makeArtists(artists){
    let artistsId = document.getElementById("artists");
    artistsId.innerHTML = "";
    
    for(let artist of artists){
        let artistId = makeArtist(artist);
        artistsId.appendChild(artistId);
    }

    clickRemoveArtist();
}


//Button functions 

//Function for createNewArtist here the alert is also going to be 
function clickAddNewArtist(){}

//Function for clicking the remove-buttons here the confirm function will also be added 
function clickRemoveArtist(){}


//function for the filter buttons
function clickShowAllAndFilter(){}





//Functions that are going to work together with the buttonClicks

//The submitting of all the information about the new created artist. Going to work with clickNewArtist()
function submitArtistInfo(){}


//Function for on the show all button that is going to run in the clickShowAllAndFilter
function onShowAll(){}


//On the filter based on genre that is going to run in the clickShowAllAndFilter

function onFilterByGenre(){}


//On the filter based on country that is going to run in the clickShowAllAndFilter
function onFilterByCountry(){}



//The direct code that is called all the time 
