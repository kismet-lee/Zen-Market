var i = 0;
var txt =
  '800,000 subscribers + Over 2 million items shipped worldwide.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('h3-anim').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener('DOMContentLoaded', typeWriter);
