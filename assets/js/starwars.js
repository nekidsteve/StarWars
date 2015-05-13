//* =============== WIP UNDER CONSTRUCTION== This houses the for loop that pulls the info from the API ========= *//
var count = 0;
var people = [];

for (var i = 1; i < 3; i += 1) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        people = people.concat(JSON.parse(this.responseText).results);
        //name = JSON.parse(this.responseText).results;
        count++;
        console.log(people);

    }
    xhr.open("GET", "http://swapi.co/api/people/?page" + i);
    xhr.send();
    console.log(xhr);
}

function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}











// {
// 	var data = JSON.parse(name);
// };
// var Post = Parse.Object.extend("");

// var myPost = Parse.Object.extend("");
// Parse.Object.extend("Post");
// var myPost = new Post();

// poop.send();
// console.log(data);
// };
//* ===========================THIS MARKS THE END OF THE BROKEN ASS API SHIT====================//
