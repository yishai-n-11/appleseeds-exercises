const cellarRoomData = {
    connectedLocations: ['main']
};

let selectedLocation = "main"; // dont touch


/*
room data should be filled with the following data:

name: The name of the room (string).
description: A description of the room (string).
items: An array of items available in the room (start with an empty array).
monsters: An array of monster objects (can be empty).
connectedLocations: An array of possible directions the player can go (strings, e.g., "castle", "fields")
the connected names MUST be the same as the folder + html file names.
*/
function initializeLocation() {
    // populate room data object
    // generate items for the room data
    // generate monsters for the room data
}

function selectLocation(e) {
    selectedLocation = e.target.value;
    window.location.href = `../${selectedLocation}/${selectedLocation}.html`;
}

function fightMonster() {
    // get a monster from the monster array - if there is any. select random index from the array, and remove it later.
    // load player data from localStorage
    // while the player live > 0 and monster life bigger than 0 : fight!
    // they take one turn at a time (starter is selected randomly)
    // fight: attacker roles 1-6 (random number) and adds strength.
    // defender life = life - (roll + strength)
    // when the fight is over - alert how won.
}

function searchItems() {
    // search for items in the room data object.
    // get a random item from the array, and remove it from the array (so it cannot be selected again)
    // if its a trap - alert about it, remove 10 hp from the player life. if player life <= 0 - alert end game
    // if its gold - add it to player gold and save in local storage
    // if its junk - do nothing.
}


initializeLocation();