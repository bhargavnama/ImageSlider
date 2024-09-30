let slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

function nextImg(){
    nextIndex =  (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "none";
    slides[nextIndex].style.display = "block";
    slideIndex = nextIndex;
}

function prevImg(){
    prevIndex = (slideIndex == 0)?slides.length-1:slideIndex-1;
    slides[slideIndex].style.display = "none";
    slides[prevIndex].style.display = "block";
    slideIndex = prevIndex;
}

next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);

document.addEventListener("keydown", (event) => {
    if(event.keyCode  == 39) {
        nextImg();
    }
    if(event.keyCode == 37){
        prevImg();
    }

})

setInterval(nextImg, 5000);