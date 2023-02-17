const buttons = document.querySelectorAll(".js-button");

const hello = (event) => {
    console.log("Cześć!");
};

for (const button of buttons) {
    button.addEventListener("click" , hello);
}