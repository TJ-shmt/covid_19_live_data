const apiUrl = "https://coronavirus-19-api.herokuapp.com/countries";

const coronaTable = document.getElementById("coronaTable");

async function loadData() {
  const response = await fetch(apiUrl);
  const countries = await response.json();

  let result = "";

  const countriesSorted = countries.sort(function(a, b) {
    return b.cases - a.cases;
  });

  for (let country of countriesSorted) {
    if (country.country !== "Total:" && country.country !== "") {
      //skips "Total:" and no named ("") countries
      result +=
        "<tr>" +
        "<td>" +
        country.country +
        "</td> " +
        "<td>" +
        country.cases +
        "</td> " +
        "<td>" +
        country.todayCases +
        "</td> " +
        "<td>" +
        country.recovered +
        "</td> " +
        "<td>" +
        country.deaths +
        "</td> " +
        "</tr>";
    }
  }
  coronaTable.innerHTML += result;
}

loadData();

var newTableObject = document.getElementById("addSort");
sorttable.makeSortable(newTableObject);
