let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
//user.f(); // John  (this == user)
//admin.f(); // Admin  (this == admin)
/*
admin = {
    name: 'Admin',
    f: function(){
        console.log(this.name)
    }
}

admin.name
admin['name']
admin.f()
admin['f']()
user = {
    name: 'John',
    f: function(){
        console.log(this.name)
    }
}
*/

 //admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

 function sayHi() {
    console.log(this);
  }
  
  sayHi(); 

let user = {
    firstName: "Ilya",
    sayHi: function() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya