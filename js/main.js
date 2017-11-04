// Create global variable clickMe on h1 tag
var clickMe = document.getElementsByTagName('h1')[0];
// Create global variable myCopy to add created element
var myCopy = document.createElement('p');

// Get body by tag name and append the paragraph myCopy
document.getElementsByTagName('body')[0].appendChild(myCopy);

// Create a global variable called clickcount to be the # of clicks
var clickcount = 0;
// add an event listener for clicks to the clickMe button
clickMe.addEventListener('click', function addP() {
    // Add 1 to the clickcount variable
    clickcount = clickcount + 1;
    // change the inner text each time to say this is the click number + clickcount
    myCopy.innerText = 'This is click number ' + clickcount;
});
