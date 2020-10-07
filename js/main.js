var objUsers = [ 
	{
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
	},

		]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objUsers.length; i++) {
		if(username == objUsers[i].username && password == objUsers[i].password) {
			console.log("Log-in successful")
			window.open = "index.html"
			return
		}
	}
	console.log("Incorrect username or password")
}
