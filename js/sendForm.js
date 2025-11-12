// const sendForm = () => {
// 	const form = document.querySelector('.modal');

// 	form.addEventListener('submit', event => {
// 		event.preventDefault();

// 		const text = form.querySelector('input[type=text]');
// 		const tel = form.querySelector('input[type=tel]');
// 		const email = form.querySelector('input[type=email]');

// 		const sendObj = {
// 			name: text.value,
// 			phone: tel.value,
// 			email: email.value,
// 		};

// 		fetch('https://jsonplaceholder.typicode.com/posts', {
// 			method: 'POST',
// 			body: JSON.stringify(sendObj),
// 			headers: {
// 				'Content-type': 'application/json; charset=UTF-8',
// 			},
// 		})
// 			.then(response => {
//         if(response.status ===  404) {
//           alert("не отправилось")
//         } else {
//           response.json()
//         }
//       })
// 			.then(data => console.log(data))
// 			.finally(() => {
// 				console.log('Форма очищена');
//         text.value = ""
//         tel.value = ""
//         email.value = ""
// 			});
// 	});
// };

// sendForm();


const sendForm = () => {
  const form = document.querySelector('.modal')
  form.addEventListener("submit", event => {
    event.preventDefault()

    const formData = new FormData(form)

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => {
      if(response.status === 404) {
        alert("ошибка")
      } else {
        return response.json()
      }
    })
    .then(data => console.log(data))
    .finally(() => {
      form.reset()
    })
  })
}

sendForm()