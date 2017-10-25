var db = require('../dbconnection');

var BloodTest={
	getAllTests:function(callback){
		return db.query("select * from BloodTest",callback);
	},
	getTestByDate:function(date,callback){
		return db.query("select * from BloodTest where DateTaken=?",[date],callback);
	},
	addBloodTest:function(BloodTest,callback){
		return db.query("insert into BloodTest values(?,?,?,?,?,?,?)",[BloodTest.ResultsNo,BloodTest.Sodium,BloodTest.Potassium,BloodTest.Calcium,BloodTest.Glucose,BloodTest.Hemoglobin,BloodTest.Results_PID],callback);
	},
	removeResults:function(id,callback){
		return db.query("delete from BloodTest where ResultsNo=?",[id],callback);
	},
	updateResults:function(id,BloodTest,callback){
		return db.query("update BloodTest set Sodium=?,Potassium=?,Calcium=?,Globulinn=?,Hemoglobin=? where ResultsNo=?",[BloodTest.Sodium,BloodTest.Potassium,BloodTest.Calcium,BloodTest.Glucose,BloodTest.Hemoglobin,id],callback);
	}
};
module.exports = BloodTest;