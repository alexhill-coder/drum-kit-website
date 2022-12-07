// Adds an event listener to all elements that have the drum class i.e. the buttons.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}

// Upon pressing a button it retrieves the button text and uses this to play/animate the correct sound/button.
function handleClick() {

    var buttonTextContent = this.textContent;

    makeSound(buttonTextContent);

    buttonAnimation(buttonTextContent);
}

// Moniters the users actions so when the correct key is pressed the sound/animation for the button activates.
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// The switch function takes in the text of the button pressed to decide which sound to play.
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonTextContect);
            break;
    }
}

// Animates the button by adding a class to the selected button altering its CSS properties. This is then
// removed shortly afterwards restoring it to its original look.
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}