describe('The Registration_Numbers function', function() {


  it('should display "CA 123" if user entered CA 123 in a texfield of registration numbers', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration("CA 123");
    assert.equal(addRegistration.getRegNumber() ,"CA 123");
  });
  it('should display "CJ 123 24" if user entered CJ 123 24 in a texfield of registration numbers', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration("CJ 123 24");
    assert.equal(addRegistration.getRegNumber() ,"CJ 123 24");
  });
  it('should display "CL 123 503" if user entered CL 123 503 in a texfield of registration numbers', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration("CL 123 503");
    assert.equal(addRegistration.getRegNumber() ,"CL 123 503");
  });
  it('should display "CK 123 22" if user entered CK 123 22 in a texfield of registration numbers', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration("CK 123 22");
    assert.equal(addRegistration.getRegNumber() ,"CK 123 22");
  });

  it('should display a Message called "Sorry the registration number you entered is incorrect" if user entered registration number'
  + " does not startsWith CA, CL , CJ ,CK", function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration(" 123");
    assert.equal(addRegistration.getMessage() ,"Sorry the registration number you entered is incorrect");
  });

  // it('should display "{}" ', function() {
  //    var addRegistration = RegNumberStorage();
  //     addRegistration.setRegistration("CK 123" );
  //      addRegistration.localRegSet();
  //      addRegistration.setRegistration("CA 123");
  //      addRegistration.localRegSet();
  //     assert.deepEqual(addRegistration.getMap() ,"{ 'CK 123 : 0', 'CA 123: 0' }");
  // });



});
