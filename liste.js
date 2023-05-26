// Créer la section
var section = document.createElement("section");

// Créer le titre h1
var title = document.createElement("h1");
title.textContent = "TO DO LIST";

// Créer la div container
var container = document.createElement("div");
container.className = "container";

// Créer la div full_input
var fullInput = document.createElement("div");
fullInput.className = "full_input";

// Créer la div toDoContainer
var toDoContainer = document.createElement("div")
toDoContainer.id = "toDoContainer";

//Crée la div fullToDoContainer
var fullToDoContainer = document.createElement("div");
fullToDoContainer.id="fullToDoContainer";

// Créer l'input
var input = document.createElement("input");
input.type = "text";
input.placeholder = "Ajouter une tâche...";
input.id = "inputField";

// Créer le bouton
var button = document.createElement("button");
button.id = "addToDo";
button.textContent = "+";


// Ajouter l'input et le bouton à la div full_input
fullInput.appendChild(input);
fullInput.appendChild(button);

// Ajouter le titre, la div full_input, la div container et la div toDoContainer à la section
section.appendChild(title);
section.appendChild(container);
container.appendChild(fullInput);
container.appendChild(toDoContainer);
toDoContainer.appendChild(fullToDoContainer);

// Ajouter la section au body
document.body.appendChild(section);

var addToDoButtonElement = document.getElementById("addToDo");
var toDoContainerElement = document.getElementById('toDoContainer');
var inputElement = document.getElementById("inputField");




inputElement.addEventListener("keydown", function(Enter) {
    // Verifie si la touche entrée est egale a Entrée et verifie si l'input n'est pas vide
    if(Enter.key == "Enter" && inputElement.value != ""){
// cree l'element p si l'input n'est pas vide avec un deux boutons
let divParagraphButton = document.createElement("div");
var paragraph = document.createElement("p");
let buttonValidation = document.createElement("button");
let buttonRemove = document.createElement("button");

        //cree le text saisie dans le paragraphe
             paragraph.innerHTML = inputElement.value;
   
        //Ajout d'une class pour les éléments afin de les styliser
             divParagraphButton.classList.add('divParagraphButton');
             paragraph.classList.add('paragraphe_style');
             buttonValidation.classList.add("buttonValidation");
             buttonValidation.textContent = "✓";
             buttonRemove.classList.add("buttonRemove");
             buttonRemove.textContent = "X";

    //ajoute divParagrahButton dans la div fullToDoContainer
    //ajoute le paragraphe dans la divParagraphButton
    //ajoute le bouton valider dans divParagraphButton
    //ajoute le bouton supprimer dans divParagraphButton
    fullToDoContainer.appendChild(divParagraphButton);
   divParagraphButton.appendChild(paragraph);
   divParagraphButton.appendChild(buttonValidation);
   divParagraphButton.appendChild(buttonRemove);

    
    //valeur effacer dans l'input apres avoir appuyer sur la touche Entree
    inputElement.value ="";

    //Le paragraphe devient rouge et rayé au click du bouton valider 
   
    buttonValidation.addEventListener("click", ()=> {
        paragraph.classList.add("paragraph_click");
    })
    //Le paragraphe devient rouge et rayé au click du bouton valider 

    buttonRemove.addEventListener("click", () => {
        divParagraphButton.remove();
    })

    }


})
 

addToDoButtonElement.addEventListener("click", () => {
    // Vérifier si l'input n'est pas vide
    if(inputElement.value != ""){
       // cree l'element p si l'input n'est pas vide avec un deux boutons
let divParagraphButton = document.createElement("div");
var paragraph = document.createElement("p");
let buttonValidation = document.createElement("button");
let buttonRemove = document.createElement("button");

        //cree le text saisie dans le paragraphe
             paragraph.innerHTML = inputElement.value;
   
        //Ajout d'une class pour les éléments afin de les styliser
             divParagraphButton.classList.add('divParagraphButton');
             paragraph.classList.add('paragraphe_style');
             buttonValidation.classList.add("buttonValidation");
             buttonValidation.textContent = "✓";
             buttonRemove.classList.add("buttonRemove");
             buttonRemove.textContent = "X";

    
    //ajoute divParagrahButton dans la div fullToDoContainer
    //ajoute le paragraphe dans la divParagraphButton
    //ajoute le bouton valider dans divParagraphButton
    //ajoute le bouton supprimer dans divParagraphButton
    fullToDoContainer.appendChild(divParagraphButton);
   divParagraphButton.appendChild(paragraph);
   divParagraphButton.appendChild(buttonValidation);
   divParagraphButton.appendChild(buttonRemove);

    
    //valeur effacer dans l'input apres avoir appuyer sur le bouton +
    inputElement.value ="";

    //Le paragraphe devient rouge et rayé au click du paragraphe
    buttonValidation.addEventListener("click", ()=> {
        paragraph.classList.add("paragraph_click");
    })

    buttonRemove.addEventListener("click", () => {
        divParagraphButton.remove();
    })


    }
    
})




