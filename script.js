function tabulate(data) {
  const table = d3
    .select("body")
    .append("table")
    .attr("id", "example")
    .attr("class", "display nowrap");
  const thead = table.append("thead");
  const tbody = table.append("tbody");

  thead
    .append("tr")
    .selectAll(null)
    .data(data.shift())
    .enter()
    .append("th")
    .text((d) => d);

  const rows = tbody.selectAll(null).data(data).enter().append("tr");

  rows
    .selectAll(null)
    .data((d) => d)
    .enter()
    .append("td")
    .text((d) => d);

  return table;
}

d3.text(
  "https://raw.githubusercontent.com/sunmoonStern/funin-open-data/main/hospital-data.tsv"
)
  .then(d3.tsvParseRows)
  .then(tabulate)
  .then(() =>
    $("#example").DataTable({
      language: {
        infoPostFix:
          '<br><a href="https://github.com/sunmoonStern/funin-open-data-website2">GitHub</a>'
      }
    })
  );
