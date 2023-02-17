const button = document.querySelector(".js-button");

const hello = (event) => {
    console.log(event.target);
    console.log("Cześć!");
};

button.addEventListener("click" , hello);