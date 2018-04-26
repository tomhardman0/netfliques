## Netfliques => [live on heroku](https://pure-plateau-13518.herokuapp.com/)

An code test app to gather information from a blog, display it on page and allow a user to search it.

First note: I had a personal time constraint of getting as far into the task as possible in roughly 2.5 hours. This is my best effort under those circumstances, I hope you can understand.

### Tech choices

- Express (simple nodejs framework)
- ES6/7 JS, transpiled to ES5 via webpack/babel
- No CSS process, it's written directly in `dist/index.js`
- I followed the no framework mantra pretty rigorously and tried to import pretty much nothing.

### App flow

- On app start it scrapes the provided blog and creates a list of tuples `[id, name]`
- The app then renders a pug template that iterates over the list and displays it (the list elements created contain data-attrs for search)
- The text input searches on every input change
- The search method is incredibly simple, it hides all list elements then displays only those that match
- Queries are normalised slightly to avoid any missed searches based on capitalisation.

### Main caveats

- I'm aware there are no tests here, as above I'm afraid it was due to my own time constraints, I felt it was better to demonstrate as much output as possible.
- Same goes for the last part of the task, to add keyboard interaction.
- Tested on latest chrome/safari, and iphone 6 only.
