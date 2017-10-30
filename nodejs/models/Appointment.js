var db = require('../dbconnection');

var Appointment={
	getAllAppts:function(callback){
		return db.query("select * from Appointment",callback);
	},
	getApptByDate:function(id,callback){
		return db.query("select * from Appointment where ApptDate=?",[id],callback);
	},
	addAppt:function(Appointment,callback){
		return db.query("insert into Appointment values(?,?,?,?,?)",[Appointment.ApptNo,Appointment.Appt_DrID,Appointment.ApptDate,Appointment.Booked,Appointment.ApptTime],callback);
	},
	removeAppt:function(id,callback){
		return db.query("delete from Appointment where ApptNo=?",[id],callback);
	},
	updateAppt:function(id,Appointment,callback){
		return db.query("update Appointment set ApptDate=?, Booked=? where ApptNo=?",[Appointment.ApptDate,Appointment.Booked,id],callback);
	}
};
module.exports = Appointment;