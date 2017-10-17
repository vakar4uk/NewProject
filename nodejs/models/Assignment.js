var db = require('../dbconnection');

var Assignment={
    getAllAssignments:function(callback){
		return db.query("select * from Assignment",callback);
	},
	getAssignmentByID:function(id,callback){
		return db.query("select * from Assignment where AssnNo=?",[id],callback);
	},
	addAssignment:function(OutPatient,callback){
		return db.query("insert into Assignment values(?,?,?)",[Assignment.AssnNo,Assignment.NurseID,Assignment.InPatID],callback);
	},
	removeAssignment:function(id,callback){
		return db.query("delete from Assignment where AssnNo=?",[id],callback);
	},
	updateAssignment:function(id,Assignment,callback){
		return db.query("update Assignment set NurseID=?, InPatID=? where AssnNo=?",[Assignment.AssnNo,Assignment.NurseID,Assignment.InPatID,id],callback);
	}
}
module.exports = Assignment;