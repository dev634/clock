const hours_hand = document.querySelector(".hand-hour");
const min_hand = document.querySelector(".hand-min");
const sec_hand = document.querySelector(".hand-sec");

const ANGLE_HOUR = 360 / 12;
const ANGLE_MIN = 360 / 60;
const ANGLE_SEC = 360 / 60;

function setTime() {
	const time = new Date();
	let secondes =
		time.getSeconds() >= 0 && time.getSeconds() <= 9
			? "0" + time.getSeconds()
			: time.getSeconds();
	let angleSecondes = 90 + ANGLE_SEC * secondes;
	sec_hand.style.transform = `rotateZ(${angleSecondes}deg)`;
	if (secondes == 0) {
		let minutes = time.getMinutes();
		let angleMinutes = 90 + ANGLE_MIN * minutes;
		min_hand.style.transform = `rotateZ(${angleMinutes}deg)`;

		if (minutes == 0) {
			let hour = time.getHours() - 12;
			let angleHours = 90 + ANGLE_HOUR * hour;
			hours_hand.style.transform = `rotateZ(${angleHours}deg)`;
		}
	}
}

function init() {
	const time = new Date();
	let hour = time.getHours() >= 12 ? time.getHours() - 12 : time.getHours();
	let angleHours = 90 + ANGLE_HOUR * hour;
	let minutes = time.getMinutes();
	let angleMinutes = 90 + ANGLE_MIN * minutes;
	let secondes =
		time.getSeconds() >= 0 && time.getSeconds() <= 9
			? "0" + time.getSeconds()
			: time.getSeconds();
	let angleSecondes = 90 + ANGLE_SEC * secondes;
	hours_hand.style.transform = `rotateZ(${angleHours}deg)`;
	min_hand.style.transform = `rotateZ(${angleMinutes}deg)`;
	sec_hand.style.transform = `rotateZ(${angleSecondes}deg)`;
}

window.addEventListener("load", init);

setInterval(setTime, 1000);