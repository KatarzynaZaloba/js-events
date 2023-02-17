const section = document.querySelector(".js-section");

const hello = (event) => {
const name = event.target.innerText;

    console.log(`Cześć ${name}!`);
};

section.addEventListener("click" , hello);