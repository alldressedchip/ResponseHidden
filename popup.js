var pos = 0;
var colours = [
    '#60cb9f', //default lever green
    '#cb608c', //allison pink
    '#60c2cb', //boring blue
    '#9f60cb'  //purple for alex
];

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#colourButton').addEventListener('click', changeColour);
  });

// called when user clicks the button in the pop up to cycle through
// 'pos', changes color of buttons on page
function changeColour(){
    pos = (pos + 1) % 4;
    var btnColour = colours[pos];

    // now we store the button colour so the page can use it
    chrome.storage.sync.set({'btnColour': btnColour}, function() {
        console.log('Button Colour is ' + btnColour);
    });
}