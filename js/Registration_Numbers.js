var EnteredReg = document.querySelector('.EnterReg');
var BtnAddReg = document.querySelector('.AddReg');
var RegClearBtn = document.querySelector('.clearBtn');
var displayReg = document.querySelector('.displayList');
var selectDrop = document.querySelector('.townName');
var messageAlert = document.querySelector('.messageDisplay');

  // getting old Registration stored in a localstorage
  var storedRegNumbers = localStorage.getItem('RegNumbers') ? JSON.parse(localStorage.getItem('RegNumbers')) : {};
  var addRegistration = RegNumberStorage(storedRegNumbers);

  function registrationEntered() {
    var regText = EnteredReg.value.trim();
    messageAlert.innerHTML = "";

    if (addRegistration.setRegistration(regText)) {
      localStorage.setItem("RegNumbers", JSON.stringify(addRegistration.getMap()));
      addRegistration.createLi(addRegistration.getRegNumber());
    } else {

      storedRegNumbers.includes(regText) ? messageAlert.innerHTML = "Registration you entered already exist" : messageAlert.innerHTML = "Registration you entered is incorrect";
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
