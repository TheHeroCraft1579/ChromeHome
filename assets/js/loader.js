
particlesJS.load("particles-js", "assets/conf/particle.conf.json", function() {
	callback("particles.js config loaded");
});

function loadName() {
	chrome.storage.sync.get("name", data => {
		document.getElementById("name").innerHTML = data.name;
	});
}
loadName();

function updateGreeting() {
	const greeting = currentGreeting();
	document.getElementById("greeting").innerHTML = greeting;
	callback(`changed greeting to '${greeting}'`);
}
setInterval(updateGreeting, 60*1000);
updateGreeting();

function load(id) {
	const elements = document.getElementsByClassName("loader-" + id);
	for (let element of elements) {
		element.classList.remove("loading");
	}
	//callback(`removed loader ${id}`);
}
function startLoading() {
	for (let i = 1; i <= 25; i++) {
		setTimeout(function () {
			load(i);
		}, i * 100);
	}
}
startLoading();


function format(number) {
	return number >= 10 ? "" + number : "0" + number;
}
function updateTime() {
	const date = new Date();
	document.getElementById("clock-day").innerHTML = currentDay();
	document.getElementById("clock-hour").innerHTML = format(date.getHours());
	document.getElementById("clock-minute").innerHTML = format(date.getMinutes());
	document.getElementById("clock-second").innerHTML = format(date.getSeconds());
}
setInterval(updateTime, 100);
updateTime();

setInterval(refreshGit, 30*1000);
refreshGit();