var main = function() {
	$(document).keydown(function(event) {

		switch(event.which) {
			case 37:
				console.log('left was pressed');
				var currentTile = $('.active-tile');
				var prevTile = currentTile.prev();

				currentTile.removeClass('active-tile');
				currentTile.addClass('tile');
				prevTile.addClass('active-tile');
				break;
			case 38:
				console.log('up was pressed');
				break;
			case 39:
				console.log('right was pressed');

				var currentTile = $('.active-tile');
				var nextTile = currentTile.next();

				currentTile.removeClass('active-tile');
				currentTile.addClass('tile');
				nextTile.addClass('active-tile');
				break;
			case 40:
				console.log('down was pressed');
				break;
			default:
				return;
		};
	});
};

$(document).ready(main);