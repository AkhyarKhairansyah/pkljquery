 $(document).ready(function(){
     $('h1').css('color','red');
     $('p').css('color','blue');
     //selector Class
     $('.judul').css('background-color','green');
     $('.paragraph').css('color','salmon');
     //selector id
     $('#judul').css('border', '2px solid blue');
     $('#paragraph').css('border','2px solid orange');
     $('*').css('background-color','aquamarine');
     $('h4:eq(0)').css('background-color','yellow');
     $('input:submit').css('background-color','#ef5350');
     $('input:button').css('padding','10px','background-color','#ef5350',   );
});