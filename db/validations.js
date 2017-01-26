const validator = require('validator')

module.exports = {

isValidEmail: function (email) {
  if(validator.isEmail(email) === true){
    return true
  } else {
    return false
    }
},
  
}
