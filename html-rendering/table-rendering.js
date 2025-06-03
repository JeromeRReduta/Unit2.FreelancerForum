export default class TableRenderer {
  table = document.createElement("table");

  appendHeaders() {
    const headers = ["name", "occupation", "rate"];
    const row = document.createElement("tr");
    for (let title of headers) {
      const td = document.createElement("td");
      td.textContent = title;
      row.appendChild(td);
    }
    this.table.appendChild(row);
  }

  appendRow(row) {
    const tr = document.createElement("tr");
    this.table.append(tr);
    for (let cell of row) {
      // iteration order is guaranteed b/c I mapped objs to arrays
      const td = document.createElement("td");
      tr.append(td);
      td.textContent = cell;
    }
  }

  appendData(freelancers) {
    const rows = freelancers.map((freelancer) => [
      freelancer.name,
      freelancer.occupation,
      `\$${freelancer.rate}`,
    ]);
    rows.forEach((row) => this.appendRow(row));
  }

  constructor(freelancers) {
    this.appendHeaders();
    this.appendData(freelancers);
  }

  renderAt(elem) {
    elem.append(this.table);
  }
}
