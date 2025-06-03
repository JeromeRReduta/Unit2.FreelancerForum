import { RandomFreelancerGenerator } from "./data/freelancers.js";
import HeaderRenderer from "./html-rendering/header-rendering.js";
import TableRenderer from "./html-rendering/table-rendering.js";

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

function mount(app, ...renderers) {
  renderers.forEach((renderer) => renderer.renderAt(app));
}

function main() {
  const generator = new RandomFreelancerGenerator(
    NAMES,
    OCCUPATIONS,
    PRICE_RANGE
  );
  const freelancers = Array.from({ length: NUM_FREELANCERS }, (elem) =>
    generator.generate()
  );
  const header = new HeaderRenderer(freelancers);
  const table = new TableRenderer(freelancers);
  const app = document.getElementById("app");
  mount(app, header, table);
}

main();
