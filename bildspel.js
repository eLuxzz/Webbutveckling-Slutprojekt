var acc = document.getElementsByClassName("accordion");
var currentBild = 0;
var leftbtn = document.querySelector("#left");
var rightbtn = document.querySelector("#right");
var imageElement = document.getElementById("image");
var navBtn;
var images = ["3355", "3370", "3371", "3394","3405","3409"];
// var timer = setInterval(nextImage, 6000, 1);

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

leftbtn.addEventListener("click", function(){
    nextImage(-1);
});
rightbtn.addEventListener("click", function(){
    nextImage(1);
});

function init(){
    navBtn = document.getElementById("nav_button");
    navBtn.addEventListener("click", showMenu);
}

function showMenu(){
    console.log("Test");
    var nav = document.querySelector('nav');
    if(nav.className === "open"){
        nav.className = "closed";
        navBtn.getElementById("bar").className = "fa fa-close";
    }else{
        nav.className = "open";
        navBtn.getElementById("bar").className = "fa fa-bars";

    }
}


/* 3355, 3364, 3371, 3394, 3405, 3409 */
function nextImage(x){
    currentBild = currentBild + x;
    if(currentBild >= images.length) currentBild = 0;
    if(currentBild < 0) currentBild = images.length - 1;
    console.log(currentBild);

    var url = "url(Bildspel/IMG_" + images[currentBild] + ".jpg";
    console.log(url);

    imageElement.style.backgroundImage = url;
}