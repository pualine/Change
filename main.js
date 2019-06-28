var button = document.getElementById('button');
var rainbow = ["purple", "red", "violet", "indigo", " #5c00e6", "yellow", " #008000", "pink", "orange", "#ff661a" ];

function change() {
	document.body.style.background = rainbow[Math.floor(9*Math.random())];
	// body...
}
button.addEventListener("click", change);

// alert("Hey! is that you?");