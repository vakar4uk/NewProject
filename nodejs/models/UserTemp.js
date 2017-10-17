var db = require('../dbconnection');

var UserTemp={
	getAllUsers:function(callback){
		return db.query("select * from UserTemp",callback);
	},
	getUserById:function(id,callback){
		return db.query("select * from UserTemp where UID=?",[id],callback);
	},
	addUser:function(UserTemp,callback){
		return db.query("insert into UserTemp values(?,?,?,?,?,?,?)",[UserTemp.UID,UserTemp.Username,UserTemp.Email,UserTemp.Fname,UserTemp.Lname,UserTemp.Password,UserTemp.UserLevel],callback);
	},
	removeUser:function(id,callback){
		return db.query("delete from UserTemp where UID=?",[id],callback);
	},
	updateUser:function(id,Person,callback){
		return db.query("update UserTemp set Password=? where UID=?",[UserTemp.Password,id],callback);
	}
};
module.exports = UserTemp;