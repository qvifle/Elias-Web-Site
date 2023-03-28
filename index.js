window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}

// nav

const center = document.getElementById('center')
const right = document.getElementById('right')
const menu = document.getElementById('menu')
const overlay = document.getElementById('overlay')

menu.onclick = () => {
	center.classList.add('center-open')
	right.classList.add('right-open')
	overlay.classList.add('overlay-open')

}
overlay.onclick = () => {
	center.classList.remove('center-open')
	right.classList.remove('right-open')
	overlay.classList.remove('overlay-open')

}

