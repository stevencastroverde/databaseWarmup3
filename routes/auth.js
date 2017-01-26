var express = require('express');
var router = express.Router();
var validator = require('../db/validations')
const queries = require('../db/userQueries')
const bcrypt = require('bcrypt')

/* GET users listing. */
router.post('/login', function(req, res, next) {
  if(validator.isValidEmail(req.body.email) === true){
      queries.getUserByEmail(req.body.email)
      .then((user) => {
        if(user){
          bcrypt.compare(req.body.password, user.password)
            .then((result) => {
              if(result === true){
                res.send(user)
              } else {
                res.json({
                  message: 'Your password is incorrect'
                })
              }
            })

        } else {
          res.json({
            message: 'no user with that email exists'
          })
        }
      })
  }
});


router.post('/signup', function(req,res){
  if(validator.isValidEmail(req.body.email) === true){
    queries.getUserByEmail(req.body.email)
      .then((user) => {
        if(!user){
          bcrypt.hash(req.body.password, 10)
            .then((hash) => {
              const newUser = {
                email :  req.body.email,
                password: hash,
              };
                queries.createNewUser(newUser)
                  .then((id) => {
                    res.json({
                        user_id: id
                    })
                  })
            })
        } else {
          res.json({
            message: 'That Email Already Exists!'
          })
        }

      })


  } else {
    res.json({
      message: 'Please Enter a Valid Email'
    })

  }
})

module.exports = router;
