var express = require('express');
var router = express.Router();
var UserTemp = require('../models/UserTemp');

router.get('/:uname',function(req,res,next){
	if(req.params.uname){
		UserTemp.login(req.params.uname,function(err,rows){
			if(err){
				res.json(err);
			}
			else{
				res.json(rows);
			}
		});
	}
	else{
		UserTemp.getAllUsers(function(err,rows){
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
	UserTemp.addUser(req.body,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(req.body);
		}
	});
});
router.delete('/:id',function(req,res,next){
	UserTemp.removeUser(req.params.id,function(err,count){
		if(err){
			res.json(err);
		}
		else{
			res.json(count);
		}
	});
});
router.put('/:id',function(req,res,next){
	UserTemp.updateUser(req.params.id,req.body,function(err,rows){
		if(err){
			res.json(err);
		}
		else{
			res.json(rows);
		}
	});
});
module.exports=router;