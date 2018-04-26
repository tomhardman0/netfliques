export default function () {
  const form = document.querySelector('.js-form');
  const input = form.elements[0];
  const listElements = document.querySelectorAll('.js-list-elements');

  // no op on submit
  form.onsubmit = (e) => {
    e.preventDefault();
  };

  const searchList = (e) => {
    const query = e.target.value;
    const normalisedQuery = query.toLowerCase(); // not definitve, but also lower
    // casing the data property on the element so matches are better

    // clean list so none are displayed
    [...listElements].forEach((element) => element.style.display = 'none' || element);

    // now display those that match the search
    [...listElements]
      .filter((element) => element.dataset.name.match(normalisedQuery))
      .forEach((element) => element.style.display = 'block' || element);
  };

  input.oninput = searchList;
}
