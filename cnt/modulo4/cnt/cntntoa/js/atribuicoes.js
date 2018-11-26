$(document).ready(function() {
    $('.carousel').carousel({
	  interval: false
	});

	//tooltip bootstrap
	$("[rel=tooltip]").tooltip({ placement: 'top'}); // para tudo que coloca com rel=tooltip e title
	$("[rel=tooltip-left]").tooltip({ placement: 'left'}); // para tudo que coloca com rel=tooltip e title
	$("[rel=tooltip-right]").tooltip({ placement: 'right'}); // para tudo que coloca com rel=tooltip e title
});
