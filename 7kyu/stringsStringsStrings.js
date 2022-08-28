/*Recreate the toStirng prototype, as it has been disabled for the challenge */

//PsudeoCode/plan
// We can Redeclare the String.prototype for toString as a function and make it return 'this' as a string.

String.prototype.toString = ()=>{
    return `${this}`
  }
  
  