const submitBtn = document.querySelector("#submit-btn");
const movieTitle = document.querySelector("#movie-title");
const movieList = document.querySelector("#movie-list");
const movieForm = document.querySelector("#movie-form");

async function fetchData() {
	const url = "https://catfact.ninja/fact";
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
	} catch (error) {
		console.log("Error fetching data", error.messsage);
	}
}
fetchData();

let movieArray = [];

// This function logs what the user types into the text box when submit button is clicked
const addMovie = () => {
	let nameOfMovie = movieTitle.value;

	// add delete button to movie
	if (nameOfMovie !== "") {
		// Create div, add name of user typed movie into div, append to movie list in HTML
		const newDiv = document.createElement("div");
		newDiv.textContent = nameOfMovie;
		movieList.appendChild(newDiv);
		movieArray.push(nameOfMovie);
		deleteButton();
	}

	console.log(`users input is ${nameOfMovie}`);
	console.log(movieArray);
};

const deleteMovie = () => {};

const deleteButton = () => {
	// Add Button
	const newButton = document.createElement("button");
	newButton.textContent = "Delete";
	newButton.className = "deleteButton";
	movieList.appendChild(newButton);
	// Logic for handling delete movie event
	newButton.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("clicked");
	});
};

// Function to fetch movie data

// logic for handling user clicking on submit button
submitBtn.addEventListener("click", (e) => {
	// prevent page reloading when button clicked
	e.preventDefault();
	addMovie();

	// Reset form fields after clicking submit
	movieForm.reset();
});

// Key: aedba6c69f13f4a09bb49000c0e86cde
