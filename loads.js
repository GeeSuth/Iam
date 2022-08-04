$(document).ready(function() {

    // Experinces 
    $('#exp-fleet').append(readTextFile('jobs/fleet.system.htm'));
    $('#exp-itec').append(readTextFile('jobs/itec.htm'));
    $('#exp-reemas').append(readTextFile('jobs/reemas.htm'));
    $('#exp-sky').append(readTextFile('jobs/skyCenter.htm'));



    // Lesson
    $('#les-cs50').append(readTextFile('lessons/cs50.htm'));
    $('#les-api').append(readTextFile('lessons/api.htm'));


    // Projects
    $('#pro-win').append(readTextFile('projects/win.htm'));
    $('#pro-web').append(readTextFile('projects/web.htm'));
    $('#pro-some').append(readTextFile('projects/some.htm'));

    //window.scrollTo(0,0);

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