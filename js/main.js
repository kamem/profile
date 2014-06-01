$(function(){

	//--------------------------------------------------
	//	ナビゲーションの位置
	//--------------------------------------------------
	var $navContent = $('#header,#profile,#jquery');
	for(var i = 0;i < $navContent.length;i++) {
		$(window).parallax({
			parallax : $navContent.eq(i),
			type : 'type3',
			startAnimation: function(e){nav(e);},
			endAnimation: function(e){nav(e);},
			contentStartLinePercent: 50
		});
	};
	
	function nav(e) {
		var obj = e.target;
			flg = e.isLine;
		
		$('#gnav li').removeClass('on');
		
		contentNum = flg ? $navContent.index(obj) : $navContent.index(obj) - 1;
		$('#gnav li').eq(contentNum).addClass('on');
	}

	//--------------------------------------------------
	//	1つ目のコンテンツの動きの指定
	//--------------------------------------------------
	$('[class*=awa]').each(function(i){
		//スピードをランダムで指定
		//-2から2までの範囲のスピードを取得
		var randomSpeed = 1 + Math.random() * 2;
			randomSpeed = -randomSpeed;

		//プラグインを使った動きの設定
		$(window).parallax({
			parallax : $(this),
			type : 'type2',
			style : 'top',
			fixPosition : 0,
			speed : randomSpeed,
			adjustment : Number($(this).css('top').replace('px', '')),
			contentStartLinePercent: 50
		});
	});
	$(window).parallax({
		parallax : $('.kame1'),
		type : 'type2',
		style : 'top',
		fixPosition : 0,
		speed : 5,
		adjustment : Number($('.kame1').css('top').replace('px', '')),
		contentStartLinePercent: 50
	});
	$(window).parallax({
		parallax : $('.kame2'),
		type : 'type2',
		style : 'top',
		fixPosition : 0,
		speed : -6,
		adjustment : Number($('.kame2').css('top').replace('px', '')),
		contentStartLinePercent: 50
	});
	
	//--------------------------------------------------
	//	2つ目のコンテンツの動きの指定
	//--------------------------------------------------
	function contentSet() {
		
		var parallaxObj = {};
		$('#profile > section').each(function(i){
		
			parallaxObj[i] = {};
			parallaxObj[i].obj = $(this);
			parallaxObj[i].tagMotions = {}
			
			
			var contentTop = $(this).offset().top;
			console.log(contentTop);
			
			parallaxObj[i].tagMotions.motion1 = [{
				start : contentTop - 400,
				end : contentTop - 200,
				fromStyle : {
					opacity : 0
				},
				toStyle : {
					opacity : 1
				},
				easing : 'liner'
			}];
		});
		
		$(window).parallax({
			parallax : parallaxObj
		});
	};
	
	$('#profile > section').each(function(i){
		$(window).parallax({
			parallax : $(this),
			type : 'type2',
			style : 'background-positionTop',
			fixPosition : $('#profile').offset().top,
			speed : 4,
			adjustment : 10,
			contentStartLinePercent: 50
		});
	});
	
	
	contentSet();
	$(window).bind("resize",function(){
		contentSet();
	});
	//--------------------------------------------------
	//	3つ目のコンテンツの動きの指定
	//--------------------------------------------------
	$(window).parallax({
		parallax : $('#jquery .parts1'),
		type : 'type2',
		style : 'top',
		fixPosition : $('#jquery').offset().top - 200,
		speed : -4,
		adjustment : Number($('#jquery .parts1').css('top').replace('px', '')),
		contentStartLinePercent: 50
	});
	$(window).parallax({
		parallax : $('#jquery .parts2'),
		type : 'type2',
		style : 'top',
		fixPosition : $('#jquery').offset().top - 200,
		speed : 3,
		adjustment : Number($('#jquery .parts2').css('top').replace('px', '')),
		contentStartLinePercent: 50
	});
});