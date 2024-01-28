


let imageBox = document.getElementById("openImg")


function showImg(img){
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = img
    expandImg.parentElement.style.display = "block";

}