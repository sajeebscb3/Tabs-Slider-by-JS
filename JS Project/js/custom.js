var btn = document.querySelectorAll(".tab-btn");
var tab = document.querySelectorAll(".tab");

function reset(){
	for (var i = 0; i < tab.length; i++) {
		tab[i].style.display = "none";
		btn[i].style.backgroundColor = "#222"

	}
}

function tabOne(){
	reset();
	tab[0].style.display = "block";
	btn[0].style.backgroundColor = "#08c"

}
tabOne();

for(let a = 0; a < btn.length; a++){
	btn[a].addEventListener( 'click', function(){
		reset();
		tab[a].style.display = "block";
		btn[a].style.backgroundColor = "#08c"
		});
	}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}