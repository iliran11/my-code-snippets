// works on this page: https://admin.bookaway.com/key-detail-definitions
// GOAL: make a i18next json from the amenities.

// get lodash
fetch("https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js")
  .then((response) => response.text())
  .then((text) => eval(text));


const json = {};
let tbodyElem = document.getElementsByTagName("tbody")[0];
for (let row of tbodyElem.children) {
  const amenity = row.children[1].innerHTML;
  json[_.snakeCase(amenity)] = amenity;
}

// print the json with the keys
console.log(json);
