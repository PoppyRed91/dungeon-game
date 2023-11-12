// let rooms = [
//     {
//         name: 'main',
//         image: '...',
//         description: '',
//         buttons: [
//             {
//                 value: 'Left door',
//                 action: function () {
//                     renderRoom(rooms[1])
//                 }
//             }
//         ]
//     }
// ]

// function renderRoom(room) {
//     let roomEl = document.getElementById('room');
//     roomEl.innerHTML = '';

//     let imageEl = document.createElement('img');
//     imageEl.src = room.image;

//     roomEl.append(imageEl);

//     for (let button of room.buttons) {
//         let buttonEl = document.createElement('button');
//         button.textContent = button.value;
//         buttonEl.addEventListener('click', button.action);

//     }
// }