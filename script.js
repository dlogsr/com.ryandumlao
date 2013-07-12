$(document).ready(function(){
	var $navCat = $('.navCat');
	var $mainBar = $('#mainBar');
	var $nameBar = $('#nameBar');
	var $navBar = $('#navBar');
	var $nameBarH1 = $('#nameBar h1');
	var $nameBarH2 = $('#nameBar h2');
	
	$navCat.click(function() {
		$mainBar.animate({'bottom':0,
					      'width':'100%',
						  'left':0,
						  'margin-left':0},1000);
  		$nameBarH1.animate({'font-size':'3em'},1000);
		$nameBarH2.fadeOut(400);
		//$nameBarH2.animate({'font-size':'.1em','margin-left':'50%'},1000);
		$nameBar.add($navBar).animate({'height':50,'border-bottom-right-radius':0},1000);
		$('#nameBarPrimary').animate({'top':'-40px'},1000);
		$mainBar.removeClass('absolutePos').addClass('fixedPos');
//		$mainBar.css('position','fixed');
		/*$('#nameBarInset').animate({'top':'-120'},1000,function(){
			$nameBarH2.animate({'font-size':'1.5em','margin-left':'55%'},200);
		});*/
//		$mainBar.removeClass('fullBar');
	});
});// JavaScript Document