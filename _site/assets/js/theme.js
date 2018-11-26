;(function($) {
    "use strict";
    
    var nav_offset_top = $('header').height(); 
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed and Back-To-Top button
    function navbarFixed(){
        if ( $('.main_menu_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".main_menu_area").addClass("navbar_fixed");
                } else {
                    $(".main_menu_area").removeClass("navbar_fixed");
                }

                if (scroll <= 300) {
                    $('.back-to-top').addClass('hide');
                } else {
                    $('.back-to-top').removeClass('hide');
                }
            });
        };
    };
    navbarFixed();

    /*-------------------------------------------------------------------------------
      Back To Top click 
    -------------------------------------------------------------------------------*/
    $('body').on('click', '.back-to-top', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    })
    
    /*-------------------------------------------------------------------------------
      Hamburger 
    -------------------------------------------------------------------------------*/
    $('#hamburger').click(function(){
        $(this).toggleClass('open');
        $(this).css("pointer-events", "none");
        setTimeout(function(){
            $('#hamburger').css("pointer-events", "auto");
        }, 500);
    });

    /*----------------------------------------------------*/
    /*  Main Slider js
    /*----------------------------------------------------*/
    function main_slider(){
        if ( $('#main_slider').length ){
            $("#main_slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                disableProgressBar:"on",
                navigation: {
                    onHoverStop: 'off',
                    touch:{
                        touchenabled:"on"
                    },
                    // arrows: {
                    //     style:"normal",
                    //     enable:true,
                    //     hide_onmobile:true,
                    //     hide_under:992,
                    //     hide_onleave:true,
                    //     hide_delay:200,
                    //     hide_delay_mobile:1200,
                    //     left: {
                    //         h_align: "left",
                    //         v_align: "center",
                    //         h_offset: 0,
                    //         v_offset: 0
                    //     },
                    //     right: {
                    //         h_align: "right",
                    //         v_align: "center",
                    //         h_offset: 0,
                    //         v_offset: 0
                    //     }
                    // },
                    bullets: {
                        enable:true,
                        hide_onmobile:true,
                        hide_under:768,
                        style:"hesperiden",
                        hide_onleave:false,
                        direction:"vertical",
                        h_align:"left",
                        v_align:"bottom",
                        h_offset:30,
                        v_offset:400,
                        space:10,
                        tmp: "",
                    },
                },
                responsiveLevels:[4096,1320,1199,992,767,480],
                gridwidth:[1170,1170,960,720,700,300],
                gridheight:[950,950,950,700,500,500],
                lazyType:"smart",
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            })
        }
    }
    main_slider();

    /*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    function testimoninals_carousel(){
        if ( $('.testimonials_slider').length ){
            $('.testimonials_slider').owlCarousel({
                loop:true,
                margin: 130,
                items: 3,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        center: false,
                        margin: 0 
                    },
                    700: {
                        items: 2,
                        center: false,
                        margin: 30 
                    },
                    992: {
                        items: 3,
                        margin: 70,
                    },
                    1200: {
                        items: 3,
                        margin: 130,
                    }
                }
            })
        }
    }
    testimoninals_carousel();

    /*----------------------------------------------------*/
    /*  Shap Slider
    /*----------------------------------------------------*/
    function shap_carousel(){
        if ( $('.shap_slider_inner').length ){
            $('.shap_slider_inner').owlCarousel({
                loop:true,
                margin: 0,
                items: 1,
                nav:false,
                autoplay: false,
                smartSpeed: 1500,
                dots:true,
                center: true
            })
        }
    }
    shap_carousel();

    /*----------------------------------------------------*/
    /*  Skill Bar
    /*----------------------------------------------------*/
    function progressBarConfig () {
	  var progressBar = $('.progress');
	  if(progressBar.length) {
	    progressBar.each(function () {
	      var Self = $(this);
	      Self.appear(function () {
	        var progressValue = Self.data('value');

	        Self.find('.progress-bar').animate({
	          width:progressValue+'%'           
	        }, 1000);

	        Self.find('.number').countTo({
	          from: 0,
	            to: progressValue,
	            speed: 1000
	        });
	      });
	    })
	  }
	}
    progressBarConfig ();
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*----------------------------------------------------*/
    /*  portfolio_isotope
    /*----------------------------------------------------*/
    function home_gallery(){
        if ( $('.ms_portfolio_inner').length ){
            // Activate isotope in container
            $(".ms_portfolio_inner").imagesLoaded( function() {
                $(".ms_portfolio_inner").isotope({
                    itemSelector: '.ms_p_item',
                    layoutMode: 'masonry',
                    percentPosition:true,
                    columnWidth: 1,
                }); 
            }); 
        }
    }
    home_gallery();
    
    /*----------------------------------------------------*/
    /*  Portfolio js
    /*----------------------------------------------------*/
    function portfolio_isotope(){
        if ( $('.portfolio_filter ul li').length ){
            // Add isotope click function
            $(".portfolio_filter ul li").on('click',function(){
                $(".portfolio_filter ul li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".ms_portfolio_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    
    portfolio_isotope();

    $(document).ready(function() {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

    /***ON-LOAD***/
    jQuery(window).on('load', function () {
        $('.preloader').addClass('hide');
        // setTimeout(function(){
        // }, 100);
    });

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox1').length ){
        var $lat = $('#mapBox1').data('lat');
        var $lon = $('#mapBox1').data('lon');
        var $zoom = $('#mapBox1').data('zoom');
        var $marker = $('#mapBox1').data('marker');
        var $info = $('#mapBox1').data('info');
        var $markerLat = $('#mapBox1').data('mlat');
        var $markerLon = $('#mapBox1').data('mlon');
        var map = new GMaps({
        el: '#mapBox1',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#e0efef"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "hue": "#1900ff"
                        },
                        {
                            "color": "#c0e8e8"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 100
                        },
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 700
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#7dcdcd"
                        }
                    ]
                }
            ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            icon: $marker,    
            infoWindow: {
              content: $info
            }
        })
    }
})(jQuery)

