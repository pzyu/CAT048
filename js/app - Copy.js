const animSpd = 100; // Animation speed in ms

var main = function() {
	var active = $('.tile').first();
	var startingPos = $('#grid-12');
	active.css({top: startingPos.position().top, left: startingPos.position().left});
	active.text(startingPos.attr('id'));
	startingPos.addClass('taken-tile');

	var next = active.next();
	var nextPos = $('#grid-13');
	next.css({top: nextPos.position().top, left: nextPos.position().left});
	next.css("background-color", "red");
	next.text(nextPos.attr('id'));
	nextPos.addClass('taken-tile');

	$(document).keyup(function(event) {
		var end = $('.grid-tile').first();
		switch(event.which) {
			case 37:
				console.log('left was pressed');
				$('.tile').each(moveLeft);
				break;
			case 38:
				console.log('up was pressed');
				$($('.tile').get().reverse()).each(moveUp);
				break;
			case 39:
				console.log('right was pressed');
				//$('.tile').each(moveRight);
				$($('.tile').get().reverse()).each(moveRight);
				break;
			case 40:
				console.log('down was pressed');
				$('.tile').each(moveDown);
				break;
			default:
				return;
		};
	});
};

function moveUp() {
	console.log('moving up');
	//console.log(this);
	getTopAtCol($('.tile:contains(' + this.textContent + ')'), this.textContent);
};

function moveDown() {
	console.log('moving down');
	getBtmAtCol($('.tile:contains(' + this.textContent + ')'), this.textContent);
};

function moveLeft() {
	console.log('moving left');
	getTopAtRow($('.tile:contains(' + this.textContent + ')'), this.textContent);
};

function moveRight() {
	console.log('moving right');
	getBtmAtRow($('.tile:contains(' + this.textContent + ')'), this.textContent);
};

function getTopAtCol1(tile, col) {
	console.log("Checking for top at: " + col);
	// If grid 0 not taken
	if (!$('#grid-0').hasClass('taken-tile')) {
		tile.animate({
			top: $('#grid-0').position().top
		}, animSpd);	
		tile.text('grid-0');
		// Add class and remove from current
		$('#grid-0').addClass('taken-tile');
		$('#' + col).removeClass('taken-tile');
	}
};

function getBtmAtCol1(tile, col) {
	console.log("Checking for btm at: " + col);
	if (!$('#grid-12').hasClass('taken-tile')) {
		tile.animate({
			top: $('#grid-12').position().top
		}, animSpd);	
		tile.text('grid-12');
		$('#grid-12').addClass('taken-tile');
		$('#' + col).removeClass('taken-tile');
	}
};

function getTopAtCol(tile, col) {
	console.log("Checking for top at: " + col);
	//console.log(col);
	console.log(tile);
	//console.log(tile);
	// If in first column, check through each
	// And not in grid-0
	// Check for position later
	if (col === 'grid-4' || col === 'grid-8' || col === 'grid-12') {
		// Check if any tile is at grid-0
		if ($('.tile:contains("grid-0")').length === 0) {
			// If no tiles, the move up to that col
			// Move to grid 0 and rename
			tile.animate({
				top: $('#grid-0').position().top
			}, animSpd);	
			tile.text('grid-0');
			$('#grid-0').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-4")').length === 0) {
			tile.animate({
				top: $('#grid-4').position().top
			}, animSpd);
			tile.text('grid-4');
			$('#grid-4').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-8")').length === 0) {
			tile.animate({
				top: $('#grid-8').position().top
			}, animSpd);
			tile.text('grid-8');
			$('#grid-8').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 12");
		}
	}

	if (col === 'grid-5' || col === 'grid-9' || col === 'grid-13') {
		console.log($('.tile:contains("grid-1")'));
		if ($('.tile:contains("grid-1")').length === 0) {
			tile.animate({
				top: $('#grid-1').position().top
			}, animSpd);	
			tile.text('grid-1');
			$('#grid-1').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-5")').length === 0) {
			tile.animate({
				top: $('#grid-5').position().top
			}, animSpd);
			tile.text('grid-5');
			$('#grid-5').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-9")').length === 0) {
			tile.animate({
				top: $('#grid-9').position().top
			}, animSpd);
			tile.text('grid-9');
			$('#grid-9').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 13");
		}
	}

	if (col === 'grid-6' || col === 'grid-10' || col === 'grid-14') {
		if ($('.tile:contains("grid-2")').length === 0) {
			tile.animate({
				top: $('#grid-2').position().top
			}, animSpd);	
			tile.text('grid-2');
			$('#grid-2').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-6")').length === 0) {
			tile.animate({
				top: $('#grid-6').position().top
			}, animSpd);
			tile.text('grid-6');
			$('#grid-6').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-10")').length === 0) {
			tile.animate({
				top: $('#grid-10').position().top
			}, animSpd);
			tile.text('grid-10');
			$('#grid-10').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 14");
		}
	}

	if (col === 'grid-7' || col === 'grid-11' || col === 'grid-15') {
		if ($('.tile:contains("grid-3")').length === 0) {
			tile.animate({
				top: $('#grid-3').position().top
			}, animSpd);	
			tile.text('grid-3');
			$('#grid-3').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-7")').length === 0) {
			tile.animate({
				top: $('#grid-7').position().top
			}, animSpd);
			tile.text('grid-7');
			$('#grid-7').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-11")').length === 0) {
			tile.animate({
				top: $('#grid-11').position().top
			}, animSpd);
			tile.text('grid-11');
			$('#grid-11').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 15");
		}
	}
};

function getBtmAtCol(tile, col) {
	console.log("Checking for btm at: " + col);
	// If in first column, check through each
	if (col === 'grid-0' || col === 'grid-4' || col === 'grid-8') {
		// Check if any tile is at grid-12
		if ($('.tile:contains("grid-12")').length === 0) {
			// If no tiles, the move up to that col
			// Move to grid 0 and rename
			tile.animate({
				top: $('#grid-12').position().top
			}, animSpd);
			tile.text('grid-12');
			$('#grid-12').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-8")').length === 0) {
			tile.animate({
				top: $('#grid-8').position().top
			}, animSpd);
			tile.text('grid-8');
			$('#grid-8').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-4")').length === 0) {
			tile.animate({
				top: $('#grid-4').position().top
			}, animSpd);
			tile.text('grid-4');
			$('#grid-4').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 0");
		}
	}

	if (col === 'grid-1' || col === 'grid-5' || col === 'grid-9') {
		if ($('.tile:contains("grid-13")').length === 0) {
			tile.animate({
				top: $('#grid-13').position().top
			}, animSpd);
			tile.text('grid-13');
			$('#grid-13').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-9")').length === 0) {
			tile.animate({
				top: $('#grid-9').position().top
			}, animSpd);
			tile.text('grid-9');
			$('#grid-9').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-5")').length === 0) {
			tile.animate({
				top: $('#grid-5').position().top
			}, animSpd);
			tile.text('grid-5');
			$('#grid-5').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 1");
		}
	}

	if (col === 'grid-2' || col === 'grid-6' || col === 'grid-10') {
		if ($('.tile:contains("grid-14")').length === 0) {
			tile.animate({
				top: $('#grid-14').position().top
			}, animSpd);
			tile.text('grid-14');
			$('#grid-14').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-10")').length === 0) {
			tile.animate({
				top: $('#grid-10').position().top
			}, animSpd);
			tile.text('grid-10');
			$('#grid-10').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-6")').length === 0) {
			tile.animate({
				top: $('#grid-6').position().top
			}, animSpd);
			tile.text('grid-6');
			$('#grid-6').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 2");
		}
	}

	if (col === 'grid-3' || col === 'grid-7' || col === 'grid-11') {
		if ($('.tile:contains("grid-15")').length === 0) {
			tile.animate({
				top: $('#grid-15').position().top
			}, animSpd);
			tile.text('grid-15');
			$('#grid-15').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-11")').length === 0) {
			tile.animate({
				top: $('#grid-11').position().top
			}, animSpd);
			tile.text('grid-11');
			$('#grid-11').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-7")').length === 0) {
			tile.animate({
				top: $('#grid-7').position().top
			}, animSpd);
			tile.text('grid-7');
			$('#grid-7').addClass('taken-tile');
			$('#' + col).removeClass('taken-tile');
		} else {
			console.log ("Stuck at 3");
		}
	}
}

// Get leftmost
function getTopAtRow(tile, row) {
	console.log("Checking for leftmost at: " + row);
	// If in first column, check through each
	if (row === 'grid-1' || row === 'grid-2' || row === 'grid-3') {
		if ($('.tile:contains("grid-0")').length === 0) {
			tile.animate({
				left: $('#grid-0').position().left
			}, animSpd);
			tile.text('grid-0');
			$('#grid-0').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-1")').length === 0) {
			tile.animate({
				left: $('#grid-1').position().left
			}, animSpd);
			tile.text('grid-1');
			$('#grid-1').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-2")').length === 0) {
			tile.animate({
				left: $('#grid-2').position().left
			}, animSpd);
			tile.text('grid-2');
			$('#grid-2').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 3");
		}
	}

	if (row === 'grid-5' || row === 'grid-6' || row === 'grid-7') {
		if ($('.tile:contains("grid-4")').length === 0) {
			tile.animate({
				left: $('#grid-4').position().left
			}, animSpd);
			tile.text('grid-4');
			$('#grid-4').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-5")').length === 0) {
			tile.animate({
				left: $('#grid-5').position().left
			}, animSpd);
			tile.text('grid-5');
			$('#grid-5').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-6")').length === 0) {
			tile.animate({
				left: $('#grid-6').position().left
			}, animSpd);
			tile.text('grid-6');
			$('#grid-6').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 7");
		}
	}

	if (row === 'grid-9' || row === 'grid-10' || row === 'grid-11') {
		if ($('.tile:contains("grid-8")').length === 0) {
			tile.animate({
				left: $('#grid-8').position().left
			}, animSpd);
			tile.text('grid-8');
			$('#grid-8').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-9")').length === 0) {
			tile.animate({
				left: $('#grid-9').position().left
			}, animSpd);
			tile.text('grid-9');
			$('#grid-9').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-10")').length === 0) {
			tile.animate({
				left: $('#grid-10').position().left
			}, animSpd);
			tile.text('grid-10');
			$('#grid-10').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 11");
		}
	}

	if (row === 'grid-13' || row === 'grid-14' || row === 'grid-15') {
		if ($('.tile:contains("grid-12")').length === 0) {
			tile.animate({
				left: $('#grid-12').position().left
			}, animSpd);
			tile.text('grid-12');
			$('#grid-12').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-13")').length === 0) {
			tile.animate({
				left: $('#grid-13').position().left
			}, animSpd);
			tile.text('grid-13');
			$('#grid-13').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-14")').length === 0) {
			tile.animate({
				left: $('#grid-14').position().left
			}, animSpd);
			tile.text('grid-14');
			$('#grid-14').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 15");
		}
	}
};

// Get rightmost
function getBtmAtRow(tile, row) {
	console.log("Checking for rightmost at: " + row);
	// If in first rowumn, check through each
	if (row === 'grid-0' || row === 'grid-1' || row === 'grid-2') {
		if ($('.tile:contains("grid-3")').length === 0) {
			tile.animate({
				left: $('#grid-3').position().left
			}, animSpd);
			tile.text('grid-3');
			$('#grid-3').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-2")').length === 0) {
			tile.animate({
				left: $('#grid-2').position().left
			}, animSpd);
			tile.text('grid-2');
			$('#grid-2').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-1")').length === 0) {
			tile.animate({
				left: $('#grid-1').position().left
			}, animSpd);
			tile.text('grid-1');
			$('#grid-1').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 0");
		}
	}

	if (row === 'grid-4' || row === 'grid-5' || row === 'grid-6') {
		if ($('.tile:contains("grid-7")').length === 0) {
			tile.animate({
				left: $('#grid-7').position().left
			}, animSpd);
			tile.text('grid-7');
			$('#grid-7').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-6")').length === 0) {
			tile.animate({
				left: $('#grid-6').position().left
			}, animSpd);
			tile.text('grid-6');
			$('#grid-6').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-5")').length === 0) {
			tile.animate({
				left: $('#grid-5').position().left
			}, animSpd);
			tile.text('grid-5');
			$('#grid-5').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 4");
		}
	}

	if (row === 'grid-8' || row === 'grid-9' || row === 'grid-10') {
		if ($('.tile:contains("grid-11")').length === 0) {
			tile.animate({
				left: $('#grid-11').position().left
			}, animSpd);
			tile.text('grid-11');
			$('#grid-11').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-10")').length === 0) {
			tile.animate({
				left: $('#grid-10').position().left
			}, animSpd);
			tile.text('grid-10');
			$('#grid-10').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-9")').length === 0) {
			tile.animate({
				left: $('#grid-9').position().left
			}, animSpd);
			tile.text('grid-9');
			$('#grid-9').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 8");
		}
	}

	if (row === 'grid-12' || row === 'grid-13' || row === 'grid-14') {
		if ($('.tile:contains("grid-15")').length === 0) {
			tile.animate({
				left: $('#grid-15').position().left
			}, animSpd);
			tile.text('grid-15');
			$('#grid-15').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-14")').length === 0) {
			tile.animate({
				left: $('#grid-14').position().left
			}, animSpd);
			tile.text('grid-14');
			$('#grid-14').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else if ($('.tile:contains("grid-14")').length === 0) {
			tile.animate({
				left: $('#grid-13').position().left
			}, animSpd);
			tile.text('grid-13');
			$('#grid-13').addClass('taken-tile');
			$('#' + row).removeClass('taken-tile');
		} else {
			console.log("Stuck at 12");
		}
	}};

function merge(target, source) {

};

function spawnRandomTile() {
	// Create new div to add
	var newTile = $('<div>');
	newTile.addClass('tile');
	$('.col-sm-1').append(newTile);

	// Set position


	newTile.css({top: nextPos.position().top, left: nextPos.position().left});
	newTile.css("background-color", "red");
	newTile.text(nextPos.attr('id'));
};

$(document).ready(main);