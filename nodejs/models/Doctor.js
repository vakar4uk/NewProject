var db = require('../dbconnection');

var Doctor={
	getAllDoctors:function(callback){
		return db.query("select * from Doctor",callback);
	},
	getDoctorById:function(id,callback){
		return db.query("select * from Doctor where DrID=?",[id],callback);
	},
	getDoctor:function(id,callback){
		return db.query("select fname, lname from Person left join Staff on Person.PID=Staff.Staff_PID where SID=?",[id],callback);
	},
	addDoctor:function(Doctor,callback){
		return db.query("insert into Doctor values(?,?)",[Doctor.DrID,Doctor.Speciality],callback);
	},
	removeDoctor:function(id,callback){
		return db.query("delete from Doctor where DrID=?",[id],callback);
	},
	updateDoctor:function(id,Doctor,callback){
		return db.query("update Doctor set Speciality=? where DrID=?",[Doctor.DrID,Doctor.Speciality,id],callback);
	}
};
module.exports = Doctor;