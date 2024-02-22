
let kuvienmäärä = 51;


let desktop = true;

let mainImgPath = "img/portfolio/portfolio-"


var items = [
];







function showImg(img){
    var options={};


    if(desktop){
        options = {
        index: img-1, // load clicked image
        multiInstances: false,
        initMaximized: true
        };
    }
    else{
        options = {
            index: img-1, // tload clicked image
            multiInstances: false,
            initMaximized: true,


            draggable: false,
            resizable:false,
            movable: false,
            keyboard: false
        };
    }


    // Initialize the plugin
    var photoviewer = new PhotoViewer(items, options);

}



window.onload = (event) => {


    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        // true for mobile device
        desktop=false;
      }else{
        // false for not mobile device
        desktop=true;
    }
    console.log(desktop)
      




    
    for(var i = 1; i < kuvienmäärä+1; i++){
        //console.log(mainImgPath + i + ".webp")
        var newItem = {
            src: mainImgPath + i + ".webp",
            title: ' '
        }
        
    
        items.push(newItem)
    }
  };