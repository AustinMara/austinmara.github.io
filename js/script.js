/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

var rot = 57;
var mDown = false;
var rocketPosY;
var rocketPosX;
var vectorX;
var vectorY;
$('document').ready(function(){
    particlesJS.load('particles-js', './js/particles/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
  });


   
    


});

$('.banner').mousemove(function(e){
        rot = rocketRotation(e.pageX, e.pageY);
        $("#rocket").css({
            transform: 'rotate('+rot+'deg)',
            // left: e.pageX,
            // top: e.pageY
        });
        // console.log(rocketRotation(e.pageX, e.pageY));
        
        
    });

while(mDown == true){
        
    }    

// $('.banner').mousedown(function (e) { 
//         mDown = true;
//         console.log("mDown = true");
        
//     });

// while(mDown = true){
//     rocketMove();
// }

// $('.banner').mouseup(function (e) { 
//         mDown = false;
//         console.log("mDown = false");
//     });

$('.banner').on('mousedown', function () {
    rocketMove();
});

    



function rocketRotation(mouseX, mouseY){
    rocketPosY = $('#rocket').position().top;
    rocketPosX = $('#rocket').position().left;
    // console.log('X = ' + rocketPosX + '\n Y =' + rocketPosY);

    vectorX = mouseX-rocketPosX;
    vectorY = mouseY-rocketPosY;
    if(Math.sign(vectorY) == -1){
       return -Math.atan(vectorX/vectorY)*180/Math.PI-45; 
    }
    return -Math.atan(vectorX/vectorY)*180/Math.PI - 45 + 180; 

    
     
}

function rocketMove(){

    $('#rocket').animate({top: rocketPosY + vectorY, left: rocketPosX + vectorX}, 'slow', 'swing');
}

function validateForm(){
    let name = document.forms["formContact"]["fname"].value;
    let email = document.forms["formContact"]["femail"].value;
    let tel = document.forms["formContact"]["ftel"].value;
    let comment = document.forms["formContact"]["ftext"].value;
    if(name == ""){
        alert('Name is required');
        return false;
    }
    if(email = ""){
        alert('Email is required');
        return false;
    }
    return true;
}


