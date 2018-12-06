const listItems = document.querySelectorAll(".list__item-skills");
const containerSkills = document.querySelector(".container-skills"); //contenedor
const allSkillsInputs = document.querySelectorAll(".checkbox-input");
const cardListSkills = document.querySelector(".list__skills");
let contentListSkills = "";
cardListSkills.innerHTML = "";



function onlyThreeCheckBox() {

  const limit = 3;

  function limitCheck(e) {
    let skillChecked = e.target; //Checked Skill
    let checkedcount = 0; //counter checks

    for (let i = 0; i < allSkillsInputs.length; i++) { // iteration for each Skill
      checkedcount += (allSkillsInputs[i].checked) ? 1 : 0; //counter goes up if checked
    }

    if (checkedcount > limit) { // if counter exceeds the limit (3) the cheked is false
      skillChecked.checked = false;
    }
  };

  for (let i = 0; i < allSkillsInputs.length; i++) { //I add listener in each skill to activate function limitCheck
    allSkillsInputs[i].addEventListener("click", limitCheck);
  }
}


function printSkill() {

  let liInput = "";
  let allItemsLi = "";

  for (let i = 0; i < allSkillsInputs.length; i++) { //each Skill

    if (allSkillsInputs[i].checked === true) { //if Skill is checked
      liInput = `<li class="list__item-skills">${allSkillsInputs[i].value}</li>`; //Add item li
      allItemsLi += liInput;

      cardListSkills.innerHTML = `${allItemsLi}`;
    }
  }
};


function handlerClickSkill() {
  onlyThreeCheckBox();  //first counter
  printSkill(); //second print
}

containerSkills.addEventListener("click", handlerClickSkill);
