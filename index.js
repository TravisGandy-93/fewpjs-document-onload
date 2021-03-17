// Your code goes here
document.addEventListener("DOMContentLoaded", function(e) {
    let text = document.querySelector('p')
  text.innerHTML = 'This is really cool!'
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  ); 