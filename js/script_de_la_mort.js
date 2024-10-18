let formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  console.log("-----> ");
  console.log(name);
});


