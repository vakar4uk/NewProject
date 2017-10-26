var db = require('../dbconnection');

var Room={
    getAllRooms:function(callback){
		return db.query("select * from Room",callback);
	},
	getRoomByID:function(id,callback){
		return db.query("select * from Room where RoomNo=?",[id],callback);
	},
	addRoom:function(OutPatient,callback){
		return db.query("insert into Room values(?,?,?)",[Room.RoomNo,Room.RoomType,Room.DeptNo],callback);
	},
	removeRoom:function(id,callback){
		return db.query("delete from Room where RoomNo=?",[id],callback);
	},
	updateRoom:function(id,Room,callback){
		return db.query("update Room set RoomType=? where RoomNo=?",[Room.RoomNo,Room.RoomType,Room.DeptNo,id],callback);
	}
}
module.exports = Room;