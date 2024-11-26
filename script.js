jQuery('document').ready(function($){

    var menuBtn = $('.menu-icon');
        menu = $('.navigation ul');

    menuBtn.click(function() {

        if( menu.hasClass('show') ) {
            
            menu.removeClass('show');
        } else{
            menu.addClass('show')
        }

    });
})

const btnSubir = document.querySelector("#btnSubir");
        btnSubir.addEventListener("click", function () {
            $("html,body").animate({ scrollTop: 0 }, "slow");
        })