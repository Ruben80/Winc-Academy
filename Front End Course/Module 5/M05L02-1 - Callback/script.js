// Stap 1
// const huiswerkMaken = function (vak, callback) {
//     console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//     callback();
// }

// Stap 2
// const huiswerkMaken = function (vak, callback) {
//     console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//     callback();
// }

// const klaarMetHuiswerk = function() {
//     console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
// } 

// Stap 3

// const huiswerkMaken = function (vak, callback) {
//     console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
//     callback();
// }

// const klaarMetHuiswerk = function() {
//     console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
// } 

// huiswerkMaken("wiskunde", klaarMetHuiswerk);

// Stap 4

const huiswerkMaken = function (vak, callback) {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout( function(){
        callback();
    }, 2000 );    
}

const klaarMetHuiswerk = function() {    
        console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!"); 
} 

huiswerkMaken("wiskunde", klaarMetHuiswerk);


// Stap 1

// Maak een functie en geef deze de naam huiswerkMaken , deze functie accepteert twee argumenten. Het eerste argument kan je de naam vak geven en het tweede argument callback

// ⇒ in feite mag je je argumenten noemen wat je wilt, maar voor een callback (wat dus een functie is) krijgt deze vaak ook de naam callback om verwarring te voorkomen

// De functie huiswerkMaken voert een console.log uit met als tekst: "Ok, ok, ik ga nu mijn [voeg hier het vak in] huiswerk maken"

// Tip: gebruik ${string interpolation} om het vak argument in te voegen in de console.log tekst

// Gelijk onder de console.log wordt de callback functie aangeroepen zonder argumenten

// Stap 2

//     Maak onder de nu complete functie van huiswerkMaken een aparte functie die je klaarMetHuiswerk noemt. Deze accepteert geen argumenten.
//     De klaarMetHuiswerk voert een console.log uit met de tekst "Kijk Paps/Mams, ik ben klaar met mijn huiswerk!"

// Stap 3

//     Onder beide functies kun je nu de functie huiswerkMaken aanroepen met twee arguments. De eerste krijgt de string "wiskunde", het tweede argument is de functie klaarMetHuiswerk

// Stap 4

// Gebruik SetTimeOut() in je huiswerkMaken functie

// Window setTimeout() Method