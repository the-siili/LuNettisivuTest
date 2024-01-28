


let desktop = true;

let mainImgPath = "img/portfolio/portfolio-"


var items = [
];







function showImg(img){
    var options={};


    if(desktop){
        options = {
        index: img-1, // load clicked image
        };
    }
    else{
        options = {
            index: img-1, // tload clicked image


            draggable: false
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
      




    
    for(var i = 1; i < 48; i++){
        //console.log(mainImgPath + i + ".webp")
        var newItem = {
            src: mainImgPath + i + ".webp",
            title: ' '
        }
        
    
        items.push(newItem)
    }
  };