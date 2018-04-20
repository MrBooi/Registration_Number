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
  it('should display "CAW 123 22" if user entered CAW 123 22 in a texfield of registration numbers', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration("CAW 123 22");
    assert.equal(addRegistration.getRegNumber() ,"CAW 123 22");
  });


  it('should display a Message called "Sorry the registration number you entered is incorrect" if user entered registration number'
  + " does not startsWith CA, CL , CJ ,CAW", function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration(" 123");
    assert.equal(addRegistration.getMessage() ,"Sorry the registration number you entered is incorrect");
  });

  it('should display this object "{ CAW 123: 0, CA 123: 0 }" if user entered the following registration numbers CAW 123 and CA 123 ', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration('CAW 123' );
       addRegistration.localRegSet();
       addRegistration.setRegistration('CA 123');
       addRegistration.localRegSet();
      assert.deepEqual(addRegistration.getMap() ,{ 'CAW 123': 0, 'CA 123': 0 });
  });
  it('should display one registration number in an object "{ CAW 123: 0 }" if user entered same registration number twice ', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration('CAW 123');
       addRegistration.localRegSet();
       addRegistration.setRegistration('CAW 123');
       addRegistration.localRegSet();
      assert.deepEqual(addRegistration.getMap() ,{ 'CAW 123': 0});
  });



});
