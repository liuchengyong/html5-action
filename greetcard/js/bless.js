function Page(){
	var w = $(window).width();
	var h = $(window).height();
	$("body").css({"width":w,"height":h});
	$("#back1").css({"width":w,"height":h,"opacity":0});
	$(".music").css({"top":h*0.015,"right":w*0.041});
	
	var temp = w/9;
	var temp2 = h/16;
	if(temp.toFixed(2) > temp2.toFixed(2)){
		this.frameHeight = h;
		this.frameWidth = h/16*9;
	}else if(temp.toFixed(2) < temp2.toFixed(2)){
		this.frameWidth = w;
		this.frameHeight = w/9*16;
	}else if(temp.toFixed(2) == temp2.toFixed(2)){
		this.frameWidth = w;
		this.frameHeight = h;
	}
	this.back_left = (w - this.frameWidth)/2;
	this.back_top = (h - this.frameHeight)/2;
	
	
	this.center_x = this.frameWidth/2;
	
	
	
	//炮竹 134*336   0.186*0.262
	this.bianbao_w = this.frameWidth*0.186;
	this.bianbao_h = this.frameHeight*0.262;
	this.bianbao_top = this.frameHeight*0.7;
	//鞭炮的引线 110*225 0.152*0.175
	this.yinxian_w = this.frameWidth*0.152;
	this.yinxian_h = this.frameHeight*0.175;
	this.yinxian_top = this.frameHeight*0.525;
	//鞭炮心 64*54 0.093*0.041  37
	this.bianpaoxin_h = this.bianbao_h*0.160;
	this.bianpaoxin_w = this.bianbao_w*0.477;
	this.bianpaoxin_w_2 = this.yinxian_w*0.420;
	//过年了 185*65 0.257*0.050 top 50
	this.text1_w = this.frameWidth*0.257;
	this.text1_h = this.frameHeight*0.050;
	this.text1_top = this.frameHeight*0.039;
	//嗨社区 201*63 0.279*0.049 top 50+65+50
	this.text2_w = this.frameWidth*0.279;
	this.text2_h = this.frameHeight*0.049;
	this.text2_top = this.frameHeight*0.128;
	
	//祝您   136*65 0.189*0.050 top: 165+63+50
	this.text3_w = this.frameWidth*0.189;
	this.text3_h = this.frameHeight*0.050;
	this.text3_top = this.frameHeight*0.217;
	
	//春节快乐，羊年吉祥  260*153 0.361*0.119 top:278+65+50 
	this.text4_w = this.frameWidth*0.361;
	this.text4_h = this.frameHeight*0.119;
	this.text4_top = this.frameHeight*0.307;
	
	//羊 292*180   0.405*0.119
	this.yang_w = this.frameWidth*0.405;
	this.yang_h = this.frameHeight*0.140;
	this.yang_top = this.frameHeight*0.7;
	
	//back2
	//海社区 409*136  0.568*0.106
	this.back2_hai_w = this.frameWidth*0.568;
	this.back2_hai_h = this.frameHeight*0.106;
	this.back2_hai_top = this.frameHeight*0.6; 
	
	//房子 480*365 0.666*0.285
	this.back2_house_w = this.frameWidth*0.666;
	this.back2_house_h = this.frameHeight*0.285;
	this.back2_house_top = this.frameHeight*0.30;
	
	//羊 277*306  0.384*0.239
	this.back2_yang_w = this.frameWidth*0.384;
	this.back2_yang_h = this.frameHeight*0.239;
	var house= {x:this.center_x-this.back2_house_w/2,y:this.back2_house_top}
	 house.x += this.frameWidth*(140+91)/720;
	 house.y += this.frameHeight*108/1280;
	 this.back2_house_lo1_x = house.x - this.back2_yang_w;
	 this.back2_house_lo1_y = house.y - this.back2_yang_h;
	
	//羊年大吉 279*257 0.387*0.200
	this.back2_ji_w = this.frameWidth*0.387;
	this.back2_ji_h = this.frameHeight*0.200;
	var house1= {x:this.center_x-this.back2_house_w/2,y:this.back2_house_top}
	house1.x += this.frameWidth*341/720-this.back2_ji_w/2;
	house1.y += this.frameHeight*58/1280-this.back2_ji_h;
	this.back2_ji_left = house1.x;
	this.back2_ji_top = house1.y;
 	  
	this.turnUp_w = this.frameWidth*0.072;
	this.turnUp_h = this.frameHeight*0.025;
	this.center_x_2 = w/2;
	this.turnUp_bottom = h*0.015;
	
 	}

$(document).ready(function(e) {
	var page = new Page();
	$("#back").css({"width":page.frameWidth,"height":page.frameHeight,"top":page.back_top,"left":page.back_left});
	$("#back2").css({"width":page.frameWidth,"height":page.frameHeight,"top":page.back_top,"left":page.back_left});
    $("#bianbao").css({"width":page.bianbao_w,"height":page.bianbao_h,
			"top":page.bianbao_top,"left":page.center_x-page.bianbao_w/2});
	$("#yinxian").css({"width":page.yinxian_w,"height":page.yinxian_h,
			"top":page.yinxian_top+page.bianpaoxin_h,"left":page.center_x-page.yinxian_w/2+page.bianpaoxin_w-page.bianpaoxin_w_2});
	$("#yinxian1").css({"width":page.yinxian_w,"height":page.yinxian_h,
			"top":page.yinxian_top+page.bianpaoxin_h,"left":page.center_x-page.yinxian_w/2+page.bianpaoxin_w-page.bianpaoxin_w_2});
	$("#yinxian2").css({"width":page.yinxian_w,"height":page.yinxian_h,
			"top":page.yinxian_top+page.bianpaoxin_h,"left":page.center_x-page.yinxian_w/2+page.bianpaoxin_w-page.bianpaoxin_w_2});
	$("#yinxian3").css({"width":page.yinxian_w,"height":page.yinxian_h,
			"top":page.yinxian_top+page.bianpaoxin_h,"left":page.center_x-page.yinxian_w/2+page.bianpaoxin_w-page.bianpaoxin_w_2});
	$("#text_1").css({"width":page.text1_w,"height":page.text1_h,
			"top":page.text1_top,"left":page.center_x-page.text1_w/2});
	$("#text_2").css({"width":page.text2_w,"height":page.text2_h,
			"top":page.text2_top,"left":page.center_x-page.text2_w/2});
	$("#text_3").css({"width":page.text3_w,"height":page.text3_h,
			"top":page.text3_top,"left":page.center_x-page.text3_w/2});
	$("#text_4").css({"width":page.text4_w,"height":page.text4_h,
			"top":page.text4_top,"left":page.center_x-page.text4_w/2});
	$("#yang").css({"width":page.yang_w,"height":page.yang_h,
			"top":page.yang_top+page.back_top,"left":page.center_x-page.yang_w/2+page.back_left});
	$("#backyang").css({"width":page.yang_w,"height":page.yang_h,
			"top":page.yang_top+page.back_top,"left":page.center_x-page.yang_w/2+page.back_left});
	$("#back2_hai").css({"width":page.back2_hai_w,"height":page.back2_hai_h,
			"top":page.back2_hai_top,"left":page.center_x-page.back2_hai_w/2,"opacity":0});
	$("#back2_house").css({"width":page.back2_house_w,"height":page.back2_house_h,
			"top":page.back2_house_top,"left":page.center_x-page.back2_house_w/2,"opacity":0,});
	$("#back2_yang").css({"width":page.back2_yang_w,"height":page.back2_yang_h,
			"top":page.back2_house_lo1_y,"left":page.back2_house_lo1_x,"opacity":0});
	$("#back2_yangniandaji").css({"width":page.back2_ji_w,"height":page.back2_ji_h,
			"top":page.back2_ji_top,"left":page.back2_ji_left,"opacity":0});	
	$("#turnUp").css({"bottom":page.turnUp_bottom,"width":page.turnUp_w,"height":page.turnUp_h,"left":page.center_x_2-page.turnUp_w/2});
	
	document.getElementById("openmusic").addEventListener('touchstart',stopMusic,false);
	document.getElementById("closemusic").addEventListener('touchstart',startMusic,false);
	
	setTimeout(function(){
		$("#loading").css({"display":"none"});
			firePaoZhu();
			TextAnminate();
			},500);
});

function firePaoZhu(){
	$('#yinxian').animo({animation:"fadeOut", duration:3, keep:true});
	$('#yinxian1').animo({animation:"fadeIn", duration:2, keep:true},function(){
		$('#yinxian').css({"opacity":0});
		$('#yinxian1').animo({animation:"fadeOut", duration:2, keep:true});
		$('#yinxian2').animo({animation:"fadeIn", duration:1, keep:true},function(){
			$('#yinxian2').animo({animation:"fadeOut", duration:2, keep:true});
			$('#yinxian3').animo({animation:"fadeIn", duration:1, keep:true},function(){
				$('#yinxian3').animo({animation:"fadeOut", duration:1, keep:true},function(){
					PaoZha();
					});
				});
			});
		});	
}

function PaoZha(){
	$('#bianbao').animo({animation:["flash"]},function(){
		$('#bianbao').css({"opacity":0});
		yang_skip();
		$("#turnUp").css({"display":"block"});
		$("#turnUp").animo({animation:"bounce",duration:3, iterate: "infinite"});
		document.addEventListener('touchstart',ScreeCut,false);
		});
	}
function TextAnminate(){
	$('#text_1').css({"opacity":1});
	$('#text_1').animo({animation:["zoomInDown"],duration:2, keep:true},function(){
		$('#text_1').animo({animation:"wobble",duration:2, iterate: "infinite"});
		$('#text_2').css({"opacity":1});
		$('#text_2').animo({animation:["zoomInDown"],duration:2, keep:true},function(){
			$('#text_2').animo({animation:"wobble",duration:2, iterate: "infinite"});
			$('#text_3').css({"opacity":1});
			$('#text_3').animo({animation:["zoomInDown"],duration:1, keep:true},function(){
				$('#text_3').animo({animation:"wobble",duration:2, iterate: "infinite"});
				$('#text_4').css({"opacity":1});
				$('#text_4').animo({animation:["zoomInDown"],duration:1, keep:true},function(){
					$('#text_4').animo({animation:"wobble",duration:2, iterate: "infinite"});
					
					});
				});
			});
		});
	}
var isTouch = false;
function yang_skip(){
	$('#text_1').animo("cleanse");
	$('#text_2').animo("cleanse");
	$('#text_3').animo("cleanse");
	$('#text_4').animo("cleanse");
	$('#yang').css({"opacity":1});
	yangTurnleft();
}

function yangTurnleft(){
	$('#yang').css({"opacity":1});
	$('#backyang').css({"opacity":0});
	$('#yang').animo({animation:"swing", duration:2},function(){
		if(isTouch){
			return;	
		}
		yangTurnRight();
		});
}
function yangTurnRight(){
	$('#yang').css({"opacity":0});
	$('#backyang').css({"opacity":1});
	$('#backyang').animo({animation:"swingrig",duration:2},function(){
		if(isTouch){
			return;	
		}
		yangTurnleft();
		});
}


function ScreeCut(){
		if(isTouch){
			return;	
		}
		isTouch = true;
		$("#turnUp").css({"display":"none"});
		$('#backyang').css({"opacity":0,"display":"none"});
		$('#yang').css({"opacity":0,"display":"none"});
		$("#back").css({"left":0,"width":$(window).width(),"background-color":"#F00"});
		$("body").css({"background-color":"#FFF"});
		$("#closemusic").attr("src","img/closeMusic2.png");
		$("#openmusic").attr("src","img/openMusic2.png");
		$("#back").animo({animation:"fadeOutUp", duration:0.5,keep:true},function(){
			$("#back").css({"display":"none"});
			$("#back2").css({"display":"block"});
			$('#back2_house').css({"opacity":1});
			$('#back2_house').animo({animation:"flipInX",duration:1.5},function(){
				$('#back2_yang').css({"opacity":1});
				$('#back2_yang').animo({animation:"bounceInLeft",duration:2},function(){
					$('#back2_yangniandaji').css({"opacity":1});
					$('#back2_yangniandaji').animo({animation:"lightSpeedIn",duration:1},function(){
						$('#back2_yangniandaji').animo({animation:"flipOutY",duration:5});	
						$('#back2_hai').css({"opacity":1});
						$("#back2_hai").animo({animation:"rollIn",duration:1});
						});	
					});
				});	
			});
		$("#back1").css({"display":"block","opacity":1});
	}
function stopMusic(){
	$("#closemusic").css({"opacity":1,"display":"block"});
	$("#openmusic").css({"opacity":0,"display":"none"});
	var audio=document.getElementById("myaudio");
	audio.pause();
}

function startMusic(){
	$("#closemusic").css({"opacity":0,"display":"none"});
	$("#openmusic").css({"opacity":1,"display":"block"});
	var audio=document.getElementById("myaudio");
	audio.play();
}







