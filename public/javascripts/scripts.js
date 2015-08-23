//  http://Keyvan.FM
//  Info: Handcrafted HTML5/CSS3 project, Don't steal my style, your soul will burn in hell.
// 	Author: Shaho Toofani (http://shaho.info)
// 	Tested in: Windows: IE8, IE9, Firefox 5.0.1, Safari 5.0.5, Opera 11.5, Chrome 14.0.825.0
// 	Last modified: August 12, 2011
//  Revision 05 - Fixed - Rel. Ver.
var ie9 = (navigator.userAgent.indexOf("MSIE 9")>0) ? true : false;
$(function () {
    $('html').removeClass('no-js');
	if (ie9) {
		$('.media-summary p, .counter span, #biograpghy .about em').textShadow();		
	}
	if( $.browser.safari ){
		$('.ktv-shadow').each(function(){
			var target = $(this), after = $('<div class="after"/>').appendTo(target);
			target.addClass('safari');
			after.css( '-webkit-border-radius' , target.width()*0.525 +'px/20px');
		});
	}
	$('.embed, .close').click(function () {
		$('#embed-code').slideToggle('fast');
		$('#embed-url').focus();
		$('#embed-url').select();
		return false;
	});
	$('.tool-tip').poshytip({
		className: 'tip-twitter',
		showTimeout: 1,
		alignTo: 'target',
		alignX: 'center',
		offsetY: 5,
		allowTipHover: false,
		fade: false,
		slide: false
	});
	$('.share-button').jOrbital({ 
		inDuration: 300,
		radius: 1.5
	});
	$('.links, .comment').changeOpacity({
		start_opacity: ".9",
		high_opacity: "1",
		low_opacity: ".2",
		timing: "500"
	});
	$('.button-area').changeOpacity({
		start_opacity: ".9",
		high_opacity: "1",
		low_opacity: ".5",
		timing: "500"
	});
});


