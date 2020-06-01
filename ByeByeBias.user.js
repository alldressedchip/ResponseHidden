// hi
// this is the main script for redacting info on lever forms
// this version of the extension is a tweaked version of my
// original extension 'ByeByeBias' which was used to hide/toggle
// info on Lever forms for the Talent Growth team specifically

// this makes sure stuff has loaded in before we run the script
// as there were issues with the server getting mad at us
// for adding stuff before it was there
setInterval (function(){
    if ($('#resumepreview').length == 0) {
        drawButtons();
    }
}, 100);

// this tells the program to draw the buttons on screen and which thingies it should hide
// and draw a button over
function drawButtons () {  
            redact("Response Hidden",  $(".story-body"));   
}

// this removes all of the buttons
function deleteButtons () {
    $(".biasButton").remove();
}

// this is the function to actually redact a thingy, it needs some text to display on the button
// and which element on Lever to find and replace
function redact(btnText, elem) {
    
    // you can select custom colours for the buttons :)
    // we will keep this feature because it's fun and also lets the user
    // redraw the buttons if something goes wrong
    chrome.storage.sync.get(['btnColour'], function(result) {
        var colour = '#60cb9f';
        if (result.btnColour) {
            colour = result.btnColour
        }
        console.log('Loaded Colour is ' + result.btnColour);
        var btn = $( '<button class = "biasButton" id="resumepreview" type="button" style="background-color: '+colour+'; margin-bottom: 5px; border-color: #f9f9f9; font-size: 14px; padding: 6px 6px; color: white; text-align: center;">'+btnText+'</button>' );
    btn.insertBefore(elem);
    elem.hide();
    });
}

// this is a listener, always listening, waiting... wondering when you may need to delete and re-draw
// the buttons using the GUI popup because something messed up
chrome.storage.onChanged.addListener(function(result) {
    deleteButtons();
    drawButtons();
})