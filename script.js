let btn = document.querySelector("#btn");
let btn2 = document.querySelector("#btn2");
const div = document.querySelector("#div");

window.onload = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(data);
  div.innerHTML = `<p>${data.slip.advice}</p>`;
};
btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      div.innerHTML = `<p>${data.slip.advice}</p>`;
    });
});
btn.addEventListener("click", () => {
  const colors = ["blue", "yellow", "orange", "red", "aqua"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = random;
});
