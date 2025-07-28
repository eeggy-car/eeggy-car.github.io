// Prevent form submit on Enter
document.querySelector('form[action="search"]').addEventListener('submit', function(e) {
  e.preventDefault();
});
const searchResults = document.getElementById('search-results');
const desktopInput = document.getElementById('search-input');
const mobileInput = document.getElementById('mobile-search-input');
const mobileSearchResults = document.getElementById('mobile-search-results');
const gamesList = window.gamesList; // Use the global variable

function showGamesList(show) {
  gamesList.style.display = show ? "flex" : "none";
}

function handleSearch(input, resultsContainer) {
  input.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    resultsContainer.innerHTML = '';
    if (query.length === 0) {
      resultsContainer.style.display = 'none';
      showGamesList(true);
      return;
    }
    const filtered = window.games.filter(g => g.name.toLowerCase().includes(query));
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<div style="padding:16px;">No results found.</div>';
    } else {
      filtered.forEach(game => {
        const a = document.createElement('a');
        a.href = game.url;
        a.style.display = "flex";
        a.style.alignItems = "center";
        a.style.gap = "12px";
        a.style.padding = "8px";
        a.style.textDecoration = "none";
        a.style.color = "inherit";
        a.innerHTML = `<img src="${game.image}" alt="${game.name}" width="40" height="40" style="border-radius:8px;"><span>${game.name}</span>`;
        resultsContainer.appendChild(a);
      });
    }
    resultsContainer.style.display = 'block';
    showGamesList(false);
  });
}

if (desktopInput) handleSearch(desktopInput, searchResults);
if (mobileInput && mobileSearchResults) handleSearch(mobileInput, mobileSearchResults);

document.addEventListener('click', function(e) {
  if (
    (!desktopInput || !desktopInput.contains(e.target)) &&
    (!mobileInput || !mobileInput.contains(e.target)) &&
    !searchResults.contains(e.target) &&
    (!mobileSearchResults || !mobileSearchResults.contains(e.target))
  ) {
    searchResults.style.display = 'none';
    if (mobileSearchResults) mobileSearchResults.style.display = 'none';
    showGamesList(true);
  }
});