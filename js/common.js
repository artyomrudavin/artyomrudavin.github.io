$(function() {

	var modal = $('.modal-mask');

	$('.recipe-btn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function(e) {
		modal.addClass('hide');
	});

	$(modal).on('click', function() {
		modal.addClass('hide');
	});

});

$(function() {

	var litreVal = $('.litre-val'),
		charImg = $('.char-img img'),
		weight = $('#weight');

	var twelveTank = {
		urlA: 'img/12/12.jpg',
		urlC: 'img/12/12c.jpg',
		urcS: 'img/12/12s.jpg',
		urcCs: 'img/12/12cs.jpg',
		urcT: 'img/12/tank-12.jpg',
		weightA: '7 кг',
		weightC: '8 кг',
		weightS: '9 кг',
		weightCs: '10 кг',
		weightT: '6 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5'
	};

	var twentyTank = {
		urlA: 'img/20/20.jpg',
		urlC: 'img/20/20c.jpg',
		urcS: 'img/20/20s.jpg',
		urcCs: 'img/20/20cs.jpg',
		urcT: 'img/20/tank-20.jpg',
		weightA: '8 кг',
		weightC: '8 кг',
		weightS: '9 кг',
		weightCs: '10 кг',
		weightT: '6 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5'
	};

	var thirtyTank = {
		urlA: 'img/30/30.jpg',
		urlC: 'img/30/30c.jpg',
		urcS: 'img/30/30s.jpg',
		urcCs: 'img/30/30cs.jpg',
		urcT: 'img/30/tank-30.jpg',
		weightA: '10 кг',
		weightC: '8 кг',
		weightS: '9 кг',
		weightCs: '10 кг',
		weightT: '6 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5'
	};

	var fiftyTank = {
		urlA: 'img/50/50.jpg',
		urlC: 'img/50/50c.jpg',
		urcS: 'img/50/50s.jpg',
		urcCs: 'img/50/50cs.jpg',
		urcT: 'img/50/tank-50.jpg',
		weightA: '12 кг',
		weightC: '8 кг',
		weightS: '9 кг',
		weightCs: '10 кг',
		weightT: '6 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5'
	};
	$(litreVal).on('click', function (event) {

		event.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');
		
		var id = event.target.id;

		if ( event.target.id === "twelveTank" ) {

			charImg.attr('src', eval (id + '.urlA') );
			weight.text( eval (id + '.weightA') );

		} else if ( event.target.id === 'twentyTank' ) {

			charImg.attr('src', eval (id + '.urlA') );
			weight.text( eval (id + '.weightA') );

		} else if ( event.target.id === 'thirtyTank' ) {

			charImg.attr('src', eval (id + '.urlA') );
			weight.text( eval (id + '.weightA') );

		} else if ( event.target.id === 'fiftyTank' ) {

			charImg.attr('src', eval (id + '.urlA') );
			weight.text( eval (id + '.weightA') );
		}



	});


});
