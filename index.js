/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateFreelancer() {
  return {
    name: getRandomElement(NAMES),
    occupation: getRandomElement(OCCUPATIONS),
    rate:
      PRICE_RANGE.min +
      Math.round(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min)), // round instead of floor so random get return max value
  };
}

function getAverageRate(freelancers) {
  const totalRate = freelancers
    .map((freelancer) => freelancer.rate)
    .reduce((sum, rate) => sum + rate, 0);
  return totalRate / NUM_FREELANCERS;
}

function getTitleHTML() {
  const h1 = document.createElement("h1");
  h1.textContent = "FREELANCERS TODAY";
  return h1;
}

function getAverageRateHtml(freelancers) {
  const averageRate = getAverageRate(freelancers);
  const div = document.createElement("div");
  div.textContent = `The average rate today is: ${averageRate}`;
  return div;
}

function generateHTML(freelancer) {
  /* Arranging elems */
  const tableRow = document.createElement("tr");
  const name = document.createElement("td");
  const occupation = document.createElement("td");
  const rate = document.createElement("td");
  tableRow.appendChild(name);
  tableRow.appendChild(occupation);
  tableRow.appendChild(rate);
  /* Adding content */
  name.textContent = freelancer.name;
  occupation.textContent = `${freelancer.occupation}`;
  rate.textContent = `\$${freelancer.rate}`;
  return tableRow;
}

function setUpTable(freelancers) {
  /* Arranging elems */
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  headerRow.className = "header";
  const name = document.createElement("td");
  const occupation = document.createElement("td");
  const rate = document.createElement("td");
  table.appendChild(headerRow);
  headerRow.append(name);
  headerRow.append(occupation);
  headerRow.append(rate);
  /* Content */
  name.textContent = "Name";
  occupation.textContent = "Occupation";
  rate.textContent = "Rate";
  /* Filling w/ data */
  freelancers.map(generateHTML).forEach((elem) => table.appendChild(elem));
  return table;
}

function main() {
  const freelancers = Array.from(
    { length: NUM_FREELANCERS },
    generateFreelancer
  );
  const title = getTitleHTML();
  const averageRate = getAverageRateHtml(freelancers);
  const table = setUpTable(freelancers);

  document.body.append(title);
  document.body.append(averageRate);
  document.body.append(table);
}

main();
