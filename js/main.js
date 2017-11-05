// EVENT 1: change header title color on mouse hover
// Create global variable hoverBanner and set to the header area
var hoverBanner = document.getElementsByTagName('header')[0];

// Add even lister to hoverBanner that listens for a mouse enter
hoverBanner.addEventListener('mouseenter', function changeBanner() {
    // On mouseenter, add the class jazzedColor to the header text
    var color = document.getElementById('headerP');
    color.classList.add('jazzedColor');
});
