"use strict"

// main menu
//photo

let photo = document.querySelector(".photo");
let mainMenuImage = document.createElement("img");

mainMenuImage.src = "./images/startGame.jpg";

photo.appendChild(mainMenuImage);
mainMenuImage.setAttribute("class", "photo-attributes");

// main menu
// description

let description = document.querySelector(".description");
let mainMenuDescription = document.createElement("p");

description.appendChild(mainMenuDescription);
mainMenuDescription.textContent = "Are you ready to escape the dungeon?";
mainMenuDescription.setAttribute("class", "text-attributes");

// main menu
// controls

let controls = document.querySelector(".controls");
let mainMenuControls = document.createElement("button");

controls.appendChild(mainMenuControls);
mainMenuControls.textContent = "Start Game";
mainMenuControls.setAttribute("class", "controls-button");





/* alert("You need to escape the dungeon!");

let hasKey = false;
let isGameOver = false;

while (isGameOver === false) {
    let input = prompt("Where do you want to go? You can only choose: up, right, down or left. Type exit if you want to exit the game.");

    if (input === "up") {
        alert("Vampire ate you! 🧛");
    }

    else if (input === "right") {
        alert("Fire killed you! 🔥")
    }

    else if (input === "down") {
        if (hasKey == true) {
            alert("There is nothing here.")
        }
        else {
            alert("You found the key 🗝️!")
            hasKey = true;
        }
    }

    else if (input === "exit") {
        isGameOver = true;
        break;
    }

    else if (input === "left") {
        if (hasKey == false) {
            alert("The door is locked! 🚪")
        }
        else if (hasKey === true) {
            alert("You unlocked the door and escaped the dungeon! 👌")
        }

    } else {
        alert("You can only write: up, right, down or left. Type exit if you want to exit the game.")
    }
}

*/
