function showProjectImg(name, number) {
    var img = document.getElementById("project-img");

    if (number == 0) { img.style.objectPosition = "top right"; }
    else if (number == 1) { img.style.objectPosition = "center"; }
    else if (number == 2) { img.style.objectPosition = "top center"; }
    img.src = "Assets/Images/Projects/HoverImg/"+ name + ".jpg";
}

// set up text to print, each item in array is new line
var animateText = "sa Li.";
var textPos = 0; // initialise text position
var initContents = ''; // initialise contents variable
var timeOutId = 0;
var firstTime = true;

function typewriter() {
    if (firstTime) {
        initContents =  "Li";
        var destination = document.getElementById("typedtext");
        destination.innerHTML = initContents + animateText.substring(0, textPos);
        if ( textPos < animateText.length) {
            textPos++;
            timeOutId = setTimeout("typewriter()", 130);
        } 
        else if (textPos == animateText.length) {
            firstTime = false;    
        }
    }
}

function untypewriter() {
    while (timeOutId--) {
        clearTimeout(timeOutId);
        console.log(timeOutId);
    }
    setTimeout("timerL()", 130);
}

function timerL() {
    var destination = document.getElementById("typedtext");
    destination.innerHTML = "Li.";
    textPos = 0;
    firstTime = true; 
}


/* Menu */
let myLabels = document.querySelectorAll('.lbl-toggle');

Array.from(myLabels).forEach(label => {
    label.addEventListener('keydown', e => {
        // 32 === spacebar
        // 13 === enter
        if (e.which === 32 || e.which === 13) {
            e.preventDefault();
            label.click();
        };
    });
});


function preloadImg() {
    var imageList = ["AMS.jpg", "Bike.jpg", "Blackboard.jpg", "Cats.jpg", "Frosh.jpg", "Gameification.jpg", "HOIR.jpg", "HWR.jpg", "iCBT.jpg", "LecExt.jpg", "Matboard.jpg", "QuicKnife.jpg", "Skulebook.jpg", "StepRight.jpg"];
    var path = "Assets/Images/Projects/HoverImg/";
    for (var i = 0; i < imageList.length; i++) {
        var imageObject = new Image();
        imageObject.src = path + imageList[i];
    }
}

function downloadResume(layer) {
    var path;

    if (layer == 0) { path = "Assets"; }
    else if (layer == 1) { path = "../Assets"; }
    else if (layer == 2) { path = "../../Assets"; }

    var url = path + "/resume.pdf";
    var a = document.createElement("a");
    a.href = url;
    a.setAttribute("Download", "Lisa Li Resume");
    var b = document.createEvent("MouseEvents");
    b.initEvent("click", false, true);
    a.dispatchEvent(b);
    return false;
}

function goToPage(name) {
    window.location.href = "projects/" + name + ".html";
}

