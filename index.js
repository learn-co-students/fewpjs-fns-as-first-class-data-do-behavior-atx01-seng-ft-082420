/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let new_time = time.split(':')
  let current_time = new_time[0].concat(new_time[1])
  let result = parseInt(current_time, 10)

  if (result < 1200){
    return "Good Morning";
  }

  if ((result >= 1200) && (result <= 1700)){
    return "Good Afternoon";
  }

  else if (result > 1700){
    return "Good Evening";
  }

  else{
    return "TEST"
  }


}
/* Write your implementation of displayMessage() */  

function displayMessage(content) {
  let text = document.getElementById('greeting')
  text.innerText = content
}