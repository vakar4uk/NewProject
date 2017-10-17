var db = require('../dbconnection');

var OutPatient={
    getAllOutPatients:function(callback){
		return db.query("select * from OutPatient",callback);
	},
	getOutPatientByID:function(id,callback){
		return db.query("select * from OutPatient where OutPatientID=?",[id],callback);
	},
	addOutPatient:function(OutPatient,callback){
		return db.query("insert into OutPatient values(?)",[OutPatient.OutPatientID],callback);
	},
	removeOutPatient:function(id,callback){
		return db.query("delete from OutPatient where OutPatientID=?",[id],callback);
	}

}
module.exports = OutPatient;