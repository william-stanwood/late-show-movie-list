const storageKey = "late-show.movies.v1";
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const list = document.querySelector("ul");
const notice = document.querySelector("#notice");
let movies = [];

function loadMovies() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    movies = saved.filter(movie => movie && typeof movie.title === "string" && typeof movie.watched === "boolean");
  } catch {
    notice.textContent = "Your saved list could not be loaded.";
  }
}

function saveMovies() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(movies));
    notice.textContent = "";
  } catch {
    notice.textContent = "Your browser could not save these changes. They will last for this visit.";
  }
}

function updateSummary() {
  const watched = movies.filter(movie => movie.watched).length;
  document.querySelector("#count").textContent = watched + " of " + movies.length + " watched";
  document.querySelector("#empty").hidden = movies.length > 0;
}

function showMovie(movie) {
  const row = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = movie.watched;
  checkbox.setAttribute("aria-label", "Watched: " + movie.title);
  checkbox.addEventListener("change", () => {
    movie.watched = checkbox.checked;
    saveMovies();
    updateSummary();
  });
  const title = document.createElement("span");
  title.textContent = movie.title;
  label.append(checkbox, title);
  row.append(label);
  list.append(row);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const title = titleInput.value.trim();
  if (!title) {
    notice.textContent = "Enter a movie title first.";
    titleInput.focus();
    return;
  }
  const movie = { title, watched: false };
  movies.push(movie);
  showMovie(movie);
  saveMovies();
  updateSummary();
  form.reset();
  titleInput.focus();
});

loadMovies();
movies.forEach(showMovie);
updateSummary();
