const express = require('express');
const router = express.Router();
const vange = require('../controller/vincentController');

router.get('/', vange.index);         
router.get('/about', vange.about); 
router.get('/features', vange.features); 
router.get('/services', vange.services); 
router.get('/pricing', vange.pricing); 
router.get('/dropdown1', vange.dropdown1);  
router.get('/dropdown2', vange.dropdown2);  
router.get('/dropdown3', vange.dropdown3);  
router.get('/dropdown4', vange.dropdown4);  
router.get('/dropdown5', vange.dropdown5);   

module.exports = router;
