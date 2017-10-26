var db = require('../dbconnection');

var InPatient={
	getAllInPats:function(callback){
		return db.query("select * from InPatient",callback);
	},
	getInPatByID:function(id,callback){
		return db.query("select * from InPatient where InPatID=?",[id],callback);
	},
	addInPat:function(InPatient,callback){
		return db.query("insert into InPatient values(?,?,?,?)",[InPatient.InPatID,InPatient.CheckOut,InPatient.Condition,InPatient.Pat_RoomNo],callback);
	},
	removeInPat:function(id,callback){
		return db.query("delete from InPatient where InPatID=?",[id],callback);
	},
	updateInPat:function(id,InPatient,callback){
		return db.query("update InPatient set CheckOut=?, Condition=?, Pat_RoomNo=? where InPatID=?",[InPatient.CheckOut,InPatient.Condition,InPatient.Pat_RoomNo,id],callback);
	}
};
module.exports = InPatient;