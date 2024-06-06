let imgs = document.querySelectorAll('img');
let buttons = document.querySelectorAll('button');

imgs.forEach((a, i) => {
    a.src = 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif';
});

document.addEventListener('click', function() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ?si=Mz1EN6c_LIw-TS-L';
}, true);