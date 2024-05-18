window.onload = function() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var nav = document.getElementsByTagName("nav")[0];
        if (prevScrollpos > currentScrollPos) {
            nav.classList.remove("nav-hidden");
        } else {
            nav.classList.add("nav-hidden");
        }
        prevScrollpos = currentScrollPos;

        if (currentScrollPos == 0) {
            nav.style.backgroundColor = "transparent";
        } else {
            nav.style.backgroundColor = "#333";
        }
    }

}



function toggleWidth() {
    var developer = document.querySelector(".home-text h2 span");
    var computedStyle = window.getComputedStyle(developer);
    var currentWidth = parseFloat(computedStyle.width);

    if (currentWidth === 0) {
        developer.style.paddingRight = "10px";

        if (developer.textContent === "Designer"){
            developer.textContent = "Developer";
            developer.style.width = "110px";
        } else {
            developer.textContent = "Designer";
            developer.style.width = "100px";
        }
    } else {
        developer.style.width = "0";
        developer.style.padding = "0";
    }

}

function scrollToDiv(className) {
    const element = document.querySelector(className);

    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}

var curr_section = 0;


function changeColor(){
    const nav_classes = ["nav-home", "nav-about", "nav-services", "nav-portfolio", "nav-testimonial", "nav-blog", "nav-contact"]
    const sections = ["home", "about", "service", "portfolio", "feedback", "blog", "contact-us"]
    var min_element = Number.MAX_SAFE_INTEGER;
    var min_idx = 0;
    var m = "";
    for (let i=0; i<sections.length; i++){
        var section_item = document.getElementsByClassName(sections[i])[0];
        const distanceToTop = section_item.getBoundingClientRect().top;
        if (distanceToTop < min_element && distanceToTop>=-200){
            min_element = distanceToTop;
            min_idx = i;
            m = sections[i];
        }
    }

    

    if (min_idx != curr_section){
        document.getElementsByClassName(nav_classes[curr_section])[0].style.color = "#fff";
        document.getElementsByClassName(nav_classes[min_idx])[0].style.color = "#FF305B";
        curr_section = min_idx;
    }
}

setInterval(toggleWidth, 1500);





changeColor();

window.addEventListener('scroll', changeColor);