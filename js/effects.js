var slideInRight = {
  distance: "50px",
  duration: 1500,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: true,
  origin: 'right'
};

var slideInLeft = {
  distance: "50px",
  duration: 1500,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: true,
  origin: 'left'
};

ScrollReveal().reveal(".reveal-right", slideInRight);

ScrollReveal().reveal(".reveal-left", slideInLeft);
