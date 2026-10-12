const div = document.querySelector("#app");
const notifButton = document.getElementById("notif-btn");
const confirmationTexte = document.getElementById("msg-confirmation");

notifButton.addEventListener("click", function (e) {
  let timer = 3;
  console.log("clic");
  const countDown = setInterval(function () {
    if (timer > 0) {
      confirmationTexte.textContent = "Votre clic a bien été pris en compte";
    } else {
      confirmationTexte.textContent = "";
      clearInterval(countDown);
    }
    console.log(timer);
    timer--;
  }, 1000);
});
