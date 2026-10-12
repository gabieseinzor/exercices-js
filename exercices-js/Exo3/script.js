const div = document.querySelector("#app");

const tagInput = document.querySelector("#tag-input");
const addButton = document.querySelector("#add-btn");
const errorMsg = document.querySelector("#error-message");

// conteneur des pastilles
const tagsContainer = document.querySelector("#tags-list");
// texte du bas "Tags : ..."
const tagsText = document.querySelector("#tags-text");

let tagList = [];

addButton.addEventListener("click", function (event) {
  // recupère la valeur du mot clé saisi
  let tagInserted = tagInput.value.trim();

  // 1. si le champ vide pas d'action
  if (tagInserted === "") {
    return;
  }

  // 2. si le mot est déjà dans le tableau : message d'erreur
  if (tagList.includes(tagInserted)) {
    errorMsg.textContent = `Le tag "${tagInserted}" existe déjà !`;
  } else {
    // 3. sinon on l'ajoute et on efface l'erreur
    tagList.push(tagInserted);
    errorMsg.textContent = "";
    tagInput.value = "";

    // 4. pastilles mises à jour
    tagsContainer.textContent = "";
    const tagBadges = tagList.map(function (tag) {
      // pour chaque texte du tableau...
      const tagBadge = document.createElement("div"); // je crée un div
      tagBadge.classList.add("tag"); // je lui donne le style .tag
      tagBadge.textContent = tag; // je mets le texte dedans
      return tagBadge; // je le renvoie dans le nouveau tableau
    });
    tagsContainer.append(...tagBadges); // je pose tous les badges dans la page avec un spread

    // texte du bas
    tagsText.textContent = "Tags : " + tagList.join(", ");
  }
});
