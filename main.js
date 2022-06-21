function openLink(url) {
    window.open(url, "_blank").focus();
}



var modal = document.getElementById("ModalViewImage");


function ViewImageInModal(clikedImageElement) {

    var src = "";
    if (clikedImageElement.localName == "div") {
        if (clikedImageElement.className.includes("carousel-item")) {
            var imageInsideDiv = clikedImageElement.getElementsByClassName("card-project-img")[0];
            src = imageInsideDiv.src;
        }
    } else if (clikedImageElement.localName == "img") {
        src = clikedImageElement.src;
    }
    var modalImg = document.getElementById("Modalimg");
    modal.style.display = "block";
    modalImg.src = src;
    var captionText = document.getElementById("caption");
    captionText.innerHTML = "Test";
}

var span = document.getElementsByClassName("closeImageModal")[0];
span.onclick = function() {
    modal.style.display = "none";
}