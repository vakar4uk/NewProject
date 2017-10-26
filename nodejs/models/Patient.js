var db = require('../dbconnection');

var Patient={
	getAllPatients:function(callback){
		return db.query("select * from Patient",callback);
	},
	getPatientById:function(id,callback){
		return db.query("select * from Patient where PatID=?",[id],callback);
	},
	addPatient:function(Patient,callback){
		return db.query("insert into Patient values(?,?,?,?,?)",[Patient.PatID,Patient.InsuranceProvider,Patient.CheckIn,Patient.CauseOfVisit,Patient.PID],callback);
	},
	removePatient:function(id,callback){
		return db.query("delete from Patient where PatID=?",[id],callback);
	},
	updatePatient:function(id,Patient,callback){
		return db.query("update Patient set InsuranceProvider=?, CheckIn=?, CauseOfVisit=? where PatID=?",[Patient.PatID,Patient.InsuranceProvider,Patient.CheckIn,Patient.CauseOfVisit,Patient.PID,id],callback);
	}
};
module.exports = Patient;