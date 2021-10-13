const axios = require('axios')

class Calls {
	getJoke() {
		const jokeRes = axios.get('https://api.chucknorris.io/jokes/random')
		const joke = jokeRes.then((response) => response.data)
		return joke
	}
}

export const calls = new Calls()
