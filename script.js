"use strict"

// store divs into variables

let photo = document.querySelector(".photo");
let description = document.querySelector(".description");
let controls = document.querySelector(".controls");

// set the key 

let hasKey = false;

// create allRooms array -> store rooms as dictionaries

let allRooms = [
    { // main menu
        imageSource: "./images/startGame.jpg",
        descriptionText: "You need to escape the dungeon!",
        controlsEl: [
            {
                buttonText: "Start Game",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[1])
                }
            }
        ]
    },

    { // hall room
        imageSource: "./images/hallRoomImg.jpg",
        descriptionText: "Which door do you want to open?",
        controlsEl: [
            {
                buttonText: "Front door",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[2])
                }
            },
            {
                buttonText: "Right door",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[3])
                }
            },
            {
                buttonText: "Back door",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    // 3 -> Key room; 4 -> Table room
                    if (hasKey === true) {
                        renderRoom(allRooms[5])
                    }
                    else {
                        renderRoom(allRooms[4])
                    }

                }
            },
            {
                buttonText: "Left door",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    if (hasKey === true) {
                        renderRoom(allRooms[7])
                    }
                    else {
                        renderRoom(allRooms[6])
                    }
                }
            },
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            },
        ]
    },

    { //vampire room
        imageSource: "./images/vampire.jpg",
        descriptionText: "Vampire killed you.",
        controlsEl: [
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },

    { //fire room
        imageSource: "./images/fire.jpg",
        descriptionText: "Fire killed you.",
        controlsEl: [
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },

    { // key room
        imageSource: "./images/tableKey.jpg",
        descriptionText: "You found the key!",
        controlsEl: [
            {
                buttonText: "Take the key",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    hasKey = true;
                    renderRoom(allRooms[5])
                }
            },
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },

    { //table room
        imageSource: "./images/table.jpg",
        descriptionText: "There is nothing here!",
        controlsEl: [
            {
                buttonText: "Go back to the hall.",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[1])
                }
            },
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },

    { //locked room
        imageSource: "./images/hallRoomImg.jpg",
        descriptionText: "The door is locked!",
        controlsEl: [
            {
                buttonText: "Go back to the hall.",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[1])
                }
            },
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },

    { // you won room
        imageSource: "./images/youWon.jpg",
        descriptionText: "You unlocked the door and escaped the dungeon!",
        controlsEl: [
            {
                buttonText: "Retry",
                buttonClass: "controls-button",
                buttonOnClick: function () {
                    renderRoom(allRooms[0])
                }
            }
        ]
    },
];

// render elements by using key value pairs from all rooms dictionaries

function renderRoom(room) {
    // clear inner htmls of elements (photo, controls, description)

    photo.innerHTML = " ";
    description.innerHTML = " ";
    controls.innerHTML = " ";

    // create image element
    let imageEl = document.createElement("img");
    imageEl.src = room.imageSource;
    imageEl.setAttribute("class", "photo-attributes");
    photo.appendChild(imageEl);


    // create description element

    let descriptionEl = document.createElement("p");
    descriptionEl.innerHTML = room.descriptionText;
    descriptionEl.setAttribute("class", "text-attributes");
    description.appendChild(descriptionEl);

    // create an array of buttons with a for loop

    for (let button of room.controlsEl) {
        let buttonEl = document.createElement("button");
        buttonEl.textContent = button.buttonText;
        buttonEl.addEventListener("click", button.buttonOnClick);
        buttonEl.setAttribute("class", "controls-button");
        controls.appendChild(buttonEl);
    }
}

// render first room 

renderRoom(allRooms[0])



