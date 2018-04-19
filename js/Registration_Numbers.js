var EnteredReg = document.querySelector('.EnterReg');
var BtnAddReg = document.querySelector('.AddReg');
var displayReg = document.querySelector('.displayList');
var selectDrop = document.querySelector('.townName');
// factory function
function RegNumberStorage(storedRegNumbers) {
  var regNumber = "";
  var RegNumberMap = {};
  // set Registration number
  function setReg(value) {
    if (value.startsWith("CA") || value.startsWith("CL") || value.startsWith("CK") || value.startsWith("CJ")) {
      regNumber = value;
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
      }
    }
  }
  // getmap function
  function getRegistrationMap() {
    return RegNumberMap;
  }

  return {
    setRegistration: setReg,
    localRegSet: setRegNumbers,
    getMap: getRegistrationMap,

  }
}

// getting old Registration stored in a localstorage
var storedRegNumbers = localStorage.getItem('RegNumbers') ? JSON.parse(localStorage.getItem('RegNumbers')) : {};
//
var addRegistration = RegNumberStorage(storedRegNumbers);

function createItems(reg) {
  var li = document.createElement("li");
  li.textContent = reg
  displayReg.appendChild(li);
}

function registrationEntered() {
  var regText = EnteredReg.value.trim();
  if (regText !== "") {
    // set Registration number
    addRegistration.setRegistration(regText);
    // update localStorage
    addRegistration.localRegSet();
    //set data into a map
    localStorage.setItem("RegNumbers", JSON.stringify(addRegistration.getMap()));
    createItems(regText);
    EnteredReg.value = "";
  }
}



function filterBy(filterTown) {
  var regNums = Object.keys(storedRegNumbers);
  location.hash = filterTown;
  switch (filterTown) {
    case "AllTown":
    case "#AllTown":
      displayReg.innerHTML = "";
      if (regNums.length > 0) {
        for (var i = 0; i < regNums.length; i++) {
          createItems(regNums[i]);
        }
      }
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
          if (regNums[i].startsWith("CL")) {
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
          if (regNums[i].startsWith("CJ")) {
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
          if (regNums[i].startsWith("CK")) {
            createItems(regNums[i]);
          }
        }
      }

    default:
  }
}


BtnAddReg.addEventListener("click", function() {
  registrationEntered();
});

window.addEventListener("load", function() {
  var town = selectDrop.value;
  if (location.has !== "") {
    filterBy(location.hash)
  } else {
    filterBy(town)
      window.location.reload();
  }

});

selectDrop.addEventListener("change", function() {

  var town = selectDrop.value;
  filterBy(town);
});
