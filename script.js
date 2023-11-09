"use strict"

let photo = document.querySelector(".photo");
let description = document.querySelector(".description");
let controls = document.querySelector(".controls");

let hasKey = false;


function removeChildren(photoEl, descriptionEl, controlsEl) {
    while (photoEl.hasChildNodes()) {
        photoEl.removeChild(photoEl.lastChild)
    };
    while (descriptionEl.hasChildNodes()) {
        descriptionEl.removeChild(descriptionEl.lastChild)
    };
    while (controlsEl.hasChildNodes()) {
        controlsEl.removeChild(controlsEl.lastChild)
    };
}


// main menu

function mainMenu(photoEl, descriptionEl, controlsEl) {
    hasKey = false;
    removeChildren(photoEl, descriptionEl, controlsEl);
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

    mainMenuControls.addEventListener("click", function () {
        hallRoom(photo, description, controls)
    });
}

mainMenu(photo, description, controls);



// hall room

function hallRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
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
    hallRoomControls[4].textContent = "Retry";
    hallRoomControls[0].setAttribute("class", "controls-button");
    hallRoomControls[1].setAttribute("class", "controls-button");
    hallRoomControls[2].setAttribute("class", "controls-button");
    hallRoomControls[3].setAttribute("class", "controls-button");
    hallRoomControls[4].setAttribute("class", "controls-button");

    hallRoomControls[0].addEventListener("click", function () {
        vampireRoom(photo, description, controls);
    });

    hallRoomControls[1].addEventListener("click", function () {
        fireRoom(photo, description, controls);
    });

    hallRoomControls[2].addEventListener("click", function () {
        if (hasKey) {
            tableRoom(photo, description, controls);
        }
        else {
            keyRoom(photo, description, controls);
        }
    });

    hallRoomControls[3].addEventListener("click", function () {
        if (hasKey) {
            youWon(photo, description, controls);
        }
        else {
            lockedRoom(photo, description, controls);
        }
    });

    hallRoomControls[4].addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// hallRoom(photo, description, controls)


// vampire room

function vampireRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
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
    vampireControls.textContent = "Retry";
    vampireControls.setAttribute("class", "controls-button");

    vampireControls.addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// vampireRoom (photo, description, controls);


// fire room

function fireRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
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
    fireControls.textContent = "Retry";
    fireControls.setAttribute("class", "controls-button");

    fireControls.addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}


// fireRoom(photo, description, controls);

function keyRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
    // photo
    let keyImage = document.createElement("img");
    keyImage.src = "./images/tableKey.jpg";

    photoEl.appendChild(keyImage);
    keyImage.setAttribute("class", "photo-attributes");

    // description
    let keyDescription = document.createElement("p");

    descriptionEl.appendChild(keyDescription);
    keyDescription.textContent = "You have found the key on the table!";
    keyDescription.setAttribute("class", "text-attributes");

    // controls

    let keyRoomControls = [
        document.createElement("button"),
        document.createElement("button"),
        document.createElement("button"),
    ]

    controlsEl.appendChild(keyRoomControls[0]);
    controlsEl.appendChild(keyRoomControls[1]);
    controlsEl.appendChild(keyRoomControls[2]);

    keyRoomControls[0].textContent = "Take the key.";
    keyRoomControls[1].textContent = "Back to the main hall.";
    keyRoomControls[2].textContent = "Retry.";

    keyRoomControls[0].setAttribute("class", "controls-button");
    keyRoomControls[1].setAttribute("class", "controls-button");
    keyRoomControls[2].setAttribute("class", "controls-button");


    keyRoomControls[0].addEventListener("click", function () {
        hasKey = true;
        tableRoom(photo, description, controls);
    });

    keyRoomControls[1].addEventListener("click", function () {
        hallRoom(photo, description, controls);
    });

    keyRoomControls[2].addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// keyRoom(photo, description, controls);


function tableRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
    // photo
    let tableImage = document.createElement("img");
    tableImage.src = "./images/table.jpg";

    photoEl.appendChild(tableImage);
    tableImage.setAttribute("class", "photo-attributes");

    // description
    let tableDescription = document.createElement("p");

    descriptionEl.appendChild(tableDescription);
    tableDescription.textContent = "There is nothing here!";
    tableDescription.setAttribute("class", "text-attributes");

    // controls

    let tableControls = [
        document.createElement("button"),
        document.createElement("button"),
    ]

    controlsEl.appendChild(tableControls[0]);
    controlsEl.appendChild(tableControls[1]);

    tableControls[0].textContent = "Back to the main hall.";
    tableControls[1].textContent = "Retry.";

    tableControls[0].setAttribute("class", "controls-button");
    tableControls[1].setAttribute("class", "controls-button");

    tableControls[0].addEventListener("click", function () {
        hallRoom(photo, description, controls);
    });

    tableControls[1].addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// tableRoom(photo, description, controls);


// locked door

function lockedRoom(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);


    // photo
    let lockedImage = document.createElement("img");
    lockedImage.src = "./images/startGame.jpg";

    photoEl.appendChild(lockedImage);
    lockedImage.setAttribute("class", "photo-attributes");

    // description
    let lockedDescription = document.createElement("p");

    descriptionEl.appendChild(lockedDescription);
    lockedDescription.textContent = "The door is locked!";
    lockedDescription.setAttribute("class", "text-attributes");

    // controls

    let lockedControls = [
        document.createElement("button"),
        document.createElement("button"),
    ]

    controlsEl.appendChild(lockedControls[0]);
    controlsEl.appendChild(lockedControls[1]);

    lockedControls[0].textContent = "Back to the main hall.";
    lockedControls[1].textContent = "Retry.";

    lockedControls[0].setAttribute("class", "controls-button");
    lockedControls[1].setAttribute("class", "controls-button");

    lockedControls[0].addEventListener("click", function () {
        hallRoom(photo, description, controls);
    });

    lockedControls[1].addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// lockedRoom(photoEl, descriptionEl, controlsEl)


// You won

function youWon(photoEl, descriptionEl, controlsEl) {

    removeChildren(photoEl, descriptionEl, controlsEl);
    // photo
    let youWonImage = document.createElement("img");
    youWonImage.src = "./images/startGame.jpg";

    photoEl.appendChild(youWonImage);
    youWonImage.setAttribute("class", "photo-attributes");

    // description
    let youWonDescription = document.createElement("p");

    descriptionEl.appendChild(youWonDescription);
    youWonDescription.textContent = "You escaped the dungeon!";
    youWonDescription.setAttribute("class", "text-attributes");

    // controls
    let youWonControls = document.createElement("button");

    controlsEl.appendChild(youWonControls);
    youWonControls.textContent = "Play again.";
    youWonControls.setAttribute("class", "controls-button");

    youWonControls.addEventListener("click", function () {
        mainMenu(photo, description, controls);
    });
}

// youWon(photo, description, controls);
