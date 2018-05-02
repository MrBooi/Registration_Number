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


  it('should display this object "{ CAW 123: 0, CA 123: 0 }" if user entered the following registration numbers CAW 123 and CA 123 ', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration('CAW 123' );
       addRegistration.setRegistration('CA 123');
      assert.deepEqual(addRegistration.getMap() ,{ 'CAW 123': 0, 'CA 123': 0 });
  });
  it('should display one registration number in an object "{ CAW 123: 0 }" if user entered same registration number twice ', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration('CAW 123');
       addRegistration.setRegistration('CAW 123');
      assert.deepEqual(addRegistration.getMap() ,{ 'CAW 123': 0});
  });

  it('should display "{\'CAW 123\': 0, \'CA 123\':0, "CJ 123":0 , \'CL 123\':0}" this object if user entered all registration numbers ', function() {
     var addRegistration = RegNumberStorage();
      addRegistration.setRegistration('CAW 123');
       addRegistration.setRegistration('CA 123');
       addRegistration.setRegistration('CJ 123');
       addRegistration.setRegistration('CL 123');
      assert.deepEqual(addRegistration.getMap() ,{'CAW 123': 0, 'CA 123':0, "CJ 123":0 , 'CL 123':0});
  });
});




describe('fillter registration by Town function', function() {
  it('shoud display all registration numbers of CA if user filtered by CA ', function() {
     var addRegistrationTwo= RegNumberStorage();
       addRegistration.setRegistration('CA 124');
       addRegistration.setRegistration('CA 125');
      assert.deepEqual(addRegistration.filterTowns("CA "),{ 'CA 124': 0, 'CA 125': 0 });
  });

  it('shoud display all registration numbers of CJ if user filtered by CJ ', function() {
     var addRegistrationTwo= RegNumberStorage();
       addRegistration.setRegistration('CJ 124');
      assert.deepEqual(addRegistration.filterTowns("CJ"),{ 'CJ 124': 0});
  });

  it('shoud display all registration numbers of CAW if user filtered by CAW ', function() {
     var addRegistrationTwo= RegNumberStorage();
       addRegistration.setRegistration('CAW 124');
      assert.deepEqual(addRegistration.filterTowns("CAW"),{ 'CAW 124': 0});
  });

  it('shoud display all registration numbers of CL if user filtered by CL', function() {
     var addRegistrationTwo= RegNumberStorage();
       addRegistration.setRegistration('CL 124');
      assert.deepEqual(addRegistration.filterTowns("CL"),{ 'CL 124': 0});
  });

  it('shoud display all registration numbers of Towns if user did not fillter by CA,CJ,CL and CAW', function() {
     var addRegistrationTwo= RegNumberStorage();
     assert.deepEqual(addRegistration.filterTowns(""),{'CA 124': 0, 'CA 125':0, "CAW 124":0 , 'CJ 124':0 ,'CL 124':0});
  });
});

 describe('Handlebars', function() {

   it('shoud display ', function() {
    

   });


  });
