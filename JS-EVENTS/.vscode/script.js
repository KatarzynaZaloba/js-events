const buttons = document.querySelectorAll(".js-button");

const hello = (event) => {
const name = event.target.innerText;

    console.log(`Cześć ${name}!`);
};

for (const button of buttons) {
    button.addEventListener("click" , hello);
}