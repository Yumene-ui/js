// Задание 5
// Под главной секцией есть блок "Заработано учениками" (который я забыл переименовать в макете, но уже не суть).

// В данном блоке закрашиванием линии показано сколько было заработано учениками из 1.000.000₽

// Необходимо реализовать следующее:

// Обязательное:
// 1) При загрузке страницы число "Заработано учениками" равно 0₽.

// 2) При загрузке страницы число должно измениться на 400.000₽, но накруткой, с анимацией.
// Так же плавно должна закраситься полоса на значение процента от 1.000.000₽

// *
// 400.000₽ от 1.000.000₽ = 40% ширины полосы
// 350.000₽ от 1.000.000₽ = 35% ширины полосы
// и т.д.

const progressbar = () => {
	const bar = document.querySelector('.course__progress-element > progress');
	const courseNumber = document.querySelector('.course__progress-label > .course__number');
	let newValue = 0;
	let stepSize = 100000;
	const anim = setInterval(() => {
		courseNumber.textContent = newValue + stepSize + ' ₽';
		bar.value = newValue;
		if (newValue === 4e5) {
			clearInterval(anim);
		}
    newValue += stepSize
	}, 600);
};

progressbar();
