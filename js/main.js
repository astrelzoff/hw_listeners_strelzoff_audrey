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
