$(document).ready(function(){

	//header
	$(window).scroll(function() {
		if($(this).scrollTop() > 54) {
			$(".header").addClass('fixed');
		} else {
			$(".header").removeClass('fixed');
		}
	});
	$(window).bind("scroll", function () {
		var h = $(document).scrollTop(),
			j = window.screen.height,
			num = $('.sectionBox').length;
		for( var i = 0; i < num; i++ ){
			var g = $('.sectionBox').eq(i).offset().top;
			if(g - h < 400){
				$('.sectionBox').eq(i).addClass('active');
			}
		};
	});

	//menu
	$(".btn-m-list").click(function(){
		$(".mask").show();
		$(this).addClass('on');
		$(".mob-nav").addClass('on');
	});
	$(".mask,.neirong-close").click(function(){
		$(".mask").hide();
		$(".mob-nav").removeClass('on');
		$(".btn-m-list").removeClass('on');
	});

	$('.subbtn').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on');
			$(this).parent().siblings().removeClass('on');
			$(this).next().slideDown();
			$(this).parent().siblings().find('.submenu').slideUp();
		}else{
			$(this).parent().removeClass('on');
			$(this).next().slideUp();
			$(this).parent().siblings().find('.submenu').slideUp();
		}
		$('.submenu ul li').removeClass('on');
		$('.menuer').slideUp();
	});
	$('.subbtn1').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on');
			$(this).parent().siblings().removeClass('on');
			$(this).next().slideDown();
			$(this).parent().siblings().find('.menuer').slideUp();
		}else{
			$(this).parent().removeClass('on');
			$(this).next().slideUp();
			$(this).parent().siblings().find('.menuer').slideUp();
		}
	});

	/*$('.subbtn').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on').find('.submenu').stop(true,true).slideDown(500);
		}else{
			$(this).parent().removeClass('on').find('.submenu').stop(true,true).slideUp(500);
		}
	});
	$('.subbtn1').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on').find('.menuer').stop(true,true).slideDown();
		}else{
			$(this).parent().removeClass('on').find('.menuer').stop(true,true).slideUp();
		}
	});*/
	$('.nav ul li').hover(function() {
		$(this).addClass('active');
		//$(this).children('.nav-body').stop(true,true).slideDown(500);
	},function() {
		$(this).removeClass('active');
		//$(this).children('.nav-body').slideUp(500);
	});

	// index service
	$('.service-list ul li').hover(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	},function() {
		$('.service-list ul li').removeClass('active');
		//$('.service-list ul li:nth-child(2)').addClass('active');
	});
	$('.application-list ul li').hover(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	},function() {
		$('.application-list ul li').removeClass('active');
		$('.application-list ul li:nth-child(1)').addClass('active');
	});
	/*$(".service-list ul li").hover(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});*/

	// about nav
	$('.nynav .btns').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on');
		}else{
			$(this).parent().removeClass('on');
		}
	});
	$('.nynav .more').click(function(){
		if(!$(this).parent().hasClass('op')){
			$(this).parent().addClass('op');
		}else{
			$(this).parent().removeClass('op');
		}
	});
	$('.mail-navbox .btns').click(function(){
		if(!$(this).parent().hasClass('on')){
			$(this).parent().addClass('on');
		}else{
			$(this).parent().removeClass('on');
		}
	});

	click_tab($('.marketingSms-package .list'),$('#marketingSms-tab1 ul li'),'on');
	click_tab($('.marketingSms-app .box'),$('#marketingSms-tab2 ul li'),'on');
	function click_tab(obj,btn,add_class){
		obj.eq(0).show();
		btn.eq(0).addClass(add_class);
		btn.eq(0).siblings().removeClass(add_class);
		btn.click(function(){
			if(!$(this).hasClass(add_class)){
				$(this).addClass(add_class);
				$(this).siblings().removeClass(add_class);
				obj.hide();
				obj.eq(	$(this).index()).show();
			}

		})
	}

	//GoTop
	$('.GoTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 1000);return false;});

});//end ready

//GoTop
$(window).scroll(function(){

	var scrollt = document.documentElement.scrollTop + document.body.scrollTop;

	if( scrollt >580 ){

		//$(".GoTop").fadeIn(100);
		$(".GoTop").addClass('active');

	}else{

		//$(".GoTop").stop().fadeOut(100);
		$(".GoTop").removeClass('active');

	}

});