function scrollRotate() {
    let image = document.getElementById("hd");
    image.style.transform = "rotate(" + window.pageYOffset/3 + "deg)";
}

window.addEventListener('scroll',scrollRotate);
