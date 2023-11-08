"use strict"

let photo = document.querySelector(".photo");
let description = document.querySelector(".description");
let controls = document.querySelector(".controls");


// main menu

function mainMenu(photoEl, descriptionEl, controlsEl) {
    // photo
    let mainMenuImage = document.createElement("img");
    mainMenuImage.src = "./images/startGame.jpg";

    photoEl.appendChild(mainMenuImage);
    mainMenuImage.setAttribute("class", "photo-attributes");

    // description
    let mainMenuDescription = document.createElement("p");

    descriptionEl.appendChild(mainMenuDescription);
    mainMenuDescription.textContent = "Are you ready to escape the dungeon?";
    mainMenuDescription.setAttribute("class", "text-attributes");

    // controls
    let mainMenuControls = document.createElement("button");

    controlsEl.appendChild(mainMenuControls);
    mainMenuControls.textContent = "Start Game";
    mainMenuControls.setAttribute("class", "controls-button");
}

// mainMenu(photo, description, controls)


// hall room

function hallRoom(photoEl, descriptionEl, controlsEl) {
    // photo
    let hallRoomImage = document.createElement("img");
    hallRoomImage.src = "./images/hallRoomImg.jpg";

    photoEl.appendChild(hallRoomImage);
    hallRoomImage.setAttribute("class", "photo-attributes");

    // description
    let hallRoomDescription = document.createElement("p");

    descriptionEl.appendChild(hallRoomDescription);
    hallRoomDescription.textContent = "Which door do you want to open?";
    hallRoomDescription.setAttribute("class", "text-attributes");

    // controls
    let hallRoomControls = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button")
    ]

    controlsEl.appendChild(hallRoomControls[0]);
    controlsEl.appendChild(hallRoomControls[1]);
    controlsEl.appendChild(hallRoomControls[2]);
    controlsEl.appendChild(hallRoomControls[3]);
    controlsEl.appendChild(hallRoomControls[4]);
    hallRoomControls[0].textContent = "Front door";
    hallRoomControls[1].textContent = "Right door";
    hallRoomControls[2].textContent = "Back door";
    hallRoomControls[3].textContent = "Left door";
    hallRoomControls[4].textContent = "Quit game";
    hallRoomControls[0].setAttribute("class", "controls-button");
    hallRoomControls[1].setAttribute("class", "controls-button");
    hallRoomControls[2].setAttribute("class", "controls-button");
    hallRoomControls[3].setAttribute("class", "controls-button");
    hallRoomControls[4].setAttribute("class", "controls-button");
}

// hallRoom(photo, description, controls)

// vampire room

function vampireRoom(photoEl, descriptionEl, controlsEl) {
    // photo
    let vampireImage = document.createElement("img");
    vampireImage.src = "./images/vampire.jpg";

    photoEl.appendChild(vampireImage);
    vampireImage.setAttribute("class", "photo-attributes");

    // description
    let vampireDescription = document.createElement("p");

    descriptionEl.appendChild(vampireDescription);
    vampireDescription.textContent = "Vampire attacked you and killed you!";
    vampireDescription.setAttribute("class", "text-attributes");

    // controls
    let vampireControls = document.createElement("button");

    controlsEl.appendChild(vampireControls);
    vampireControls.textContent = "Quit Game";
    vampireControls.setAttribute("class", "controls-button");
}

// vampireRoom (photo, description, controls);

// fire room

function fireRoom(photoEl, descriptionEl, controlsEl) {
    // photo
    let fireImage = document.createElement("img");
    fireImage.src = "./images/fire.jpg";

    photoEl.appendChild(fireImage);
    fireImage.setAttribute("class", "photo-attributes");

    // description
    let fireDescription = document.createElement("p");

    descriptionEl.appendChild(fireDescription);
    fireDescription.textContent = "You got caught on fire and died!";
    fireDescription.setAttribute("class", "text-attributes");

    // controls
    let fireControls = document.createElement("button");

    controlsEl.appendChild(fireControls);
    fireControls.textContent = "Quit Game";
    fireControls.setAttribute("class", "controls-button");
}

fireRoom(photo, description, controls);









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
