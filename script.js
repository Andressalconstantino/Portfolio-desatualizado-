
$(document).ready(function (){
    /* show about me */
    $('#about').click(function (){
        $('.workA').slideDown();
        $('#aboutMe').css('display', 'flex');
        $('#start').css('display', 'none');
    })

    /* show to about me */
    $('#email-button').click(function (){
        $('.contact-form').slideDown();
        $('#contactMe').css('display', 'flex');
        $('#aboutMe').css('display', 'none');

    })

    /*back to about me */
    $('#contactDown').click(function (){
        $('#aboutMe').css('display', 'flex');
        $('.contact-form').slideUp();
    })

   /*  show works */
    $('#works').click(function (){
        $('.work').css('display', 'flex');
        $('#start').slideUp();
    })

    /* back to start */
    $('#firstUp').click(function (){
        $('#start').slideDown();
        $('.work').css('display', 'none');
    })
    $('#aboutDown').click(function (){
        $('#start').css('display', 'flex');
        $('.workA').slideUp();
    })

})