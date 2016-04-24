var m=document.getElementsByClassName('jianjie');
$('.jianjie').click(function()
{
	if(m[0].style.left==0)
	{
		$('.jianjie').animate({left:'25%',top:'1%'},100).css({'-webkit-transform':'rotate(360deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 2s','backgroundImage':'url(/img/jianjie2.jpg)'})    //右上
		$('.jianjie-text').text('前端码农');
	}
	else if (m[0].style.left=='25%')
	{
		$('.jianjie').animate({left:'24%',top:'49%'},300).css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 2s','backgroundImage':'url(/img/jianjie3.jpg)'})  //右下
		$('.jianjie-text').text('单身汪');
	}
	else if (m[0].style.left=='24%')
	{
		$('.jianjie').animate({left:'-25%'},200).css({'-webkit-transform':'rotate(-360deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 2s','backgroundImage':'url(/img/jianjie4.jpg)'})    //左下
		$('.jianjie-text').text('求关爱').css('text-align','right')
	}
	else if (m[0].style.left=='-25%')
	{
		$('.jianjie').animate({left:'-24%',top:'0%'},200).css({'-webkit-transform':'rotate(0deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 2s','backgroundImage':'url(/img/jianjie5.jpg)'})    //左上
		$('.jianjie-text').text('就酱');
	}
	else if (m[0].style.left=='-24%')
	{
		$('.jianjie').animate({left:'0%',top:'25%'},300).css({'-webkit-transform':'rotate(-360deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 1s','backgroundImage':'url(/img/jianjie1.jpg)'})  //居中
		$('.jianjie-text').text('');
	}
	else if (m[0].style.left=='0%')
	{
		$('.jianjie').animate({left:'25%',top:'2%'},300).css({'-webkit-transform':'rotate(360deg)','-webkit-transition':'width 0.1s, height 0.1s, -webkit-transform 2s','backgroundImage':'url(/img/jianjie2.jpg)'})  //右上
		$('.jianjie-text').text('前端码农').css('text-align','left');
	}
	
})