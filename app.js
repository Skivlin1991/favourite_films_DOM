document.addEventListener("DOMContentLoaded", () => {
    const handleFormSubmit = function (event) {
        event.preventDefault();

        const filmList = document.querySelector('#film-list');

        const newFilm = document.createElement("li");
        newFilm.textContent = `${event.target.title.value} ${event.target.director.value} ${event.target.genre.value}`;
        filmList.appendChild(newFilm);

        form.reset();
    };