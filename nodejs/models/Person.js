var db = require('../dbconnection');

var Person={
	getAllPersons:function(callback){
		return db.query("select * from Person",callback);
	},
	getPersonByFname:function(name,callback){
		return db.query("select * from Person where Fname=?",[name],callback);
	},
	getPersonByPhoneNo:function(phone,callback){
		return db.query("select * from Person where PhoneNo=?",[phone],callback);
	},
	getPersonByID:function(id,callback){
		return db.query("select * from Person where PID=?",[id],callback);
	},
	addPerson:function(Person,callback){
		return db.query("insert into Person values(?,?,?,?,?,?,?,?,?,?,?,?)",[Person.PID,Person.Fname,Person.Lname,Person.Sex,Person.DOB,Person.Street,Person.Unit,Person.City,Person.State,Person.Zipcode,Person.PhoneNo,Person.Email],callback);
	},
	removePerson:function(id,callback){
		return db.query("delete from Person where PID=?",[id],callback);
	},
	updatePerson:function(id,Person,callback){
		return db.query("update Person set Fname=?,Lname=?,Sex=?,DOB=?,Street=?,Unit=?,City=?,State=?,Zipcode=?,PhoneNo=?,Email=? where PID=?",[Person.Fname,Person.Lname,Person.Sex,Person.DOB,Person.Street,Person.Unit,Person.City,Person.State,Person.Zipcode,Person.PhoneNo,Person.Email,id],callback);
	}
};
module.exports = Person;