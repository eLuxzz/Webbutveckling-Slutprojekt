var acc = document.getElementsByClassName("accordion");
var navBtn = document.getElementById("nav_button");
var openModal = document.getElementsByClassName("open-modal");
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImg")
navBtn.addEventListener("click", showMenu);

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.margin = "0";
            
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.margin = "-15px 0 0 0 ";
        }
    });
}

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", function () {
        console.log("Ja");
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        modal.style.display = "block";
    });
}

function showMenu(){
    console.log("Test");
    var nav = document.querySelector('nav');
    var header = document.querySelector('header');
    if(nav.className === "open"){
        nav.className = "closed";
        header.className = "closed";
        document.getElementById("bar").className = "fa fa-bars";
    }else{
        nav.className = "open";
        header.className = "open";
        document.getElementById("bar").className = "fa fa-close";
    }
}

