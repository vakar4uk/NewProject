var db = require('../dbconnection');

var Appointment={
	getAllAppts:function(callback){
		return db.query("select * from Appointment",callback);
	},
	getApptByNo:function(id,callback){
		return db.query("select * from Appointment where ApptNo=?",[id],callback);
	},
	addAppt:function(Appointment,callback){
		return db.query("insert into Appointment values(?,?,?,?)",[Appointment.ApptNo,Appointment.Appt_DrID,Appointment.ApptDate,Appointment.Appt_PID],callback);
	},
	removeAppt:function(id,callback){
		return db.query("delete from Appointment where ApptNo=?",[id],callback);
	},
	updateAppt:function(id,Appointment,callback){
		return db.query("update Appointment set ApptDate=? where ApptNo=?",[Appointment.ApptDate,id],callback);
	}
};
module.exports = Appointment;