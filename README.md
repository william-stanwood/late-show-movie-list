# Late Show

A personal movie watchlist built with HTML, CSS, and JavaScript.

## Try it

Download the repository as a ZIP, unzip it, and open `dist/index.html` in your browser. Add a movie, check its box after watching it, then refresh. The checkbox and watched count should stay the same. Each browser keeps its own list. Clearing site data removes it.

## How it works

- `dist/index.html` defines the title field, Add movie button, and list.
- `dist/style.css` controls the colors, spacing, ticket design, and watched appearance.
- `dist/app.js` handles interaction. Submitting the form creates a movie with a title and a watched flag. Checking the box changes that flag. After either action, the app saves the list in the browser's local storage. Opening the app again loads the saved list.

## Make your first change

In `dist/index.html`, find the heading “My movie list” and change it to “Friday movie night”. Save the file and refresh the page to see your edit. In Git, a **commit** is a named snapshot of changes like this one.
