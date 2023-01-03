/* Animacion iconos analisis garantizado */

function apareceIconos(){
    var html = document.getElementsByTagName ('html')[0];
    var iconoAparece = document.getElementsByClassName ('cuadro');
    
    document.addEventListener("scroll", function(){
        var topVentIco = html.scrollTop;
        
        for(i=0; i < iconoAparece.length; i++){
            var topIcoAparece = iconoAparece[i].offsetTop;
            if(topVentIco > topIcoAparece - 400){
                iconoAparece[i].style.transform = 'translateY(0)';
                iconoAparece[i].style.opacity = '1';
            }
        }
    })
    
}
apareceIconos();


/* ESTILOS CARUSEL de testimoniales ---------------------------------------------------------------------------------------------- */

var ancho = document.getElementById('ancho_d').offsetWidth;
var claso =  document.getElementsByClassName('testimonial-item');
var contSlide = claso.length;
var numeSlide = 2;
var valSlide = contSlide * 100;
var movSlide = valSlide - 100;

if(contSlide == 1){
  numeSlide = 1;
}

for (var i = 0; i < claso.length; i++) {
  claso[i].setAttribute('style', 'width:' + ancho / numeSlide + 'px;');
};

function myFunction(x) {
	if (x.matches) { // If media query matches
		claso[0].setAttribute('style', 'width:' + ancho / 1 + 'px;');
	} else {
		claso[0].setAttribute('style', 'width:' + ancho / numeSlide + 'px;');
	}
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes


(function () {
	'use strict';
	var slides = document.querySelectorAll('.testimonial-item'),
		 button = document.getElementById('button'),
		 arrows = document.querySelectorAll('.lnr'),
		 carouselCount = 0,
		 scrollInterval,
		 interval = 5000;

	arrows[0].addEventListener('click', function (e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount -= 100; //cambiarvalor cuanto se corre
		slider();
		if (e.type !== 'autoClick') {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	});
	arrows[1].addEventListener('click', sliderEvent);
	arrows[1].addEventListener('autoClick', sliderEvent);
	
	function sliderEvent(e) {
		e = e || window.event;
		e.preventDefault();
		carouselCount += 100;  //cambiarvalor cuanto se corre
		slider();
		if (e.type !== "autoClick") {
			clearInterval(scrollInterval);
			scrollInterval = setInterval(autoScroll, interval);
		}
	}
	
	function slider() {
		var ancho = document.getElementById('ancho_d').offsetWidth;
		// switch (carouselCount) {
		// 	case -100:  //cambiarvalor cuanto se corre
		// 		carouselCount = 0;
		// 		break;
		// 	case 300: //cambiarvalor cuantas veces se corre para devolverse
		// 		carouselCount = 0;
		// 		break;
		// 	default:
		// 		break;
		// }
		// console.log(carouselCount);
		// for (var i = 0; i < slides.length; i += 1) {
		// 	slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%); width:' + ancho / 2 + 'px;'); //cambiarvalor num slides
		// }
		for (var i = 0; i < slides.length; i += 1) {
			function myFunction(x) {
				switch (carouselCount) {
					case -100:  //cambiarvalor cuanto se corre
						carouselCount = 0;
						break;
					case valSlide: //cambiarvalor cuantas veces se corre para devolverse
						carouselCount = 0;
						break;
					default:
						break;
				}
				if (x.matches) { // If media query matches
					slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%); width:' + ancho / 1 + 'px;');
				} else {
					switch (carouselCount) {
						case -100:  //cambiarvalor cuanto se corre
							carouselCount = 0;
							break;
						case movSlide: //cambiarvalor cuantas veces se corre para devolverse
							carouselCount = 0;
							break;
						default:
							break;
					}
					slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%); width:' + ancho / numeSlide + 'px;');
				}
			  }
			  var x = window.matchMedia("(max-width: 700px)")
			  myFunction(x) // Call listener function at run time
			  x.addListener(myFunction); // Attach listener function on state changes
		}
	}
	
	// create new Event to dispatch click for auto scroll
	var autoClick = new Event('autoClick');
	function autoScroll() {
		arrows[1].dispatchEvent(autoClick);
	}
	
	// set timing of dispatch click events
	scrollInterval = setInterval(autoScroll, interval);
	
})();
/* FIN ESTILOS CARUSEL  de testimoniales ------------------------------------------------------------------------------------------ */


/* ESTILOS SLIDER HM SOLUCIONES -------------------------------- */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myProyect");
  // var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" w3-red", "");
  // }
  x[slideIndex-1].style.display = "block";  
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myProyect");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);
}
/* FIN ESTILOS SLIDER HM SOLUCIONES -------------------------------- */



/* ESTILOS SLIDER casos de exito -------------------------------- */
var slidendex = 1;
mostrardiv(slidendex);

function ceflecha(m) {
	mostrardiv(slidendex += m);
}

function ELDiv(m) {
  mostrardiv(slidendex = m);
  console.log(m)
}

function mostrardiv(m) {
  var i;
  var py = document.getElementsByClassName("slidersce");
  var puntobull = document.getElementsByClassName("punto_bull");
  if (m > py.length) {slidendex = 1}    
  if (m < 1) {slidendex = py.length}
  for (i = 0; i < py.length; i++) {
    py[i].style.display = "none";  
  }
  for (i = 0; i < puntobull.length; i++) {
    puntobull[i].className = puntobull[i].className.replace(" activado", "");
  }
  py[slidendex-1].style.display = "block";
  puntobull[slidendex-1].className += " activado";
}

var miIndex = 0;
sliderce();

function sliderce() {
  var i;
  var py = document.getElementsByClassName("slidersce");
  var puntobull = document.getElementsByClassName("punto_bull");
  for (i = 0; i < py.length; i++) {
	py[i].style.display = "none";
  }

  miIndex++;
  if (miIndex > py.length) {miIndex = 1}    
  py[miIndex-1].style.display = "block";

  for (i = 0; i < puntobull.length; i++) {
	puntobull[i].className = puntobull[i].className.replace("activado", "");
  } 
  puntobull[miIndex-1].className += " activado";
  setTimeout(sliderce, 5000);
  //console.log(miIndex);
}
/* FIN ESTILOS SLIDER casos de exito -------------------------------- */



class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt).bind(this);
        }.bind(this), false);
    }
}


// Use class to get element by string.
var swiper = new Swipe('#my-element');
swiper.onLeft(function() { alert('izquierda.') });
swiper.onRight(function() { alert('derecha.') });
swiper.run();

// Get the element yourself.
var swiper = new Swipe(document.getElementById('#my-element'));
swiper.onLeft(function() { alert('You swiped left.') });
swiper.run();

// One-liner.
(new Swipe('#my-element')).onLeft(function() { alert('You swiped left.') }).run();