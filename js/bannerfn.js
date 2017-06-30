//banner切换封装
module.exports = function(){
	function bnr(father,img,left,right,point){
		var $father=father;
		var $width=$father.width();
		var $point=point;
		var $img=img;
		var $img_s=$("img",$img);
		var $left=left;
		var $right=right;
		var $point_index=0;
		var $img_index=0;
		var onOff=true;
		var timer=null;
		clearInterval(timer);
		$father.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(timer_off,5000);
		})
		timer=setInterval(timer_off,5000);
		$point.mouseover(function(){
			if(onOff){
				onOff=false;
				$img_index=$(this).index();
				$point_index=$(this).index();
				banr_move_img();
			}
		})
		$right.click(function(){
			timer_off();
		})
		$left.click(function(){
			if(onOff){
				onOff=false;
				$img_index--;
				if($img_index<0){
					$img_index=$img_s.length-2;
					$img.css({"left":(($img_index)+1)*-$width});
				}
				$point_index--;
				if($point_index<0){
					$point_index=$point.length-1;
				}
				banr_move_img();
			}
		})
		function banr_btn_img(){
			$img_index++;
			if($img_index>$img_s.length-1){
				$img_index=1;
				$img.css({"left":0});
			}
			$point_index++;
			if($point_index>$point.length-1){
				$point_index=0;
			}
			banr_move_img();
		}
		function banr_move_img(){
			$point.eq($point_index).addClass("first").siblings().removeClass("first");
			$img.animate({"left":$img_index*-$width},1000,function(){
				onOff=true;
			});
		}
		function timer_off(){
			if(onOff){
				onOff=false;
				banr_btn_img();
			}
		}
	}
	return {
		"bnr":bnr
	}
};