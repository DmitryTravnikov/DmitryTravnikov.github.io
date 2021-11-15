// Console Log
export let cLog = function(n) {
	return console.log(n);
};

// Prevent Default
function prevdef() {
	let prevdefElems = document.querySelectorAll('.prevdef');

	for (let i = 0; i < prevdefElems.length; i++) {
		prevdefElems[i].addEventListener('click', function(event) {
			event.preventDefault();
		});
	}
}
prevdef();