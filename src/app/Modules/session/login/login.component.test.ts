

var expect= require('chai').expect,
 username:string,
password:string

function SignIn(){
    if(username=="admin@gmail.com" && password == "123456789")
    {
        return true;
    }
    else{
        return false;
    }

}

describe('SignIn()', function() { 

    it('should equal to username', () => { 
   expect(username).to.equal(username)
  }); 
 

 //describe('second test', function() { 

    it('shoul equal to password', () => { 
   expect(password).to.equal(password)
  }); 
});


/*var assert = require('chai').assert;

var username;
var password;

function SignIn() {
    if(username=="admin@gmail.com" && password == "123456789")
   {}
  };

describe('SignIn()', function() {
  var tests = [
    {args: [username], expected: "admin@gmail.com"},
    {args: [password], expected: "123456789"}
  ];

  tests.forEach(function(test) {
    it('test is done ' , function() {
      assert.equal( test.expected);
    });
  });
});*/
