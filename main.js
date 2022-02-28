"use strict";


//Function to create a new artist. 

function createNewArtist(name, genre, age, country){

    let newArtist = { 
        name: name, 
        genre: genre,
        age: age,
        country: country

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


//Two functions to get artists by using genre and country. This will be used in the
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




