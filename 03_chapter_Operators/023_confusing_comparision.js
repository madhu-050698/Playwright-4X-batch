console.log("" == 0); // losely coulped result is true
console.log("0" == 0); //losely coupled reult is true
console.log("" == "0"); // this is called a transitive broken(corced)

//fixes it -- these are always false
console.log("" === 0); 
console.log("0" === 0); 
console.log("" === "0");
