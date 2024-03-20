let user = {
    name: "John",
    age: 30,
    'this': this , 
    sayHi: function() {
      console.log( this.name ); // leads to an error
    }
  
  };
  console.log(user['this'])
  
  
  /*let admin = user;
  admin.sayHi();
  user = null; // overwrite to make things obvious
  */
  //admin.sayHi(); // TypeError: Cannot read property 'name' of null