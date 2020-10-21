function showProjectImg(name, number) {
    let img = document.getElementById("project-img");

    if (number == 0) { img.style.objectPosition = "top right"; }
    else if (number == 1) { img.style.objectPosition = "center"; }
    else if (number == 2) { img.style.objectPosition = "top center"; }
    img.src = "Assets/Images/Projects/HoverImg/"+ name + ".jpg";
}

// Work in progress
// function showArticleImgs() {
//     let article_div = document.getElementById("article-div");
//     console.log("article_div.scrollTop", article_div.scrollTop)
//     console.log("article_div.scrollHeight", article_div.scrollHeight)

//     let images = ["Aweary", "Aweary-1"]
//     const num_images = images.length

//     let img = document.getElementById("project-img");

//     let img_index = article_div.scrollTop % (article_div.scrollHeight / num_images)
//     console.log("img_index", img_index)


//     img.src = "../Assets/Images/Projects/Aweary/"+ images[img_index] + ".jpg";    
//     // setInterval(showArticleImgs(images), 100000);
// }

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

function downloadResume(layer) {
    let path;

    if (layer == 0) { path = "Assets"; }
    else if (layer == 1) { path = "../Assets"; }
    else if (layer == 2) { path = "../../Assets"; }

    let url = path + "/resume.pdf";
    let a = document.createElement("a");
    a.href = url;
    a.setAttribute("Download", "Lisa Li Resume");
    let b = document.createEvent("MouseEvents");
    b.initEvent("click", false, true);
    a.dispatchEvent(b);
    return false;
}

function goToPage(name) {
    window.location.href = "projects/" + name + ".html";
}

