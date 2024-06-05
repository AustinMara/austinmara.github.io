/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */



particlesJS.load('particles-js', 'js/particles/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
  });


   
    $('.banner').mousemove(function(e){
        $("#rocket").css({
            left: e.pageX,
            top: e.pageY
        });
    });
    
    




