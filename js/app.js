// Create a 4 by 4 array
var grid = [
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x'],
	['x', 'x', 'x', 'x']
];

function main() {
	console.log(grid);
	spawnNewTile();
	spawnNewTile();

	$(document).keyup(function(event) {
		//spawnNewTile();
		switch (event.which) {
			case 37:
				console.log('left was pressed');
				break;
			case 38:
				console.log('up was pressed');
				moveUp();
				break;
			case 39:
				console.log('right was pressed');
				break;
			case 40:
				console.log('down was pressed');
				moveDown();
				break;
			default:
				return;
		}
	});
}

function moveUp() {
	// Go through grid and move all up
	for (var row = 0; row < grid.length; row++) {
		for (var col = 0; col < grid.length; col++) {	
			var curTile = grid[row][col];
			// If not an empty tile
			if (curTile !== 'x') {
				findMaxUp(row, col);
			}
		}
	}
	printGrid();
}

function moveDown() {
	// Go through grid in reverse and move all down
	for (var row = grid.length - 1; row > -1; row--) {
		for (var col = grid.length - 1; col > -1; col--) {	
			var curTile = grid[row][col];
			// If not an empty tile
			if (curTile !== 'x') {
				findMaxDown(row, col);
			}
		}
	}
	printGrid();
}

function findMaxUp(row, col) {
	// Since we're travelling upwards, we don't need to move col, only row
	var tileValue = grid[row][col];

	// If row is already at 0, there's nothing we can do
	if (row === 0) {
		console.log('already at max');
		return;
	}

	var newRow = row - 1;
	var combine = false;
	// If within bounds, and is an unoccupied tile
	while (newRow !== 0 && grid[newRow][col] === 'x') {
		// If not at last row, check if the one on top is occupied 
		if (newRow !== 0 && grid[newRow - 1][col] !== 'x') {
			console.log('collision');
			// Just bootleg implementation
			if (tileValue === grid[newRow - 1][col]) {
				// Add values together
				grid[newRow - 1][col] = tileValue * 2;
				// Change old tile to empty
				grid[row][col] = 'x';
				combine = true;
			}
			break;
		}
		//console.log('checking at: ' + newRow + ',' + col);
		//console.log(grid[newRow][col]);
		newRow--;
	}
	//console.log('empty slot found at ' + newRow + ',' + col);

	if(!combine) {
		// Change old tile to unoccupied
		grid[row][col] = 'x';
		// Occupy new tile instead
		grid[newRow][col] = tileValue;
	}
	console.log('Move from: ' + row + ',' + col + ' to: ' + newRow + ',' + col);
}

function findMaxDown(row, col) {
	// Since we're travelling downwards, we don't need to move col, only row
	var tileValue = grid[row][col];

	// If row is already at 0, there's nothing we can do
	if (row === 3) {
		console.log('already at max');
		return;
	}

	var newRow = row + 1;
	var combine = false;
	// If within bounds, and is an unoccupied tile
	while (newRow !== 3 && grid[newRow][col] === 'x') {
		// If not at last row, check if the one on top is occupied 
		if (newRow !== 3 && grid[newRow + 1][col] !== 'x') {
			console.log('collision');
			// Just bootleg implementation
			if (tileValue === grid[newRow + 1][col]) {
				// Add values together
				grid[newRow + 1][col] = tileValue * 2;
				// Change old tile to empty
				grid[row][col] = 'x';
				combine = true;
			}
			break;
		}
		//console.log('checking at: ' + newRow + ',' + col);
		//console.log(grid[newRow][col]);
		newRow++;
	}
	//console.log('empty slot found at ' + newRow + ',' + col);

	if(!combine) {
		// Change old tile to unoccupied
		grid[row][col] = 'x';
		// Occupy new tile instead
		grid[newRow][col] = tileValue;
	}
	console.log('Move from: ' + row + ',' + col + ' to: ' + newRow + ',' + col);
}

function spawnNewTile() {
	// Get random unoccupied space
	console.log("New tile spawned on: " + getRandomAvailTile());
	printGrid();
}

function getRandomAvailTile() {
	var success = false;
	var tile = [99, 99];

	while (!success && hasMovesLeft()) {
		// Get random row and column
		var randRow = Math.floor(Math.random() * 4);
		var randCol = Math.floor(Math.random() * 4);
		// Get current tile
		var curTile = grid[randRow][randCol];

		// If tile is available
		if (curTile === 'x') {
			success = true;						// We have succeeded
			grid[randRow][randCol] = 2;		// Change grid to taken
			tile = [randRow, randCol];			// Set tile to return
		}
	}

	return tile;
}

function hasMovesLeft() {
	var hasMoves = false;
	
	// Go through grid
	for (var row = 0; row < grid.length; row++) {
		for (var col = 0; col < grid.length; col++) {	
			// If there is an available tile, means there is a move left
			if (grid[row][col] === 'x') {
				hasMoves = true;
				return hasMoves;
			}
		}
	}

	// If we reach here, it means there are no moves left
	console.log("No more available moves, player loses!	")
	return hasMoves;
}

function printGrid() {
	// Storing grid here
	var printedGrid = "";
	for (var row = 0; row < grid.length; row++) {
		printedGrid += "["
		for (var col = 0; col < grid.length; col++) {	// We can do this because they are of same size
			printedGrid += grid[row][col];
			// If not on last column
			if (col != grid.length - 1) {
				printedGrid += ","
			}
		}
		printedGrid += "]\n";
	}

	console.log(printedGrid);
}

$(document).ready(main);