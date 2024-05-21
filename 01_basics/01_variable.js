const accountId = 1234
let emailId = "nishi@gmail.com"
var account = "Saving" 
accountCity = "Chennai"
let accStatus //undefined special space holder 

// const bankId SyntaxError: Missing initializer in const declaration

// accountId = 234 Type Error as constant can not change after declaration


console.table([emailId,account,accountCity])

// Prefer not to use Var because of an issue 
// in block and function scope 

emailId="n@nishi.com";
account = "Chequing";
accountCity = "Pune";



console.table([emailId,account,accountCity,accStatus])