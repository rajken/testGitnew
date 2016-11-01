// write your code here
var img = new SimpleImage("hilton.jpg");
print(img);
var w = img.getWidth();
print(w);
var h = img.getHeight();
print(h);
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






