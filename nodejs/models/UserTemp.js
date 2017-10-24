var db = require('../dbconnection');


var UserTemp={
	getAllUsers:function(callback){
		return db.query("select * from UserTemp",callback);
	},
	login:function(uname,callback){
		return db.query("select * from UserTemp where Username=?",[uname],callback);
	},
	addUser:function(UserTemp,callback){
		return db.query("insert into UserTemp values(?,?,?,?)",[UserTemp.UID,UserTemp.Username,UserTemp.UserLevel, UserTemp.User_PID],callback);
	},
	removeUser:function(id,callback){
		return db.query("delete from UserTemp where UID=?",[id],callback);
	},
	updateUser:function(id,Administrative,callback){
		return db.query("update UserTemp set Password=? where UID=?",[UserTemp.Password,id],callback);
	}
};
module.exports = UserTemp;