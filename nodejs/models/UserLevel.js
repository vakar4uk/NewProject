var db = require('../dbconnection');

var UserLevel={
	getAllLevels:function(callback){
		return db.query("select * from UserLevel",callback);
	},
	getLevelByNo:function(id,callback){
		return db.query("select * from UserLevel where ULevel=?",[id],callback);
	},
	addLevel:function(UserLevel,callback){
		return db.query("insert into UserLevel values(?,?)",[UserLevel.ULevel,UserLevel.LevelType],callback);
	},
	removeLevel:function(id,callback){
		return db.query("delete from UserLevel where ULevel=?",[id],callback);
	}
};
module.exports = UserLevel;