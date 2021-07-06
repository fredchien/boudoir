// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
$('a[href^="#"]').bind("click.smoothscroll", function(n) {
	n.preventDefault();
	var i = $(window).scrollTop(),
	r = this.hash,
	t = $(r);
	i < 100 ? $("html, body").animate({
		scrollTop: t.offset().top - 70 
	}, 1e3) : $("html, body").animate({
		scrollTop: t.offset().top - 70  
	}, 1e3)
});
$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$(".m_menu").css('top', '0').fadeIn( "slow" );
	} else {
		$(".m_menu").css('top', '-300px').fadeIn( "slow" );
	}

});
$(".slide").vegas({
    slides: [
        { src: "img/slide1.jpg" },
        { src: "img/slide2.jpg" },
        { src: "img/slide3.jpg" },
        { src: "img/slide4.jpg" },
        { src: "img/slide5.jpg" },
        { src: "img/slide6.jpg" },
        { src: "img/slide7.jpg" },
        { src: "img/slide8.jpg" },
        { src: "img/slide9.jpg" },
        { src: "img/slide10.jpg" },
        { src: "img/slide11.jpg" },
        { src: "img/slide12.jpg" },
        { src: "img/slide13.jpg" },
        { src: "img/slide14.jpg" }
    ],
    overlay: 'js/vendor/vegas/overlays/07.png',
    timer: false,
    delay:4000,
    cover: true,
    align: 'center'/*,
    animation: 'random'*/
});
$('section.bgParallax1').each(function(){
	var $obj = $(this);
	 
	$(window).scroll(function() {
		var yPos = -($(window).scrollTop() / $obj.data('speed')); 
 
		var bgpos = '50% '+ yPos + 'px';
 
		$obj.css('background-position', bgpos );
 
	}); 
});
$('.voltarTopo').click(function() {
	$('body,html').animate({
		scrollTop: 0
	}, 600);
});