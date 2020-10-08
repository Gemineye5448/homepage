var objPeople = [
		username: "ramsey",
		password: "admin"
	},
	{
		username: "tekie",
		password: "admin"
	},
	{
		username: "robert",
		password: "admin"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log("Log-in successful")
			window.location.href = "index.html";
			return
		}
	}
	console.log("Incorrect username or password")
}
