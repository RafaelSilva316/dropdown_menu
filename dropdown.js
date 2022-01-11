const addHideFunc = function (el) {
  el.addEventListener("click", () => {
    el.nextElementSibling.classList.toggle("showing");
    console.log(el.nextElementSibling);
  });
};

//make sure dropdown list is next sibling
//make sure class hidden adds display none

export const addDropdown = function (selected) {
  const menuBtns = document.querySelectorAll(selected);
  menuBtns.forEach(function (currEl) {
    addHideFunc(currEl);
  });
};
