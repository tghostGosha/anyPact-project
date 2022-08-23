import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";



// import { Inputmask } from "inputmask";
// import Swiper, { Navigation, Pagination } from 'swiper';
// import JustValidate from 'just-validate';

// Swiper.use([Navigation, Pagination])

flsFunctions.isWebp()
function OpenModalWindow(el){
	CloseModalWindow();
	let modal = $('.modal-block');
	modal.addClass('open');
	el.show();
}

function CloseModalWindow(){
	let modal = $('.modal-block');
	let forms = $('form', modal);
	let formsBlocks = $('.modal-window-content > div', modal)
	modal.removeClass('open');
	forms.each(function(){this.reset()});
	formsBlocks.each(function(){$(this).hide()});
}
$( document ).ready(function (){
	$(document).on('click', '.open-test1', function (){
		OpenModalWindow($('.test1'));
	});
	$(document).on('click', '.open-test2', function (){
		OpenModalWindow($('.test2'));
	});
      $(document).on('click', '.open-test3', function (){
		OpenModalWindow($('.test3'));
	});
      $(document).on('click', '.open-test4', function (){
		OpenModalWindow($('.test4'));
	});
      $(document).on('click', '.open-test5', function (){
		OpenModalWindow($('.test5'));
	});
	$(document).on('click', '.open-test6', function (){
		OpenModalWindow($('.test6'));
	});

	$(document).on('click', '.modal-close, .modal-bg', function (){
		CloseModalWindow();
	});
	$(document).on('click', '.modal-window', function (e){
		e.stopPropagation();
	});
});


$('#manualControl').on('click', function() {
	$('#manualControl').toggleClass('checked') ;
	if($('#manualControl').hasClass('checked')) {
		$('.new-auction-important-block').addClass('active');
		$('.step-down').addClass('disable');
		$('.price-reduction-timer').addClass('disable');
	}else {
		$('.new-auction-important-block').removeClass('active')
		$('.step-down').removeClass('disable');
		$('.price-reduction-timer').removeClass('disable');
	}
})
