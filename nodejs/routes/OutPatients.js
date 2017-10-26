var express = require('express');
var router = express.Router();
var OutPatient = require('../models/OutPatient');

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		OutPatient.getOutPatientById(req.params.id,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		OutPatient.getAllOutPatients(function(err,rows){
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
	OutPatient.addOutPatient(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});
router.delete('/:id',function(req,res,next){
	OutPatient.removeOutPatient(req.params.id,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(count);
		}
	});
});

module.exports=router;