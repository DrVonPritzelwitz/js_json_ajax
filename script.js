const resultContainer = document.getElementById('result-container');
document.getElementById('searchForm').addEventListener("submit", getPokemon);


function getPokemon(event){
	let searchTerm = event.target.elements.searchTerm.value;
	const request = new XMLHttpRequest();

	request.onload = function () {
		const data = JSON.parse(request.responseText);
		console.log(data);
		resultContainer.innerHTML = `<img src="${data.sprites.front_default}">`;
	}

	request.open("GET", `https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
	request.send()
}