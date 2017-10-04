var db = require('../dbconnection');

var Person={
	getAllPersons:function(callback){
		return db.query("select * from Person",callback);
	},
	getPersonById:function(id,callback){
		return db.query("select * from Person where PID=?",[id],callback);
	},
	addPerson:function(Person,callback){
		return db.query("instert into Person values(?,?,?,?,?)",[Person.PID,Person.Fname,Person.Lname,Person.Sex,Person.DOB],callback);
	},
	removePerson:function(id,callback){
		return db.query("delete from Person where PID=?",[id],callback);
	},
	updatePerson:function(id,Person,callback){
		return db.query("update Person set Fname=?,Lname=?,Sex=? where PID=?",[Person.Fname,Person.Lname,Person.Sex,id],callback);
	}
};
module.exports = Person;