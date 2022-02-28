"use strict";


//Function to create a new artist. 

function createNewArtist(name, genre, age, country){

    let Nartist = { 
        name: name, 
        genre: genre,
        age: age,
        country: country

    }

    return Nartist;
}


//Function to add it to the database of other artists

function addArtistToDatabase(database, artist){
    database.push(artist);
}


