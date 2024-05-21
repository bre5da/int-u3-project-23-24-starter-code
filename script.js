// Declare variables below to save the different divs of your story.
let Slide1 = document.querySelector(".Slide1");
let Slide2A = document.querySelector(".Slide2A");
let Slide2B = document.querySelector(".Slide2B");
let Slide3S = document.querySelector(".Slide3S");
let Slide3F = document.querySelector(".Slide3F");
let Slide3B = document.querySelector(".Slide3B");
let Slide3V = document.querySelector(".Slide3V");

Slide2A.style.display = 'none';
Slide2B.style.display = 'none';
Slide3S.style.display = 'none';
Slide3F.style.display = 'none';
Slide3B.style.display = 'none';
Slide3V.style.display = 'none';


let Adopt = document.querySelector(".Adopt");
let Buy = document.querySelector(".Buy");

Adopt.addEventListener('click', function() {
  Slide1.style.display = 'none';
  Slide2A.style.display = 'initial';

});
Buy.addEventListener('click', function() {
  Slide1.style.display = 'none';
  Slide2B.style.display = 'initial';

});
let Ben = document.querySelector(".Ben");
let Sav = document.querySelector(".Sav");

Sav.addEventListener('click', function() {
  Slide2B.style.display = 'none';
  Slide3V.style.display = 'initial';
});


Ben.addEventListener('click', function() {
  Slide2B.style.display = 'none';
  Slide3B.style.display = 'initial';
});

let Snow = document.querySelector(".Snow");
let Fluff = document.querySelector(".Fluff");

Snow.addEventListener('click', function() {
  Slide2A.style.display = 'none';
  Slide3S.style.display = 'initial';
});
Fluff.addEventListener('click', function() {
  Slide2A.style.display = 'none';
  Slide3F.style.display = 'initial';
});

  let FirstImg = document.querySelector(".FirstImg");

FirstImg.addEventListener('mouseover', function() {


  let Header = document.querySelector(".Header");

  FirstImg.src = "https://people.com/thmb/yL6-DvpZga7Uy83LPmPIOYdm2Y4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/pet-stores-2-aa0556bba8c24d23a5ecd1a59721ddae.jpg";
  Header.innerHTML = "Lets Start!";
});


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });