var db = require('../dbconnection');

var Nurse={
	getAllNurses:function(callback){
		return db.query("select * from Nurse",callback);
	},
	getNurseByID:function(id,callback){
		return db.query("select * from Nurse where NurseID=?",[id],callback);
	},
	addNurse:function(Nurse,callback){
		return db.query("insert into Nurse values(?,?)",[Nurse.NurseID,Nurse.Level],callback);
	},
	removeNurse:function(id,callback){
		return db.query("delete from Nurse where NurseID=?",[id],callback);
	},
	updateNurse:function(id,Nurse,callback){
		return db.query("update Nurse set Level=? where NurseID=?",[Nurse.Level,id],callback);
	}
};
module.exports = Nurse;