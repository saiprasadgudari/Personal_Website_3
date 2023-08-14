const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
$(document).ready(function(){
            $('a').on('click', function(event) {
                if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                
                    window.location.hash = hash;
                });
                }
            });
        });
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// Combine two functions into one
function toggleMenu() {
    var x = document.querySelector(".hamburger");
    x.classList.toggle("change");
    myFunction();
}
