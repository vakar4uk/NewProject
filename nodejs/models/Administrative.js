var db = require('../dbconnection');

var Administrative={
	getAllAdmins:function(callback){
		return db.query("select * from Administrative",callback);
	},
	getAdminById:function(id,callback){
		return db.query("select * from Administrative where AdminID=?",[id],callback);
	},
	addAdmin:function(Administrative,callback){
		return db.query("insert into Administrative values(?,?)",[Administrative.AdminID,Administrative.JobTitle],callback);
	},
	removeAdmin:function(id,callback){
		return db.query("delete from Administrative where AdminID=?",[id],callback);
	},
	updateAdmin:function(id,Administrative,callback){
		return db.query("update Administrative set JobTitle=? where AdminID=?",[Administrative.JobTitle,id],callback);
	}
};
module.exports = Administrative;