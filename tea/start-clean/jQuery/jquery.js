
$('.popup-open').click(function () {
	$('.popup-modal').fadeIn();
	$('.popup-overlay').fadeIn()
});

$('.popup-close').click(function () {
	$('.popup-modal').fadeOut()
	$('.popup-overlay').fadeOut()
})

$('.popup-overlay').click(function () {
	$('.popup-modal').fadeOut()
	$('.popup-overlay').fadeOut()
})
