console.log('js connected')

var clicks = 9;

var neilClicks = document.querySelector("#neilClicks")

var nicholeClicks = document.querySelector("#nicholeClicks")

var jimClicks = document.querySelector("#jimClicks")

function onClick(element) {
    clicks += 1;
    element.innerHTML = clicks;
};
