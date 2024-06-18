const searchInputs = document.getElementById("search-input");
const searchResults = document.getElementById("search-result");

function search(data) {
  const filteredResults = mockData.filter((item) => {
    item.name.toLoweCase().includes(data.toLoweCase());
  });
  filteredResults(displayResult);
}

searchInputs.addEventListener("input", (evt) => {
  const target = evt.target.value;
  search(target);
});

function displayResult(results) {
  searchResults.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    li.addEventListener("click", () => {});
  });
  searchResults.appendChild(loi);
}
