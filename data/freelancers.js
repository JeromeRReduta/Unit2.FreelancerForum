/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

export class RandomFreelancerGenerator {
  constructor(names, occupations, priceRange) {
    this.names = names;
    this.occupations = occupations;
    this.minPrice = priceRange.min;
    this.maxPrice = priceRange.max;
  }

  generate() {
    const randomName =
      this.names[Math.floor(Math.random() * this.names.length)];
    const randomOccupation =
      this.occupations[Math.floor(Math.random() * this.occupations.length)];
    const range = this.maxPrice - this.minPrice;
    const randomRate = this.minPrice + Math.floor(Math.random() * (range + 1));
    return {
      name: randomName,
      occupation: randomOccupation,
      rate: randomRate,
    };
  }
}
