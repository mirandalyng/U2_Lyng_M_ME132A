"use strict";

//Repository-link
// https://github.com/mirandalyng/U2_Lyng_M_ME132A

//Function to create a new artist.

function createNewArtist(name, genre, age, country) {
  let newArtist = {
    name: name,
    genre: genre,
    age: age,
    country: country,
  };

  return newArtist;
}

//Function to add artist to the database of other artists

function addArtistToDatabase(database, artist) {
  database.push(artist);
}

//Function to remove an artist by ID from the database.

function removeArtistById(artists, id) {
  for (let i = 0; i < artists.length; i++) {
    let artist = artists[i];

    if (artist.id == id) {
      artists.splice(i, 1);

      return;
    }
  }
}

//Two functions to get artists by using genre and country. Theese will be used in the
// filtering process later on in the code.

function getArtistByGenre(artists, genre) {
  let artistByGenre = [];

  for (let artist of artists) {
    if (artist.genre.toLowerCase() == genre.toLowerCase()) {
      artistByGenre.push(artist);
    }
  }

  return artistByGenre;
}

function getArtistByCountry(artists, country) {
  let artistByCountry = [];

  for (let artist of artists) {
    if (artist.country.toLowerCase() == country.toLowerCase()) {
      artistByCountry.push(artist);
    }
  }

  return artistByCountry;
}

//Function to make a new div in HTML for the artist created by createNewArtist - function.
function makeArtist(artist) {
  let div = document.createElement("div");
  div.classList.add("artist");
  div.id = artist.id;

  div.innerHTML = `
    <li>${artist.name}</li>
    <div>${artist.genre}</div>
    <div>${artist.age}</div>
    <div>${artist.country}</div>
    <button type = "button">Remove</div>
    `;

  return div;
}

//Funciton to make the array of artists into HTML
function makeArtists(artists) {
  let artistsId = document.getElementById("artists");
  artistsId.innerHTML = "";

  for (let artist of artists) {
    let artistId = makeArtist(artist);
    artistsId.appendChild(artistId);
  }

  clickRemoveArtist();
}

//Functions that are going to work together with the buttonClicks

//The submitting of all the information about the new created artist. Going to work with clickNewArtist()
function submitArtistInfo(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let genre = document.getElementById("genre").value;
  let age = Number(document.getElementById("age").value);
  let country = document.getElementById("country").value;

  if (name == "") {
    return alert("Fill in all the information please.");
  } else if (genre == "") {
    return alert("Fill in all the information please.");
  } else if (age == 0) {
    return alert("Fill in all the information please.");
  } else if (country == "") {
    return alert("Fill in all the information please.");
  }

  let artist = createNewArtist(name, genre, age, country);

  artist.id = databaseOfArtist[databaseOfArtist.length - 1].id + 1;

  addArtistToDatabase(databaseOfArtist, artist);
  makeArtists(databaseOfArtist);

  let emptyForm = document.getElementById("create-new-artist");

  emptyForm.reset();
}

//On the filter based on genre that is going to run in the clickResetAllAndFilter

function onFilterByGenre(event) {
  event.preventDefault();

  let genre = document.getElementById("filter-genre").value;

  let artists = getArtistByGenre(databaseOfArtist, genre);

  makeArtists(artists);
}

//On the filter based on country that is going to run in the clickShowAllAndFilter
function onFilterByCountry(event) {
  event.preventDefault();

  let country = document.getElementById("filter-country").value;

  let artists = getArtistByCountry(databaseOfArtist, country);
  makeArtists(artists);
}

//Function for on the show all button that is going to run in the clickResetAllAndFilter
function onResetFilter() {
  document.getElementById("filter-genre").value = "";
  document.getElementById("filter-country").value = "";
  makeArtists(databaseOfArtist);
}

// the function for all the remove-buttons.
function onRemoveButtons(event) {
  let button = event.target;
  let id = button.parentElement.id;

  if (confirm("Are you sure you want to delete this artist?") == true) {
    removeArtistById(databaseOfArtist, id);
  } else return false;

  makeArtists(databaseOfArtist);

  clickRemoveArtist();
}

//Button click functions

//Function for createNewArtist
function clickAddNewArtist() {
  let form = document.getElementById("create-new-artist");
  form.addEventListener("submit", submitArtistInfo);
}

//Function for clicking the remove-buttons
function clickRemoveArtist() {
  let buttons = document.querySelectorAll(".artist button");

  for (let button of buttons) {
    button.addEventListener("click", onRemoveButtons);
  }
}

//function for the filter buttons
function clickResetAndFilter() {
  let inputForGenre = document.getElementById("filter-by-genre");
  let inputForCountry = document.getElementById("filter-by-country");
  let resetAll = document.getElementById("reset-all");

  inputForGenre.addEventListener("submit", onFilterByGenre);
  inputForCountry.addEventListener("submit", onFilterByCountry);
  resetAll.addEventListener("click", onResetFilter);
}

//The direct code that is called all the time
makeArtists(databaseOfArtist);
clickAddNewArtist();
clickResetAndFilter();
