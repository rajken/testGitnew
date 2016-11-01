// write your code here
// define a functionn that accepts a single parameter
function swapRedGreen(img){
// define variable as a new image and print it
var img = new SimpleImage(img);
print(img);

// for loop with pixel variable for image values
for (var pixel of img.values()){
// get green pixel and red pixel
    var newG = pixel.getGreen();
    var newR = pixel.getRed();
// swap pixel colour from green to red and red to green    
    if (newG) {
    pixel.setRed(newG);
    }
    
    if (newR) {
    pixel.setGreen(newR);
    }
    }
//print image
print(img);
}
// call the function
 swapRedGreen("smallhands.png");