var BtnAddRegTwo = document.querySelector('.AddRegTwo');
var EnteredRegTwo = document.querySelector('.EnterRegTwo');
var RegClearBtnTwo = document.querySelector('.clearBtnTwo');
var selectDropTwo = document.querySelector('.townNameTwo');
var displayRegTwo = document.querySelector('.displayListTwo');
var messageAlertTwo = document.querySelector('.messageDisplayTwo');

var templateSource = document.querySelector(".registrationTemplate").innerHTML;
var regTemplate = Handlebars.compile(templateSource);
var regElem = document.querySelector(".displayListTwo");

// getting old Registration stored in a localstorage
var storedRegNumbersTwo = localStorage.getItem('RegNumbersTwo') ? JSON.parse(localStorage.getItem('RegNumbersTwo')) : {};
var addRegistrationTwo = RegNumberStorage(storedRegNumbersTwo);

function registrationEnteredTwo() {
  var regTextTwo = EnteredRegTwo.value.trim().toUpperCase();
  if (addRegistrationTwo.setRegistration(regTextTwo)) {
    localStorage.setItem("RegNumbersTwo", JSON.stringify(addRegistrationTwo.getMap()));
    displayRegTwo.innerHTML = regTemplate({
      regList: addRegistrationTwo.getMap()
    });

    messageAlertTwo.innerHTML = "";
  } else {
    messageAlertTwo.classList.add("addDisplayTwo");
  }
}

  BtnAddRegTwo.addEventListener("click", function() {
  registrationEnteredTwo();
  EnteredRegTwo.value = "";
});

 RegClearBtnTwo.addEventListener("click", function() {
  localStorage.removeItem('RegNumbersTwo');
  EnteredRegTwo.value = "";
  selectDropTwo.value = "AllTown";
  messageAlertTwo.innerHTML = "";
  window.location.reload();
 });

 window.addEventListener("load", function() {
  var regList =addRegistrationTwo.filterTowns("");
    
  displayRegTwo.innerHTML = regTemplate({
    // regPlate: 'regPlate',
    regList: regList
  });
 });

 selectDropTwo.addEventListener("change", function() {
  displayRegTwo.innerHTML = "";
  var regList = addRegistrationTwo.filterTowns(selectDropTwo.value);
  displayRegTwo.innerHTML = regTemplate({
    regList: regList
  });
 });
