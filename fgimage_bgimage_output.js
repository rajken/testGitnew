
// replace the background of fgimage with bgimage in a output image file
// define fore ground image
var fgImage = new SimpleImage("drewRobert.png");
// define back ground image
var bgImage = new SimpleImage("dinos.png");
// define output image
var output = new SimpleImage(fgImage.getWidth(),bgImage.getHeight());

// for loop to iterate on pixels of fgimage values
for (var pixel of fgImage.values()){
// check if green of fgimage is greater then combined red and blue
    if (pixel.getGreen() > pixel.getRed()+pixel.getBlue()) {
        //get the coordinates
        var x = pixel.getX();
        var y = pixel.getY();
        //get the bgimage pixels
        var bgPixel = bgImage.getPixel(x,y);
        //replace the pixel values with bgimage pixel
        output.setPixel(x,y,bgPixel);
    }
    //else replace with the pixel values of fgimage or current image
    else
    {
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
    }
}
//print the images
//print(fgImage);
//print(bgImage);
print(output);