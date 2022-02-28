const stringToShout = prompt("What do you want to shout");
const shout = stringToShout.toLocaleUpperCase();
const shoutMessage = `The message to shout is: ${shout}!!`;

document.querySelector('main').innerHTML = shoutMessage;