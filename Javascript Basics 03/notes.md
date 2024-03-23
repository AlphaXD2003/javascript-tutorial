## this

=> this is nothing but the context. The value of this is defined at run-time.

=> If we use this inside a standard function in nodejs environment ; then this will hold the functionality.

=> If we use this inside a function that is inturn an property or key of an object the the this will hold the object.

=> If we use this inside an arrow function then the this will hold the 'this' object of the outer function.

=> When a function is called without new , then new.target refers to undefined