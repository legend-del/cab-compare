// script.js

document.addEventListener("DOMContentLoaded", function() {
    const priceResults = document.getElementById("priceResults");

    // Simulated data for cab prices in rupees
    const olaPrice = 200;
    const uberPrice = 180;
    const rapidoPrice = 150;

    // Determine the cheapest option
    let cheapestService = "";
    let cheapestPrice = Math.min(olaPrice, uberPrice, rapidoPrice);

    if (cheapestPrice === olaPrice) {
        cheapestService = "Ola";
    } else if (cheapestPrice === uberPrice) {
        cheapestService = "Uber";
    } else {
        cheapestService = "Rapido";
    }

    // Display the comparison results
    const olaCard = createPriceCard("Ola", olaPrice);
    const uberCard = createPriceCard("Uber", uberPrice);
    const rapidoCard = createPriceCard("Rapido", rapidoPrice);
    const cheapestCard = createPriceCard(`Cheapest (${cheapestService})`, cheapestPrice, true);

    priceResults.appendChild(olaCard);
    priceResults.appendChild(uberCard);
    priceResults.appendChild(rapidoCard);
    priceResults.appendChild(cheapestCard);
});

// Function to create a price card
function createPriceCard(service, price, highlight = false) {
    const card = document.createElement("div");
    card.classList.add("price-card");

    const title = document.createElement("h2");
    title.textContent = service;
    card.appendChild(title);

    const priceText = document.createElement("p");
    priceText.textContent = `Price: ₹${price}`; // Displaying price in rupees
    card.appendChild(priceText);

    if (highlight) {
        card.style.backgroundColor = "#007BFF";
    }

    return card;
}

// Event listener for Compare Prices button
const compareButton = document.getElementById("compareButton");

if (compareButton) {
    compareButton.addEventListener("click", function() {
        // Open a new tab or window with the comparison page
        window.open("compare_prices.html", "_blank");
    });
}
