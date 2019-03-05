'use strict';

var express = require('express');


var router = express.Router();

router.route('/login').post(async (req, res)=>{
    let body = req.body;

    var stockChecker = require('ikea-stock-checker');
    stockChecker.forProduct('productId', 'storeId', function (err, result) {
      if (err) {
        console.warn(err);
      }

      console.log(result);
    });
    // res.status(200).send({
    //         "success":"Success",
    //         "accounts":"testing"    
    // }).end();
});


module.exports = router;