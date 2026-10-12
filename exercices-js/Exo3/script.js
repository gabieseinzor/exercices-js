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
    const pills = tagList.map(function (tag) {
      const pill = document.createElement("div");
      pill.classList.add("tag");
      pill.textContent = tag;
      return pill;
    });
    tagsContainer.append(...pills);

    // texte du bas
    tagsText.textContent = "Tags : " + tagList.join(", ");
  }
});
