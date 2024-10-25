$(document).ready(function(){
    // Hide effect
    $('#hide').click(function(){
        $('#kotak').hide(1000);
    });

    // Show effect
    $('#show').click(function(){
        $('#kotak').show(2000);
    });

    // Fade Out Effect
    $('#fadeOut').click(function(){
        $('#box1').fadeOut();
        $('#box2').fadeOut(1000);
        $('#box3').fadeOut(2000);
        $('#box4').fadeOut(3000);
    });

    // Fixed Fade In Effect
    $('#fadeIn').click(function(){
        $('#box1').hide().fadeIn();
        $('#box2').hide().fadeIn(1000);
        $('#box3').hide().fadeIn(2000);
        $('#box4').hide().fadeIn(3000);
    });

    // Toggle Effect using fadeToggle
    $('#fadeToggle').click(function(){
        $('#box1').fadeToggle(1000);
        $('#box2').fadeToggle(2000);
        $('#box3').fadeToggle(3000);
        $('#box4').fadeToggle(4000);
    });

    // Fade To Effect
    $('#fadeTo').click(function(){
        $('#box1').fadeTo(1000, 0.2);
        $('#box2').fadeTo(2000, 0.2);
        $('#box3').fadeTo(3000, 0.2);
        $('#box4').fadeTo(4000, 0.2);
    });

    // SlideUp Effect
    $('#slideUp').click(function() {
        $('#slide').slideUp("slow");
    });

    // SlideDown Effect
    $('#slideDown').click(function() {
        $('#slide').slideDown("slow");
    });

    // SlideToggle Effect
    $('#slideToggle').click(function() {
        $('#slide').slideToggle("slow"); // Corrected the id reference
    });

    // Animate Effect: Move Left
    $('#kiri').click(function() {
        $('#animate-box').animate({'left': "-=50px"}, "slow");
    });

    // Animate Effect: Move Right
    $('#kanan').click(function() {
        $('#animate-box').animate({'left': "+=50px"}, "slow");
    });

    // ClearQueue Effect
    $('#start').click(function() {
        $('#clearQueue-Box').animate({left: '+=500'}, 5000);
      
        $('#clearQueue-Box').queue(function(){
          // Your code here (optional)
        });

        $('#stop').click(function() {
          $('#clearQueue-Box').clearQueue();
           $('#clearQueue-Box').stop();
        });
    });

    $("#delay").click(function() {
        $("#kotak-satu").slideUp(2000).delay(6000).slideUp(2000);
        $("#kotak-dua").slideUp(4000).fadeIn(4000);
      });
    
});
