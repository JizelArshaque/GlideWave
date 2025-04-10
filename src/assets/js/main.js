(function($) {
    "use strict";
    jQuery(document).ready(function($) {
        // wow animation initialization
        new WOW().init();

        // slicknav activate for home 1
        activateSlickNav('#mainMenu', '#mobileMenu');

        // slicknav activate for home 2
        activateSlickNav('#mainMenuHome2', '#mobileMenuHome2');

        // slicknav activate for home 3
        activateSlickNav('#mainMenuHome3', '#mobileMenuHome3');

        // slicknav activate function
        function activateSlickNav(selector, mobileMenu) {
            $(selector).slicknav({
                prependTo: mobileMenu
            });
        }

        // search popup show
        $("li.search-icon a").on('click', function(e) {
            e.preventDefault();
            $(".search-popup").addClass('popup');
        });

        // search popup remove
        $("#searchCloseBtn, .search-popup-overlay").on('click', function() {
            $(".search-popup").removeClass('popup');
        });

        // language dropdown toggle on clicking button
        $('.language a.dropdown-btn').on('click', function(event) {
            event.preventDefault();
            $(this).next('.language-dropdown').toggleClass('open');
        });

        

        

       
    
        
        // quickview product slider with thumbnail
        $('.quickview-slider').owlCarousel({
            autoplay: true,
            autoplayTimeout: 8000,
            smartSpeed: 1500,
            loop: true,
            autoplayHoverPause: true,
            items: 1,
            center: true,
            dots: false,
            thumbs: true,
            thumbImage: false,
            thumbsPrerendered: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
        });

        // Product thumbnail sliders
        $('.product-thumb-slider').owlCarousel({
            loop: false,
            dots: false,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            autoplay: false,
            margin: 5,
            responsive: {
                0: {
                    items: 4
                }
            }
        });

        // product image zoom initialization function
        function initzoom() {
            if ($('.easyzoom').length > 0) {
                var $easyzoom = $('.easyzoom').easyZoom();
            }
        }


        // Product preview
        if ($('.product-details .product-preview').length > 0) {
            let activeSmallSrc = $('.product-details .product-thumb-slider .single-product').eq(0).find('img.small').attr('src');
            let activeBigSrc = $('.product-details .product-thumb-slider .single-product').eq(0).find('img.big').attr('src');
            $('.product-details .product-preview').find('a').attr('href', activeBigSrc);
            $('.product-details .product-preview').find('img').attr('src', activeSmallSrc);

            $('.product-details .product-thumb-slider img.small').on('click', function () {
                let currimg = `<div class="easyzoom easyzoom--overlay">
                                <a href="${$(this).siblings('img.big').attr('src')}">
                                    <img class="single-image" src="${$(this).attr('src')}" alt=""/>
                                </a>
                              </div>`;
                $('.product-details .product-preview').html(currimg);
                initzoom();
            });
        }

        // initialize product image zoom 
        initzoom();        

        // Project details carousel
        $('.project-carousel').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            autoplay: false,
            items: 1
        });  
        
        // show shipping address form if not same as billing address
        if ($('input#sameStatus').length > 0) {
            $('input#sameStatus').on('change', function () {
                if ($('input#sameStatus').prop('checked') == false) {
                    $("#shippingAddress").addClass('d-block');
                } else {
                    $("#shippingAddress").removeClass('d-block');
                }
            });
        }        
        
    });


    


    jQuery(window).on('load', function() {
        // preloader fadeout onload
        $(".loader-container").addClass('loader-fadeout');

        // isotope initialize
        $('.grid').isotope({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.single-pic',
            percentPosition: true,
            masonry: {
                // set to the element
                columnWidth: '.grid-sizer'
            }
        })
    });

}(jQuery));