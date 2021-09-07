Webcam.set({
width:310,
height:300,
image_format :'png',
png_quality:90,

constraints:{
    facingMode:"environment"
}
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getelemenntbyid("result").innerHTML='<img id="capture_image" src="'+data_uri+'"></img>';
        
    });
}