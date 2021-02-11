//Q1


const division = (a, b) => {
	return a % b
}


//Q2


const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const out = document.querySelector("#myDiv");




listGames = (games) => {
	out.innerHTML = "";


	console.log(games)


	for(let stuff of games.results){
		if(stuff.name === "[Unreal Engine] Wild Life"){
			break
		}
		let newGame = `
		<ul>
		  <li><h2>${stuff.name}</h2></li>
		  <li><p>Rating</p>${stuff.rating}</li>
		  <li><p>Tags</p>${stuff.tags.length}</li>
		</ul>`
		myDiv.innerHTML += newGame;
	}
}

fetch(url)
.then(response => response.json())
.then(data => listGames(data))
.catch(error => {
	console.error(error.message);
	out.innerHTML = '<div class="error">something went wrong</div>'
})