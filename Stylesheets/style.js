window.addEventListener("scroll", function(){
  var navbar=document.getElementById("navBarCont");
  navbar.classList.toggle("sticky",window.scrollY > 0);
})

var index = 1; 

function slideAdd(n){
  showSlides(index+=n);
}

function cSlide(n){
  showSlides(index = n);
}

function  showSlides(n){
  var i;
  var slides = document.getElementsByClassName("slides2");
  if(n > slides.length){
    index = 1;
  }
  if(n<1){
    index = slides.length; 
  }
  for(i=0; i < slides.length; i++){
    slides[i].style.display ="none";
  }
  slides[index-1].style.display ="block";
}


