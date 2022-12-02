const adviceId = document.getElementById("advice-id"),
  adviceData = document.getElementById("advice-data"),
  adviceBtn = document.getElementById("advice-button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      const adviceObject = data.slip;
      adviceData.innerText = `"${adviceObject.advice}"`;
      adviceId.innerText = `advice #${adviceObject.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

adviceBtn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
