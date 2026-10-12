const div = document.querySelector("#app");

const textChrono = document.querySelector("#text-chrono");
const addButton = document.querySelector("#add-btn");
// Etat du chrono

//secondes écoulées
let counter = 0;

// identifiant pour controller le minuteur
let countId;

// valeur pour connaitre l'état du chrono, true il est marche false il est à l'arrêt
let chronoActif = false;

addButton.addEventListener("click", function () {
  if (!chronoActif) {
    // démarrage ou reprise du chrono
    countId = setInterval(() => {
      //console.log(counter);
      counter++;
      textChrono.textContent = counter;
    }, 1000);

    // changement du bouton et de l'état
    addButton.innerHTML = "Pause";
    chronoActif = true;
  } else {
    // Pause, on arrête le minuteur, counter garde sa valeur
    clearInterval(countId);

    addButton.innerHTML = "Reprendre";
    chronoActif = false;
  }
});
