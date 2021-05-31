var currentBild = 0;
var leftbtn = document.querySelector("#left");
var rightbtn = document.querySelector("#right");
var imageElement = document.getElementById("image");
var images = ["3355", "3370", "3371", "3394","3405","3409"];
var timer = setInterval(nextImage, 10000, 1);


leftbtn.addEventListener("click", function(){
    nextImage(-1);
});
rightbtn.addEventListener("click", function(){
    nextImage(1);
});

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