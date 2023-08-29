// =======Открыть / закрыть меню при клике на бургер===========
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("burger").addEventListener("click", function()
	{
		 document.querySelector(".header").classList.toggle("open");
		 document.body.classList.toggle('lock');
	})
})

//  ==============Закрыть меню при нажатии на Esc============
window.addEventListener('keydown', (e) => {
	if(e.key === "Escape") {
		// Дуйствие при клике
		document.querySelector(".header").classList.remove("open");
		document.getElementById("wrapper").classList.remove("opacityBody")
		document.body.classList.remove('lock');
	}
})

// ==============Закрыть меню при клике вне его==============
document.getElementById("menu__body").addEventListener('click', event => {
	event._isClickWidthInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
	event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
	if (event._isClickWithInMenu) return;
	// Действие при клике
	document.querySelector(".header").classList.remove("open")
	document.body.classList.remove('lock');
});

// ===========Затемнение области видимости при открытии меню=========
const menuBtn = document.getElementById("burger");
const menuContainer = document.getElementById("wrapper");

menuBtn.addEventListener("click", () => {
  menuContainer.classList.toggle("opacityBody");
});

menuContainer.addEventListener("click", (e) => {
  if (e.target === menuContainer) {
    menuContainer.classList.remove("opacityBody");
  }
});

