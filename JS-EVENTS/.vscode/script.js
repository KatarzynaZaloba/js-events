const button = document.querySelector(".js-button");

const hello = () => {
    console.log("Cześć!");
};

button.addEventListener("click" , hello);

button.removeEventListener("click", hello);