const counterBtn = document.querySelectorAll(".counter-btn[data-counter-btn]");



counterBtn.forEach((el) => {
	el.addEventListener('click', () => {
		let param = el.dataset.counterBtn;
		let val = el.parentElement.children[1].dataset.counterCount;
		if (param == "+") val = +val + 1;
		else if (param == "-" && val > 1) val = +val - 1;
		el.parentElement.children[1].dataset.counterCount = val;
		el.parentElement.children[1].textContent = val;
		console.log(el.parentElement.children[1].textContent);
	})

})
const btn = document.querySelectorAll('.btn-scroll');

btn.forEach((el) => {
	el.addEventListener('click', () => {
		let parent = el.parentElement;
		console.log(el.textContent)
		if (el.textContent == '<') {
			parent.querySelector('.scroll-container').scrollBy({ left: -180, top: 0, behavior: 'smooth' });
		}
		else if (el.textContent == '>') {
			parent.querySelector('.scroll-container').scrollBy({ left: 180, top: 0, behavior: 'smooth' });
		}

	})
})
const container = document.querySelector('.container-basket');
const esc = container.querySelector('.esc');
const body=document.querySelector('body');
esc.addEventListener('click', () => {

	container.style.display = 'none';
	
	body.style.overflowY='scroll';

})
const signInMenu = document.querySelector('.menu__sign-in');
let color=false;
signInMenu.addEventListener('click', () => {
	console.log("push");
	container.style.display = 'block';
	
		body.style.overflowY='hidden';

		

	
})
const autoForm = document.querySelector('#auto');

const pr = document.querySelector('#pr');





