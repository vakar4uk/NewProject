var express = require('express');
var router = express.Router();
var InPatient = require('../models/InPatient');

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		InPatient.getInPatById(req.params.id,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		InPatient.getAllInPats(function(err,rows){
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
	InPatient.addInPat(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});
router.delete('/:id',function(req,res,next){
	InPatient.removeInPat(req.params.id,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(count);
		}
	});
});
router.put('/:id',function(req,res,next){
	InPatient.updateInPat(req.params.id,req.body,function(err,rows){
		if(err){
			res.json(err);
		}
		else{
			res.json(rows);
		}
	});
});
module.exports=router;