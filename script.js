$(document).ready(function(){
	var $navCat = $('.navCat');
	var $mainBar = $('#mainBar');
	var $nameBar = $('#nameBar');
	var $navBar = $('#navBar');
	var $nameBarH1 = $('#nameBar h1');
	var $nameBarH2 = $('#nameBar h2');
	var $paragraph = $('#paragraph');
	
	$navCat.click(function() {
		$mainBar.animate({'bottom':0,
					      'width':'600px',
						  'left':0,
						  'margin-left':0},1000);
  		$nameBarH1.animate({'font-size':'3em'},1000);
		$nameBarH2.fadeOut(400);
		$navBar.animate({'border-top-right-radius':'25px'},100);
		$navBar.add($nameBar).animate({'height':'50px',
									   'border-bottom-right-radius':0,
									   'border-top-left-radius':0,},1000);
		$('#nameBarPrimary').animate({'top':'-40px'},1000);
		$mainBar.removeClass('absolutePos').addClass('fixedPos');
		$paragraph.removeClass('hidden');

	});
});// JavaScript Document