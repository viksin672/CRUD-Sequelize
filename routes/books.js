var express = require('express');
var Book = require('../models').Book;
var router = express.Router();



router.get('/', function(req, res){
    
    Book.findAll().then(book => {
        res.status(200).json(book);
    });
});

router.post('/', function(req, res){
    Book.create({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    }).then(book => {
       
        res.status(200).json(book);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

router.get('/:sub_product_id',  function(req, res){
   
    Book.findById(req.params.id).then(book => {
       
        res.status(200).json(book);
    });
});

router.get('/',  function(req, res){
   
    Book.findBysuplier_name(req.body.suplier_name).then(book => {
       
        res.status(200).json(book);
    });
});
router.put('/:id',  function(req, res){
    
    Book.update({
        title: req.body.title,
        author: req.body.author,
        category: req.body.category
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', function(req, res){
  
    Book.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;