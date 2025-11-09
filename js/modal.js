const modalBtn = document.querySelector('.modal__button');
const orderBtn = document.querySelector(".course__button")
const modal = document.querySelector('.modal');


modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
});
orderBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
});

modal.addEventListener('click', event => {
	const modalContent = event.target.closest('.modal__inner');
	if (!modalContent) {
		modal.style.display = '';
	}
});


const innerModal = document.querySelector(".modal__inner")
innerModal.style.position = "relative"
const btnClose = document.createElement("button")
btnClose.setAttribute("type", "button")
btnClose.style.background = "transparent"
btnClose.style.padding = 0
btnClose.style.position = "absolute"
btnClose.style.top = "12px"
btnClose.style.right = "12px"
const imgClose = document.createElement("img")
imgClose.setAttribute("src", "./img/close.svg")
btnClose.append(imgClose)
innerModal.insertAdjacentElement("afterbegin", btnClose)

btnClose.addEventListener("click", () => {
  modal.style.display = '';
})