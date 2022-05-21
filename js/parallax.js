var cielo = document.getElementById("cielo");
var montagne = document.getElementById("montagne");
var casolare = document.getElementById("casolare");
var ragazza = document.getElementById("ragazza");

window.addEventListener("scroll", function(){
  var value = window.scrollY;
  cielo.style.top = value * 0.5 + 'px';
  montagne.style.top = value * 0.4 + 'px';
  casolare.style.top = value * 0.2 + 'px';
  ragazza.style.top = value * 0 + 'px';
});
