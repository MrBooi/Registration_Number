var EnteredReg = document.querySelector('.EnterReg');
var BtnAddReg = document.querySelector('.AddReg');
var RegClearBtn = document.querySelector('.clearBtn');
var displayReg = document.querySelector('.displayList');
var selectDrop = document.querySelector('.townName');
var messageAlert = document.querySelector('.messageDisplay');
// factory function
function RegNumberStorage(storedRegNumbers) {
  var regNumber = "";
  var RegNumberMap = {};
  var tempTown = {};
  var notFoundMessage = "";
  // set Registration number
  function setReg(value) {
    if (value.startsWith("CA") || value.startsWith("CL") || value.startsWith("CK") || value.startsWith("CJ")) {
      regNumber = value;
    } else {
      notFoundMessage = "Sorry the registration number you entered is incorrect";
    }

  }
  // add Registration Numbers into localstorage
  function setRegNumbers() {
    if (storedRegNumbers) {
      RegNumberMap = storedRegNumbers;
    }
    if (regNumber !== "") {
      // checking if Registration allready exist
      if (RegNumberMap[regNumber] === undefined) {
        RegNumberMap[regNumber] = 0;
        createItems(regNumber);
      }

    }
  }
  // getmap function
  function getRegistrationMap() {
    return RegNumberMap;
  }

  // get registration number
  function getRegistationNumber() {
    return regNumber;
  }

  // incorrect regNumber
  function notFoundTown() {

    return notFoundMessage;
  }



  //   creaate an Element
  function createItems(reg) {
    var li = document.createElement("li");
    li.textContent = reg
    displayReg.appendChild(li);
  }

  // filterby function
  function filterBy(filterTown) {
    var regNums = Object.keys(storedRegNumbers);
    location.hash = filterTown;
    switch (filterTown) {
      case "":
      case "#":
        displayReg.innerHTML = "";
        break;
      case "Cape Town":
      case "#Cape Town":
        displayReg.innerHTML = "";
        if (regNums.length > 0) {
          for (var i = 0; i < regNums.length; i++) {
            if (regNums[i].startsWith("CA")) {
              createItems(regNums[i]);
            }
          }
        }
        break;
      case "Paarl":
      case "#Paarl":
        displayReg.innerHTML = "";
        if (regNums.length > 0) {
          for (var i = 0; i < regNums.length; i++) {
            if (regNums[i].startsWith("CJ")) {
              createItems(regNums[i]);
            }
          }
        }
        break;
      case "George":
      case "#George":
        displayReg.innerHTML = "";
        if (regNums.length > 0) {
          for (var i = 0; i < regNums.length; i++) {
            if (regNums[i].startsWith("CK")) {
              createItems(regNums[i]);
            }
          }
        }

        break;
      case "Stellenbosh":
      case "#Stellenbosh":
        displayReg.innerHTML = "";
        if (regNums.length > 0) {
          for (var i = 0; i < regNums.length; i++) {
            if (regNums[i].startsWith("CL")) {
              createItems(regNums[i]);
            }
          }
        }
        break;
      default:
        if (regNums.length > 0) {
          for (var i = 0; i < regNums.length; i++) {
            createItems(regNums[i]);
          }
        }
    }
  }

  function getSelectedTownList() {

    return tempTown;
  }

  function clearRegMap() {
    localStorage.clear();
    RegNumberMap = {};
    return RegNumberMap;
  }


  return {
    setRegistration: setReg,
    localRegSet: setRegNumbers,
    getMap: getRegistrationMap,
    getRegNumber: getRegistationNumber,
    getMessage: notFoundTown,
    filterTowns: filterBy,
    createLi: createItems,
    getListSelectedTown: getSelectedTownList,
    clearLocal: clearRegMap
  }
}

// getting old Registration stored in a localstorage
var storedRegNumbers = localStorage.getItem('RegNumbers') ? JSON.parse(localStorage.getItem('RegNumbers')) : {};
//
var addRegistration = RegNumberStorage(storedRegNumbers);

function registrationEntered() {
  var regText = EnteredReg.value.trim();
  if (regText !== "") {
    // set Registration number
    addRegistration.setRegistration(regText);
    // update localStorage
    addRegistration.localRegSet();
    //set data into a map
    localStorage.setItem("RegNumbers", JSON.stringify(addRegistration.getMap()));
    // addRegistration.createLi(regText);
    EnteredReg.value = "";
  }
  else {
     messageAlert.innerHTML = addRegistration.getMessage();
  }
}





BtnAddReg.addEventListener("click", function() {
  registrationEntered();
});


RegClearBtn.addEventListener("click", function() {
  addRegistration.clearLocal();
  window.location.reload();

});

window.addEventListener("load", function() {
  var town = selectDrop.value;
  if (location.has !== "") {
    addRegistration.filterTowns(location.hash)
  } else {
    addRegistration.filterTowns(town)
    window.location.reload();
  }

});

selectDrop.addEventListener("change", function() {

  var town = selectDrop.value;
  addRegistration.filterTowns(town);

});
