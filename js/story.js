// 1. Declare variables and capture input.
const person = prompt("Give me a person");
const place = prompt("Give me a place");
const thing = prompt("Give me a thing");
// 2. Combine the input with other words to create a story.
const msg = `${person} went to ${place} to buy ${thing}`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = msg;