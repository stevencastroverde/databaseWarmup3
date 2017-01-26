var express = require('express');
var router = express.Router();
const queries = require('../db/cheeseQueries')
/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getAllChese()
    .then((response) => {
      res.json(response)
    })
});

router.get('/:id', function(req,res) {
  queries.getCheeseById(req.params.id)
    .then((book) => res.json(book));
});

router.post('/', function(req,res){
  queries.createNewCheese(req.body)
    .then((id) => res.send(id));
});

router.put('/:id/edit', function(req,res){
  queries.updateCheese(req.params.id, req.body)
    .then((id) => res.send(id));
});

router.delete('/:id/delete', function(req,res){
  queries.deleteCheese(req.params.id)
    .then(()=>{
      res.redirect('/');
    });
});
module.exports = router;
