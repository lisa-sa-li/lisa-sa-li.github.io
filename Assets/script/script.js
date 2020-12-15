function showProjectImg(name, number) {
    let img = document.getElementById("project-img");
    switch(number) {
        case 0:
            img.style.objectPosition = "top right"
            break;
        case 1:
            img.style.objectPosition = "center";
            break;
        case 2:
            img.style.objectPosition = "top center";
            break;
        default:
            break;
    }
    img.src = `Assets/Images/Projects/HoverImg/${name}.jpg`;
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
    let imageList = ["Hardware.jpg", "Coda.jpg", "Aweary.jpg", "NewHacks.jpg", "Trendr.jpg", "AMS.jpg", "Bike.jpg", "Blackboard.jpg", "Cats.jpg", "Frosh.jpg", "Gameification.jpg", "HOIR.jpg", "HWR.jpg", "iCBT.jpg", "LecExt.jpg", "Matboard.jpg", "QuicKnife.jpg", "Skulebook.jpg", "StepRight.jpg"];
    let path = "Assets/Images/Projects/HoverImg/";
    for (let i = 0; i < imageList.length; i++) {
        let imageObject = new Image();
        imageObject.src = path + imageList[i];
    }
}

function downloadResume(layer, resumeType) {
    if (!["UX", "Software"].includes(resumeType) || ![0, 1, 2].includes(layer)) {
        return;
    }

    let path = "../".repeat(layer)+ "Assets";
    let url = `${path}/Lisa Li Resume - ${resumeType}.pdf`;
    let a = document.createElement("a");
    a.href = url;
    a.setAttribute("Download", `Lisa Li ${resumeType} Resume`);
    let b = document.createEvent("MouseEvents");
    b.initEvent("click", false, true);
    a.dispatchEvent(b);
    return false;
}

function goToPage(name) {
    window.location.href = `projects/${name}.html`;
}

function modalImage(img) {
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
}
