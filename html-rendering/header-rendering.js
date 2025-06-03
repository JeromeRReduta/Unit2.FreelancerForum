export default class HeaderRenderer {
  header = document.createElement("header");

  appendWelcome() {
    const h1 = document.createElement("h1");
    this.header.append(h1);
    h1.textContent = "FREELANCERS HERE";
  }

  getAverageRate(freelancers) {
    const totalRate = freelancers
      .map((elem) => elem.rate)
      .reduce((acc, rate) => acc + rate, 0);
    return totalRate / freelancers.length;
  }

  appendAverageRate() {
    const h2 = document.createElement("h2");
    this.header.append(h2);
    h2.textContent = `Today's average rate is: \$${this.averageRate}`;
  }

  renderAt(elem) {
    elem.append(this.header);
  }

  constructor(freelancers) {
    this.averageRate = this.getAverageRate(freelancers);
    this.appendWelcome();
    this.appendAverageRate();
  }
}
