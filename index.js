let buttonEl = document.getElementById("addBtn");
let titleInputEl = document.getElementById("titleInput");
let reviewTextEl = document.getElementById("reviewTextarea");
let reviewsContainer = document.getElementById('reviewsContainer');
buttonEl.onclick = function() {
    let userEnteredTitleInput = titleInputEl.value;
    let reviewText = reviewTextEl.value;
    if (userEnteredTitleInput === "") {
        alert("enter a movie title");
    } else {
        let headingEl = document.createElement('h1');
        headingEl.textContent = "Movie title: " + userEnteredTitleInput;
        headingEl.classList.add("review");
        reviewsContainer.appendChild(headingEl);

        let reviewEl = document.createElement("p");
        reviewEl.textContent = "Review: " + reviewText;
        reviewEl.classList.add("review1");
        reviewsContainer.appendChild(reviewEl);
    }
}