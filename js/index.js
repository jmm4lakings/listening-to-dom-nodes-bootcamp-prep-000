const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});
const input = document.querySelector('input');
 
input.addEventListener('keydown', function(e) {
  console.log(e.key);
});

const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  if (e.key === "g") {
    return e.preventDefault()
  } else {
    console.log(e.key)
  }
});

let divs = document.querySelectorAll('div');
