      // Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

theImages[0] = 'https://i.imgur.com/mrdR6bm.gif'
theImages[1] = 'https://i.imgur.com/g61hOel.gif'
theImages[2] = 'https://i.imgur.com/NEs33qS.gif'
theImages[3] = 'https://i.imgur.com/yF6c6rp.gif'
theImages[4] = 'https://i.imgur.com/iAoAu2Z.gif'
theImages[5] = 'https://i.imgur.com/tUksM3k.gif'
theImages[6] = 'https://i.imgur.com/w7oWe0X.gif'
theImages[7] = 'https://imgur.com/3EtL1f4.jpg'
// do not edit anything below this line

var i = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'">');
};

