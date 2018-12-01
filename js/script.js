
/*adaptive height work__container__blick*/
var height = $('.work__container__block').height();
var height2 = height*2;
$('.work__container').css('max-height',height2);


/*skills scroll*/
$(window).scroll(function(){
    if ($(window).scrollTop() > 600) {
        $('.line__progress-1').addClass('line__progress-w1');
        $('.line__progress-2').addClass('line__progress-w2');
        $('.line__progress-3').addClass('line__progress-w3');

        $('.skills_prt-1').animate({ num: 75 - 3 }, {
            duration: 3100,
            step: function (num){
                this.innerHTML = (num + 3).toFixed(0)+'%'
            }
        });
        $('.skills_prt-2').animate({ num: 90 - 3 }, {
            duration: 3100,
            step: function (num){
                this.innerHTML = (num + 3).toFixed(0)+'%'
            }
        });
        $('.skills_prt-3').animate({ num: 65 - 3 }, {
            duration: 3100,
            step: function (num){
                this.innerHTML = (num + 3).toFixed(0)+'%'
            }
        });
    }
});

/*statistics numbers*/
$(window).scroll(function () {
    if ($(window).scrollTop() > 1000){
        $('.static-info-1').animate({num:548 - 3}, {
            duration:3500,
            step: function (num) {
                this.innerHTML= (num + 3).toFixed(0)
            }
        });
        $('.static-info-2').animate({num:1465 - 3}, {
            duration:3500,
            step: function (num) {
                this.innerHTML= (num + 3).toFixed(0)
            }
        });
        $('.static-info-3').animate({num:612 - 3}, {
            duration:3500,
            step: function (num) {
                this.innerHTML= (num + 3).toFixed(0)
            }
        });
        $('.static-info-4').animate({num:735 - 3}, {
            duration:3500,
            step: function (num) {
                this.innerHTML= (num + 3).toFixed(0)
            }
        });
    }

})

/*load more*/

$(document).ready(function () {
    $('#load_btn').click(function () {
        /*$('.work__container').addClass('work__container-height');*/
        $('.work__container').css('max-height','900px');
        $('.work__container__more').addClass('work__container__more-none');
    })
})
