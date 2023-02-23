$(document).ready(function(){
	$('.slider').slick({
    centerMode: true,
    centerPadding: '124px',
		arrows:true,
		dots:false,
		slidesToShow:1,
		autoplay:false,
		speed:300,
		autoplaySpeed:800,
    infinite: false,
		// responsive:[
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow:2
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});
  
});