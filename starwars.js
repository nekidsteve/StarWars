
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
//API calling?
var numMatches = 2;
var count = 0;
var people = [];

for (var i = 1; i < 3; i += 1) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        people = people.concat(JSON.parse(this.responseText).results);
        name = JSON.parse(this.responseText).results;
        count++;
        if (count == 2) {
        newBoard(people);
      }
    }
    xhr.open("GET", "http://swapi.co/api/people/?page" + i);
    xhr.send();

}

Array.prototype.memory_tile_shuffle = function() {
    var i = this.length,
        j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard() {
    tiles_flipped = 0;
    var output = '';
    people.memory_tile_shuffle();
    for (var i = 0; i < people.length; i++) {
        output += '<div id="tile_' + i + '" onclick="memoryFlipTile(this,\'' + people[i] + '\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val) {
    if (tile.innerHTML == "" && memory_values.length < 2) {
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if (memory_values.length == 0) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);
        } else if (memory_values.length == 1) {
            memory_values.push(val);
            memory_tile_ids.push(tile.id);


            if (memory_values[0] == memory_values[1]) {
                tiles_flipped += 2;
                //first tile cleared
                var tile_1 = document.getElementById(memory_tile_ids[0]);
                var tile_2 = document.getElementById(memory_tile_ids[1]);
                tile_1.style.background = 'none';
                //maybe get rid of numbers
                tile_1.innerHTML.style = "";
                
                //second tile cleared
                tile.style.background = 'none';
                // Clear both arrays
                memory_values = [];
                memory_tile_ids = [];
                // Check to see if the whole board is cleared
                if (tiles_flipped == people.length) {
                    //alert("Board cleared... generating new board");
                    //document.getElementById('memory_board').innerHTML = "";
                    //newBoard();
                }
            } else {
                function flip2Back() {
                    // Flip the 2 tiles back over
                    var tile_1 = document.getElementById(memory_tile_ids[0]);
                    var tile_2 = document.getElementById(memory_tile_ids[1]);
                    tile_1.style.background = 'url(images/images.png) no-repeat';
                    tile_1.innerHTML = "";
                    tile_2.style.background = 'url(images/images.png) no-repeat';
                    tile_2.innerHTML = "";
                    // Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
}
//newBoard();
