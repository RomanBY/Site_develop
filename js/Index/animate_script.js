/*
animate video-block on scroll*/

$(window).scroll(function () {
    var debugStr = $('#animateVideo').offset().top;
    var debugStrAnm = debugStr - 400;
    /*$('#animateVideo').html(debugStrAnm);*/
    if ($(window).scrollTop() >= debugStrAnm){

    $('.videoAnimate').delay(300).animate({
            opacity: 1,
            bottom: 0
        }, 'slow'
    )};
});

/*
animate feedback-block on scroll*/
$(window).scroll(function () {
    var scrlFB = $('#feedbackForm').offset().top;
    var scrlFBAnm = scrlFB - 500;
    /*$('#feedbackForm').html(scrlFB);*/

    if ($(window).scrollTop() >= scrlFBAnm){

    $('.formEmail').delay(50).animate({
            opacity: 1,
            left: 0
        }, 'slow'
    )
        $('.formPassword').delay(500).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )
        $('.formTitle').delay(900).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )
        $('.formControl').delay(1300).animate({
                opacity: 1,
                left: 0
            }, 'slow'
        )
        $('.formButton').delay(1600).animate({
                opacity: 1,
                bottom: 0
            }, 'slow'
        )
    };
})