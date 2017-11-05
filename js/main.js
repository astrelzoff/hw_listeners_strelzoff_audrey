// EVENT 1: change header title color on mouse hover
// Create global variable hoverBanner and set to the header area
var hoverBanner = document.getElementsByTagName('header')[0];

// Add event listener to hoverBanner that listens for a mouse enter
hoverBanner.addEventListener('mouseenter', function changeBanner() {
    // On mouseenter, add the class jazzedColor to the header text
    var color = document.getElementById('headerP');
    color.classList.add('jazzedColor');
});


// EVENT 2: change header title color back on mouse leave
// Add event listener to hoverBanner that listens for a mouse leave
hoverBanner.addEventListener('mouseleave', function () {
    // On mouseleave, remove the class jazzedColor to the header text
    var rmcolor = document.getElementById('headerP');
    rmcolor.classList.remove('jazzedColor');
});


// EVENT 3: Play video on mouse over
// Create global variable player and set to the beeVideo id
var player = document.getElementById('beeVideo');
// Add event listener to player that listens for a click to play video
player.addEventListener('click', function () {
    player.play();
});
// Add event listener to player that listens for a mouseout to pause video
player.addEventListener('mouseout', function () {
    player.pause();
});
// I had the mouseenter and mouseleave working beautifully in firefox but
// it would throw an error in chrome, so this is what I settled on


// EVENT 4: Insert photo into empty paragraph on link click
// Create global variable addBees and set to the link id b1
var addBees = document.getElementById('b1');
// Create a global variable modP and set to the empty div
var modP = document.getElementById('beeD');
// Attach a listener to addBees to hear a click and insert the bees image
// into the empty div
addBees.addEventListener('click', function () {
    modP.innerHTML = '<img src="img/bees.jpg" alt="Bees">';
});
// same as above
var addHoney = document.getElementById('b2');
var modP2 = document.getElementById('beeD');
addHoney.addEventListener('click', function () {
    modP2.innerHTML = '<img src="img/honey.jpg" alt="Honey">';
});
// same as above
var addWax = document.getElementById('b3');
var modP3 = document.getElementById('beeD');
addWax.addEventListener('click', function () {
    modP3.innerHTML = '<img src="img/wax.jpg" alt="Beeswaxy">';
});


//EVENT 5: Change color of image by changing opacity on mouseover
// Create global variable colorize and set to the link id foot1
var colorize1 = document.getElementById('foot1');
// add event listener for mouse enter to colorize1 and invoke a function to
// change the innerHTML to a color image
colorize1.addEventListener('mouseenter', function () {
    colorize1.innerHTML = '<img src="img/google_color.png" alt="Google logo">';
});
// add event listener for mouse leave to colorize1 and invoke a function to
// change the innerHTML to a white image
colorize1.addEventListener('mouseleave', function () {
    colorize1.innerHTML = '<img src="img/google_white.png" alt="Google logo">';
});
// same as above
var colorize2 = document.getElementById('foot2');
colorize2.addEventListener('mouseenter', function () {
    colorize2.innerHTML = '<img src="img/wiki_color.png" alt="Wikipedia logo">';
});
// same as above
colorize2.addEventListener('mouseleave', function () {
    colorize2.innerHTML = '<img src="img/wiki_white.png" alt="Wikipedia logo">';
});
// same as above
var colorize3 = document.getElementById('foot3');
colorize3.addEventListener('mouseenter', function () {
    colorize3.innerHTML = '<img src="img/pixabay_color.png" alt="Pixabay logo">';
});
// same as above
colorize3.addEventListener('mouseleave', function () {
    colorize3.innerHTML = '<img src="img/pixabay_white.png" alt="Pixabay logo">';
});
