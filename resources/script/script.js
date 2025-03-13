const London = {
  cityName: "London",
  description:
    "A city where history meets modernity, London boasts iconic landmarks like Big Ben, Tower Bridge, and Buckingham Palace.\nIts diverse culture thrives in bustling markets, world-class museums, and a dynamic arts and music scene.\nFrom the River Thames to Soho’s nightlife, every corner tells a story of royalty, revolution, and resilience.\nA melting pot of traditions and trends, London is a global capital of finance, fashion, and creativity.",
};
const Paris = {
  cityName: "Paris",
  description:
    "Paris, the City of Light, enchants with its timeless beauty, from the Eiffel Tower to the Seine's romantic banks.\nCharming cafés, grand boulevards, and historic landmarks like the Louvre and Notre-Dame define its allure./nA hub of fashion, art, and gastronomy, Paris captivates with its elegant blend of tradition and modernity.\nBy day or night, its atmosphere brims with culture, romance, and the spirit of joie de vivre.",
};
const Tokyo = {
  cityName: "Tokyo",
  description:
    "A dazzling fusion of tradition and technology, Tokyo blends ancient shrines with neon-lit skyscrapers.\nFrom the serene gardens of Meiji Shrine to the vibrant streets of Shibuya, every district offers a unique charm.\nHome to cutting-edge innovation, Michelin-starred dining, and anime culture, it pulses with endless energy.\nTokyo’s harmony of past and future creates an electrifying yet deeply cultural experience.",
};
const cities = {
  London: London,
  Paris: Paris,
  Tokyo: Tokyo,
};

function setCity(cityName) {
  document.getElementById("description").innerHTML =
    cities[cityName].description;
  document.getElementById("title").innerHTML = cities[cityName].cityName;
  return cityName;
}

function switchMode() {
  const body = document.body;
  const currentClass = body.className;
  body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
  document.getElementById("toggleMode").innerHTML =
    currentClass === "light-mode" ? "Toggle light mode" : "Toggle dark mode";
}

function addInputButton() {
  const input = document.createElement("input");
  input.className = "income";
  input.type = "number";
  if (document.querySelectorAll(".income").length < 3) {
    document.getElementById("incomeContainer").appendChild(input);
  }
}

function removeInputButton() {
  if (document.querySelectorAll(".income").length > 1) {
    const container = document.getElementById("incomeContainer");
    container.removeChild(container.children[container.children.length - 1]); // Removes the first child element
  }
}

function cal() {
  let total = 0;
  document.querySelectorAll(".income").forEach((input) => {
    total += Number(input.value) || 0; // Convert input value to number, default to 0 if empty
  });
  document.getElementById("totalIncome").innerHTML = total;
  return total;
}

function checkTypeIncome() {
  document.querySelectorAll(".income").forEach((input) => {
    if (isNaN(input.value)) {
      alert("Please enter a number");
      //remove last character in input
      input.value = input.value.slice(0, -1);
    }
  });
}

function taxRate() {
  const income = document.getElementById("totalIncome").innerHTML;
  let rate = 0;
  if (income <= 150000) {
    rate = 0;
  } else if (income <= 300000) {
    rate = 5;
  } else if (income <= 500000) {
    rate = 10;
  } else if (income <= 750000) {
    rate = 15;
  } else if (income <= 1000000) {
    rate = 20;
  } else if (income <= 2000000) {
    rate = 25;
  } else if (income <= 5000000) {
    rate = 30;
  } else {
    rate = 35;
  }
  document.getElementById("taxRate").innerHTML = rate;
}

function calTax() {
  let income = document.getElementById("totalIncome").innerHTML;
  let tax = 0;
  // if (income <= 150000) {
  //   tax = 0;
  // } else if (income <= 300000) {
  //   tax = (income - 150000) * 0.05;
  // } else if (income <= 500000) {
  //   tax = (income - 300000) * 0.1 + 7500;
  // } else if (income <= 750000) {
  //   tax = (income - 500000) * 0.15 + 27500;
  // } else if (income <= 1000000) {
  //   tax = (income - 750000) * 0.2 + 65000;
  // } else if (income <= 2000000) {
  //   tax = (income - 1000000) * 0.25 + 115000;
  // } else if (income <= 5000000) {
  //   tax = (income - 2000000) * 0.3 + 365000;
  // } else {
  //   tax = (income - 5000000) * 0.35 + 1265000;
  // }
  if (income <= 150000) {
    tax = 0;
  } else if (income <= 300000) {
    tax = income * 0.05;
  } else if (income <= 500000) {
    tax = income * 0.1;
  } else if (income <= 750000) {
    tax = income * 0.15;
  } else if (income <= 1000000) {
    tax = income * 0.2;
  } else if (income <= 2000000) {
    tax = income * 0.25;
  } else if (income <= 5000000) {
    tax = income * 0.3;
  } else {
    tax = income * 0.35;
  }
  document.getElementById("totalTax").innerHTML = tax;
}

document.addEventListener("input", (event) => {
  if (event.target.classList.contains("income")) {
    checkTypeIncome();
    cal();
    taxRate();
    calTax();
  }
});