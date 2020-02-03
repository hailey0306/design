

function changeimg(element){
    $(".display-image").attr('src', "images/home-images/"+element.title+".png");

	$(".hovered").removeClass("hovered");
	$(element).addClass("hovered").siblings().removeClass("hovered");

}


// (function(){
// 	console.log("HIHIHIHI"); 
	// var rev12 = new RevealFx(document.querySelector('.project-img')),

	// 				trigger_1 = document.getElementByClassName('case-title');
	// 				// trigger_2 = document.getElementById('rev-trigger-2'),
	// 				// trigger_3 = document.getElementById('rev-trigger-3'),
	// 				// trigger_4 = document.getElementById('rev-trigger-4'),
	// 				// trigger_5 = document.getElementById('rev-trigger-5');
				
	// 			trigger_1.addEventListener('mouseover', function() {
	// 				console.log("IN THERE");
	// 				rev12.reveal({
	// 					bgcolor: '#c1c0b7',
	// 					duration: 300,
	// 					onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
	// 					onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; }
	// 				});
	// 	});

// })();
	




// document ready
$(function(){
		//console.log("HIHIHIHI"); 

		
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-62455410-1');

		  $('#toggle').click(function() {
		  	console.log("HI");
		   $(this).toggleClass('active');
		   $('#overlay').toggleClass('open');
		  });


		$('.animate-scroll a[href*="#"]').on('click', function(e) {
			if(!$($(this).attr('href')).offset()) return;
			e.preventDefault();
			$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
			});






		  var changeClass = function() {
		    var sw = document.body.clientWidth;
		    if (sw < 480) {
		      $('.row').removeClass('gutters');
		    } else if (sw >= 481) {
		      $('.row').addClass('gutters-small');
		    };
		  };
		  $(window).resize(function(){
		    changeClass();
		  });
		  //Fire it when the page first loads:
		  changeClass();


		$('.sidenav a').on('click', function() {

		    var scrollAnchor = $(this).attr('data-scroll'),
		        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

		    $('body,html').animate({
		        scrollTop: scrollPoint
		    }, 500);

		    return false;
		});

		

		$(window).scroll(function() {
		    var windscroll = $(window).scrollTop();
		    if (windscroll >= 100) {
		        
		        $('body>section, .section-color>section').each(function(i) {
		            if ($(this).position().top <= windscroll + 100) {
		                $('.side-nav a.on-section').removeClass('on-section');
		                $('.side-nav a').eq(i).addClass('on-section');
		                var bgcolor = $("body>section, .section-color>section").eq(i).parent().css("background-color");

						if (bgcolor == "rgba(0, 0, 0, 0)" || bgcolor == "rgb(244, 244, 244)" || bgcolor == "rgb(242, 242, 242)" || bgcolor == "rgb(238, 238, 238)" || bgcolor == "rgb(255, 215, 0)"){
							$(".side-nav").removeClass('white-nav');

						} else {
							$(".side-nav").addClass('white-nav');
							console.log(bgcolor);
							
							
						}
		            }
		        });

		    } else {

		        // $('.side-nav').removeClass('fixed');
		        $('.side-nav a.on-section').removeClass('on-section');
		        $('.side-nav a:first').addClass('on-section');
		    }
		    

		}).scroll();

		

		$(document).on("mouseenter",".the-cases li",function(){
			changeimg(this);
			
			//ref
		});

		$(document).on("mouseenter",".the-cases li:odd",function(){
			$("#square").css("border-color","#2A9E80");
		});

		$(document).on("mouseenter",".the-cases li:even",function(){
			$("#square").css("border-color","#f15e57");
		});

		$('.pages a').each(function() {
			if ($(this).prop('href') == window.location.href) {
    		$(this).addClass('active');
    		console.log("here");
    		}
  		});

		$('.single-item').slick();
		$(".lazy").slick({
			dots: true,
	        lazyLoad: 'ondemand', // ondemand progressive anticipated
	        infinite: true
	    });

		$('.chocolat-parent').Chocolat();



		// var myImage = $('.bgcolor-image')[0];
		// console.log("myImage",myImage);

		// var colorThief = new ColorThief();
		// var myBackground = colorThief.getColor(myImage,1);


		// $(".project-img").css( "background-color", myBackground )

		// console.log("myBG",myBackground);


		// JS code by Marius Craciunoiu source :https://jsfiddle.net/mariusc23/s6mLJ/31/

		// Hide Header on on scroll down
		// var didScroll;
		// var lastScrollTop = 0;
		// var delta = 5;
		// var navbarHeight = $('header').outerHeight();

		// $(window).scroll(function(event){
		//     didScroll = true;
		// });

		// setInterval(function() {
		//     if (didScroll) {
		//         hasScrolled();
		//         didScroll = false;
		//     }
		// }, 250);

		// function hasScrolled() {
		//     var st = $(this).scrollTop();
		    
		//     // Make sure they scroll more than delta
		//     if(Math.abs(lastScrollTop - st) <= delta)
		//         return;
		    
		//     // If they scrolled down and are past the navbar, add class .nav-up.
		//     // This is necessary so you never see what is "behind" the navbar.
		//     if (st > lastScrollTop && st > navbarHeight){
		//         // Scroll Down
		//         $('header').removeClass('nav-down').addClass('nav-up');
		//     } else {
		//         // Scroll Up
		//         if(st + $(window).height() < $(document).height()) {
		//             $('header').removeClass('nav-up').addClass('nav-down');
		//         }
		//     }
		    
		//     lastScrollTop = st;
		// }




// JS code by Marius Craciunoiu source :https://jsfiddle.net/mariusc23/s6mLJ/31/

		(function($) {
		$(".tab ul.tabs")
			.addClass("active-tab")
			.find("> li:eq(0)")
			.addClass("current");

		$(".tab ul.tabs li a").click(function(g) {
			var tab = $(this).closest(".tab"),
				index = $(this)
					.closest("li")
					.index();

			tab.find("ul.tabs > li").removeClass("current");
			$(this)
				.closest("li")
				.addClass("current");

			tab
				.find(".tab_content")
				.find("div.tabs_item")
				.not("div.tabs_item:eq(" + index + ")")
				.slideUp();
			tab
				.find(".tab_content")
				.find("div.tabs_item:eq(" + index + ")")
				.slideDown();

			g.preventDefault();
		});
	})(jQuery);



})
