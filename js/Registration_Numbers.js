var EnteredReg = document.querySelector('.EnterReg');
var BtnAddReg = document.querySelector('.AddReg');
var RegClearBtn = document.querySelector('.clearBtn');
var displayReg = document.querySelector('.displayList');
var selectDrop = document.querySelector('.townName');
var messageAlert = document.querySelector('.messageDisplay');

// factory function
function RegNumberStorage(storedRegNumbers) {
  var regNumber = "";
  var RegNumberMap =  {};

  if (storedRegNumbers) {
    for (var i = 0; i < storedRegNumbers.length; i++) {
        let regStored = storedRegNumbers[i];
        RegNumberMap[regStored] = 0;
    }
  }

  function setReg(value) {

    if (RegNumberMap[value] === undefined) {
      if (value !== "" && value.length > 0 && value.startsWith("CA") || value.startsWith("CL") || value.startsWith("CAW") || value.startsWith("CJ")) {
        regNumber = value;
        RegNumberMap[regNumber] = 0;
        return true;
      }
      return false;
    }
  }
  // getmap function
  function getRegistrationMap(storedRegNumbers) {
    return  Object.keys(RegNumberMap);
  }
  // get registration number
  function getRegistationNumber() {
    return regNumber;
  }
  //   creaate an Element
  function createItems(reg) {
    var li = document.createElement("li");
    li.className = 'regPlate';
    li.textContent = reg;
    displayReg.appendChild(li);
  }
  // filterby function
  function filterBy(filterTown) {

    var regNums = Object.keys(RegNumberMap);
    if (filterTown === '') {
        return regNums;
      }
    var townFilter = regNums.filter(function(regNumber) {

    return regNumber.startsWith(filterTown)
  });
    location.hash = filterTown;
    return townFilter;
  }
  // get selected Town
  function getSelectedTownList() {
    return tempTown;
  }
  // clear localstorage and Maps

  // returning all functions inside a factory function
  return {
    setRegistration: setReg,
    getMap: getRegistrationMap,
    getRegNumber: getRegistationNumber,
    filterTowns: filterBy,
    createLi: createItems,
    getListSelectedTown: getSelectedTownList,

  }
}

// getting old Registration stored in a localstorage
var storedRegNumbers = localStorage.getItem('RegNumbers') ? JSON.parse(localStorage.getItem('RegNumbers')) : {};
var addRegistration = RegNumberStorage(storedRegNumbers);

function registrationEntered() {
  var regText = EnteredReg.value.trim().toUpperCase();
  if (addRegistration.setRegistration(regText)) {
    localStorage.setItem("RegNumbers", JSON.stringify(addRegistration.getMap()));
    addRegistration.createLi(addRegistration.getRegNumber());
    messageAlert.innerHTML = "";
  } else {
    messageAlert.classList.add("addDisplay");
  }
}

BtnAddReg.addEventListener("click", function() {
  registrationEntered();
  EnteredReg.value = "";
});

RegClearBtn.addEventListener("click", function() {
localStorage.removeItem('RegNumbers');
  location.hash = "";
  EnteredReg.value = "";
  selectDrop.value = "AllTown";
  messageAlert.innerHTML = "";
  window.location.reload();

});

window.addEventListener("load", function() {
  if (location.has !== "") {
    var regList = addRegistration.filterTowns("");
    for (let i = 0; i < regList.length; i++) {
      addRegistration.createLi(regList[i]);
    }
  }
});

selectDrop.addEventListener("change", function() {
  displayReg.innerHTML = "";
  var regList = addRegistration.filterTowns(selectDrop.value);
  for (let i = 0; i < regList.length; i++) {
    addRegistration.createLi(regList[i]);
  }
});
