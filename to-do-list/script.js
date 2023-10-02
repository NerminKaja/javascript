// Dohvatanje referenci na HTML elemente koristeći njihove ID-ove
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Funkcija za dodavanje nove stavke u listu
function addTask(){
     // Provjera da li je uneseno nešto u input polje
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        // Kreiranje novog <li> elementa i dodavanje unosa iz input polja u njega
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Kreiranje <span> elementa sa znakom "x" za brisanje i dodavanje u <li>
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
     // Resetovanje vrijednosti input polja nakon dodavanja
    inputBox.value = "";

     // Pozivanje funkcije za spremanje podataka
    saveData();
}

// Dodavanje event listenera za klik na listu za označavanje ili brisanje stavki
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // Ako je kliknuto na <li>, dodaj ili ukloni klasu "checked"
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
         // Ako je kliknuto na <span>, ukloni roditeljski <li> element
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Funkcija za spremanje podataka u localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// Funkcija za prikazivanje stavki iz localStorage kada se stranica učita
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
// Pozivanje funkcije za prikazivanje stavki prilikom učitavanja stranice
showTask();