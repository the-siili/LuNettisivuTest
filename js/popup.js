


let mainImgPath = "img/portfolio/portfolio-"


var items = [
];







function showImg(img){

    // define options (if needed)
    var options = {
    // optionName: 'option value'
    // for example:
    index: img-1, // this option means you will start at first image
    draggable: false
    };


    // Initialize the plugin
    var photoviewer = new PhotoViewer(items, options);

}



window.onload = (event) => {
    
    for(var i = 1; i < 48; i++){
        //console.log(mainImgPath + i + ".webp")
        var newItem = {
            src: mainImgPath + i + ".webp",
            title: ' '
        }
        
    
        items.push(newItem)
    }
  };