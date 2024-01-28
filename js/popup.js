


let imageBox = document.getElementById("openImg")


function showImg(img){
    var items = [
        {
            src: img, // path to image
            title: ' ' // If you skip it, there will display the original image name(image1)
        }
    ];

// define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0, // this option means you will start at first image
        draggable: false
    };

    // Initialize the plugin
    var photoviewer = new PhotoViewer(items, options);

}