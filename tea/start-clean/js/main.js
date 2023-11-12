async function sendForm(form) {
	let response = await fetch("./php/form_send.php", {
		method: "POST",
		body: new FormData(form),
	});
	let result = await response.text();
	if (result == "Ok!") {
		alert("Отправка данных успешна!");
	} else if (result == "Exist!!!") {
		info.innerText = "Пользователь уже существует!";
	}
}
const formsend = document.getElementById("form-send");
formsend.addEventListener("submit", (e) => {
	// действия с данными
	e.preventDefault();
	e.target.reset(); // очищаем форму
});
