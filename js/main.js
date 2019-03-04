// This is the intro to javascript. 
// To create go to 'View' > 'Javascript'  and save the file to the folder.

//console.log("Hello " + firstName);
// In safari the drags work, but you can't see the icons.
// defining the funcitons
const allowDrop = (e) => {
    e.preventDefault();
};

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