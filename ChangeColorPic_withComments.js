// write your code here
// declare a new variable img and set an image to the variable
var img = new SimpleImage("hilton.jpg");
//print the image
print(img);
// get the width of the image and store it in "w" and print it
var w = img.getWidth();
print(w);
// get the height of the image and store it in "h" and print it
var h = img.getHeight();
print(h);
// write a for loop with pixel as a variable within the images pixel values
//get the pixel x cooridinate value
//compate the x value to be less than 1/3 of width and set color to red, between 1/3
//and 2/3 of width set color to green and greater than 2/3 of width set color to blue
// R = 255, G=255, B=255
//Finally print the image
for (var pixel of img.values()) {
    var x = pixel.getX();
    if (x < w/3) {
        pixel.setRed(255);
        
    }
    
    if (x>w/3 && x<w*2/3){
        pixel.setGreen(255);
    }
    
    if (x>w*2/3) {
        pixel.setBlue(255);
    }
}
print(img);






