
$(document).ready(function ($) {
	$('.popup-open').click(function () {
		$('.popup-overlay').fadeIn();
		return false;
	});
	// Клик по ссылке "Закрыть".
	$('.popup-close').click(function () {
		$(this).parents('.popup-overlay').fadeOut();
		return false;
	});
	// Клик по фону, но не по окну.
	$('.popup-overlay').click(function (e) {
		if ($(e.target).closest('.popup-modal').length == 0) {
			$(this).fadeOut();
		}
	});
});

$(document).ready(function () {
	$('[data-toggle="popover"]').popover({
		placement: 'top'
	});
	$('.popover-dismiss').popover({
		trigger: 'focus'
	})
});