// Selektujemo sve elemente sa klasom "list" i smeštamo ih u promenljivu "lists"
let lists    = document.getElementsByClassName("list");
// Selektujemo element sa ID-om "right" i smeštamo ga u promenljivu "rightBox"
let rightBox = document.getElementById("right");
// Selektujemo element sa ID-om "left" i smeštamo ga u promenljivu "leftBox"
let leftBox  = document.getElementById("left");

// Iteriramo kroz sve elemente sa klasom "list"
for(list of lists){
    // Dodajemo "dragstart" event listener na svaki od tih elemenata
    list.addEventListener("dragstart", function(e){
        // Smeštamo selektovani element u promenljivu "selected"
        let selected = e.target;

        // Dodajemo "dragover" event listener na "rightBox" element
        // Ovaj event listener omogućava spuštanje elemenata na "rightBox"

        rightBox.addEventListener("dragover",function(e){
            // Preventiramo defaultno ponašanje (omogućavamo drop)
            e.preventDefault();
        });

        // Dodajemo "drop" event listener na "rightBox" element
        // Ovaj event listener se poziva kada se element pusti na "rightBox"
        rightBox.addEventListener("drop", function(e){
              // Dodajemo selektovani element u "rightBox"
            rightBox.appendChild(selected);
            // Postavljamo "selected" na null kako bismo izbegli dodavanje više puta
            selected = null;
        });

        // Dodajemo "dragover" event listener na "leftBox" element
        // Slično kao i za "rightBox", omogućava spuštanje elemenata na "leftBox"
        leftBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        // Dodajemo "drop" event listener na "leftBox" element
        leftBox.addEventListener("drop", function(e){
            // Dodajemo selektovani element u "leftBox"
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}