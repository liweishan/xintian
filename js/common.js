$(function(){
//	轮播图的函数
	function imgShow(obj,prve,next,n,maginL,page,time){
		var mySwiper = new Swiper(obj, {
	      	pagination: page,
	        prevButton: prve,//向下一页滚动
			nextButton: next,//向上一页滚动
	        paginationClickable: true,
	        slidesPerView: n,
	        spaceBetween: maginL,
			loop: true,   //循环
			onlyExternal: true,//禁止滑动
			autoplay:time, 
		    autoplayDisableOnInteraction : false,  //用户操作后停止
		});	
		$(obj).hover(function(){
		    mySwiper.stopAutoplay();
		},function(){
		    mySwiper.startAutoplay();
		});
	};
//	home页面的轮播图
	imgShow('.home_container','','',1,0,'.home_page',2000)
})
