const submitBtn = document.querySelector("#submit-btn");
const movieTitle = document.querySelector("#movie-title");

let movieList = [];

// This function logs what the user types into the text box when submit button is clicked
const addMovie = () => {
	let nameOfMovie = movieTitle.value;
	movieList.push(nameOfMovie);

	console.log(`users input is ${nameOfMovie}`);
	console.log(movieList);

	// movieFetch() function
};

// Function to fetch movie data

// const deleteMovie

// logic for handling user clicking on submit button
submitBtn.addEventListener("click", (e) => {
	// prevent page reloading when button clicked
	e.preventDefault();
	console.log("clicked");
	addMovie();
});
