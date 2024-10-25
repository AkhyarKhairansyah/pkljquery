$(document).ready(function() {
    // Click event
    $('#click').click(function() {
        alert('Masih Pemula, ajarin dong puh, Sepuh');
    });

    // Double click event
    $('#dblclick').dblclick(function() {
        $(this).css('background-color', 'aquamarine');
    });

    // Mouse leave event
    $('.mouse').mouseleave(function() {
        $(this).css('background-color', 'cyan');
    });

    // Mouse enter event
    $('.mouse').mouseenter(function() {
        $(this).css('background-color', 'maroon');
    });

    // Keydown event
    $('#keydown').keydown(function() {
        $('#pesan_keydown').text($(this).val());
    });

    // Keyup event (fixed)
    $('#keyup').keyup(function() {
        $('#pesan_up').text($(this).val());  // Corrected the ID here
    });
});
