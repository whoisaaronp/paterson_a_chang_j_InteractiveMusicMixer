
// To create go to 'View' > 'Javascript'  and save the file to the folder.
// In safari the drags work, but you can't see the icons.
// defining the functions

// ** DOES TO HAVE A PRELOADER THE SERVER SIDE FOR LATER ON *** //
// variables 

const allowDrop = (e) => {
    e.preventDefault();
};


//  When the music dropped start playing only the sounds YOUR DRAGGING AWESOME!!!!!
const dropSound = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("circle_id");
    const audioTrack = document.querySelector("#"+id+" audio");
    audioTrack.play();
    // This will reveal the the gif on DROP!!
    onFlame.style.display = 'block'

}; 

//shuffle through the images after reset is pressed
const bgImgs = [
    'images/andras-vas-455552-unsplash.jpg',
    'images/beach_bottle.jpg',
    'images/cloudyskyscaper.jpg',
    'images/fabio-ballasina-385482-unsplash.jpg',
    'images/filip-mroz-531492-unsplash.jpg',
    'images/green_leaves.jpg',
    'images/halfmoon_mountain.jpg',
    'images/sky_hole.jpg',
    'images/train_tracks.jpg',
    // etc etc
];

// Prevent default links > grabbing all the audio elements > looping over all the elements > pausing each one.
// Math.random() return a value 0 to 1 (decimals) So It returns random number.
// getrandomIntegre > getting a random number between 0 and the lenght of the 'array' (the images array above) 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// reset button function
const resetSong = (e) => {
    e.preventDefault();
    document.querySelectorAll("audio").forEach((audio, i) => {
        console.log("pausing audio #"+(i+1), audio.parentNode);
        audio.pause();
    });

    const i = getRandomInt(0, (bgImgs.length-1));
    const img = bgImgs[i];
    document.querySelector('.blurBackground').style.backgroundImage = "url("+img+")";
};


// Taking the id of drag to the event as data.
const startDrag = (e) => {
    e.dataTransfer.setData("circle_id", e.target.id);
}

 // main functions 
(() => {

	let aud = document.querySelector('audio')
		tracks = document.querySelectorAll(".trackholder");
	console.log("javascript linked up");

	// Make all music circles draggable  
    document.querySelectorAll(".musicMedia, .melodyMedia").forEach((circle) => {
        circle.setAttribute('draggable', true);
        circle.addEventListener('dragstart', startDrag);
    });


	const dragPanel = document.querySelector('.dragMedia');
    const onFlame = document.getElementById('onFlame');

    // This will hide the gif before you drag 
    onFlame.style.display = "none";
    

    dragPanel.addEventListener('dragover', allowDrop);
    dragPanel.addEventListener('drop', dropSound);
    
    // When the button is clicked used the resetSong function above.
    document.getElementById('resBut').addEventListener('click', resetSong);

	// setup play on 'drop' then add more music on top of the first drop

	// for the drag and drop function to play on drop
	function switchAudioTrack() {
		currentTrack = this.dataset.currenttrack;

		aud.src = `audio/${currentTrack}`;
		aud.load();
		aud.play();
	}

    //console.log("Hello " + firstName);
    console.log("javascript says music is playing");

    // get the button with the id call button
    document.getElementById('button').addEventListener("click", function() {
        document.querySelector('.bgModal').style.display = "flex";
    });

    // create the close function
    document.querySelector('.close').addEventListener("click", function() {
        // this is the function here
        document.querySelector('.bgModal').style.display = "none";
    });



const dropSound = (e) => {
    e.preventDefault();
    alert('Booya!');
};


(() => {


	console.log("javascript linked up");
	// below does the samething.
	// document.querySelectorAll("#musicCon > div, #melodyCon > div").forEach((circle) => {
	// Make all music circles dragable
    document.querySelectorAll(".musicMedia, .melodyMedia").forEach((circle) => {
        circle.setAttribute('draggable', true);
    });

	// // Setup an array for the music mixer ES6 JS 
	// let theMusic =[]

	// // get the music from each section
	// const musicCon = document.querySelector("#musicCon");
	// const melodyCon = document.querySelector("#melodyCon");

	const dragPanel = document.querySelector('.dragMedia');

    dragPanel.addEventListener('dragover', allowDrop);
    dragPanel.addEventListener('drop', dropSound);

	// setup play on 'drop' then add more music on top of the first drop


})(); 