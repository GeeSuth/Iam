function openLink(url) {
    window.open(url, "_blank").focus();
}

var EndFixedProfile = 2700;

$(window).scroll(function(e) {
    var scrollHeight = $(this).scrollTop();
    console.log(scrollHeight);
    var $el = $('.div-profile');
    if ($(window).width() < 768)
        return;

    if (scrollHeight > EndFixedProfile) {
        $el.css({
            'position': 'static',
            'top': '60px',
            'height': '100%',
            'margin': '0px',
            'width': 'auto',
            'top': '60px'
        });
    } else {
        $el.css({
            'position': 'fixed',
            'top': '60px',
            'height': '100%',
            'margin': '0px',
            'width': 'auto',
            'top': '60px'
        });

    }




});

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