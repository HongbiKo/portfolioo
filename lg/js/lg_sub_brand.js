$(document).ready(function(){
    // 탭메뉴 가로형
    $(".tab ul li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).addClass('on').siblings().removeClass('on');
        $("#"+$(this).data('id')).find('.swiper-container')[0].swiper.update();
        $("#"+$(this).data('id')).find('.swiper-container')[1].swiper.update();
    });

});

var swiper1 = new Swiper(".mySwiper.Subswiper", {
    slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
    breakpoints : {
        640 : {
            slidesPerView: 5,
            spaceBetween: 0,
            loop: true,
            pagination: {
            el: ".swiper-pagination",
            clickable: true,
            }
        }
    }
});