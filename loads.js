$(document).ready(function() {

    $('#on-boarding-right').append(readTextFile('onboarding/onboarding-right.htm'));
    // Experinces 
    $('#work-exp').append(readTextFile('components/work-experince.htm'));



    // Lesson
    /*$('#les-cs50').append(readTextFile('lessons/cs50.htm'));
    $('#les-api').append(readTextFile('lessons/api.htm'));*/


    // Projects
    /*$('#pro-win').append(readTextFile('projects/win.htm'));
    $('#pro-web').append(readTextFile('projects/web.htm'));
    $('#pro-some').append(readTextFile('projects/some.htm'));*/

    //window.scrollTo(0,0);

    //Check if the visitor come from PDF file 
    try {
        const urlParms = new URLSearchParams(window.location.search);
        if (urlParms.get('frompdf') == 'true') {
            alert("Thank you for coming from PDF file to My Digital CV!");
            window.history.pushState("", "", "/");
        }
    } catch {}

})

function readTextFile(file) {
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;

            }
        }
    }
    rawFile.send(null);
    return allText;
}