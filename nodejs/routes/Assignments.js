var express = require('express');
var router = express.Router();
var Assignment = require('../models/Assignment');

router.get('/:id?',function(req,res,next){
	if(req.params.id){
		Assignment.getAssignmentById(req.params.id,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		Assignment.getAllAssignments(function(err,rows){
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
	Assignment.addAssignment(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});
router.delete('/:id',function(req,res,next){
	Assignment.removeAssignment(req.params.id,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(count);
		}
	});
});
router.put('/:id',function(req,res,next){
	Assignment.updateAssignment(req.params.id,req.body,function(err,rows){
		if(err){
			res.json(err);
		}
		else{
			res.json(rows);
		}
	});
});
module.exports=router;