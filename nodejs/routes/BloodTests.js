var express = require('express');
var router = express.Router();
var BloodTest = require('../models/BloodTest');

router.get('/:date?',function(req,res,next){
	if(req.params.date){
		BloodTest.getTestByDate(req.params.date,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		BloodTest.getAllTests(function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
});
router.post('/',function(req,res,next){
	BloodTest.addBloodTest(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});
router.delete('/:id',function(req,res,next){
	BloodTest.removeResults(req.params.id,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(count);
		}
	});
});
router.put('/:id',function(req,res,next){
	BloodTest.updateResults(req.params.id,req.body,function(err,rows){
		if(err){
			res.json(err);
		}
		else{
			res.json(rows);
		}
	});
});
module.exports=router;