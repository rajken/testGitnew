// write your code here
// define a function that accepts a single parameter
function swapRedGreen(img){
// define variable as a new image and print it
var img = new SimpleImage(img);
print(img);

// for loop to iterate for the image values
for (var pixel of img.values()){
//if red value is <200 the set R=255,G=255,B=0
if(pixel.getRed() < 200){
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}
    
}
//print image
print(img);
}
// call the function
 swapRedGreen("duke_blue_devil.png");