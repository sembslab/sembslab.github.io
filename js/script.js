//event ketika di klik
$('.page-scroll').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top -40
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

//about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

//membuat parallax effect
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron h2').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});

	//membuat efek di portfolio
	if( wScroll > $('.portofolio').offset().top - 200 ) {
		$('.portofolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul')
			}, 400 * (i+1));
		});	
	}

}) 
