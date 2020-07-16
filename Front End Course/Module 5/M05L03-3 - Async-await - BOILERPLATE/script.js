// Verplaats het aanroepen van de functie getData() naar script.js. Je wilt de functie getData() afwachten. Hoe krijg je toegang tot het keyword await? Door deze in een async functie te zetten. Dus maak een asyncronous functie waarin je getData() afwacht.

const doSomethingWithData = async function () {
    const data = await getData();
    console.log("Here is your data:", data);
};

doSomethingWithData();