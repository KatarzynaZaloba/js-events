const hello =() => {
    console.log("Cześć!");
};

const button = document.querySelector(".js-button");

button.onclick = hello;