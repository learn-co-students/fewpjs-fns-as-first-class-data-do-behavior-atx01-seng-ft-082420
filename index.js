/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString) {
  let time = parseInt(`${timeString}`, 10);
  if (time < 12) {
    return 'Good Morning';
  } else if (time < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  let greet = document.getElementById("greeting");
  greet.innerHTML = str;
};