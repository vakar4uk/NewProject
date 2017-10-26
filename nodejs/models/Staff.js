var db = require('../dbconnection');

var Staff={
	getAllStaff:function(callback){
		return db.query("select * from Staff",callback);
	},
	getStaffByID:function(id,callback){
		return db.query("select * from Staff where SID=?",[id],callback);
	},
	addStaff:function(Staff,callback){
		return db.query("insert into Staff values(?,?,?,?)",[Staff.SID,Staff.Salary,Staff.Staff_DeptNo,Staff.Staff_PID],callback);
	},
	removeStaff:function(id,callback){
		return db.query("delete from Staff where SID=?",[id],callback);
	},
	updateStaff:function(id,Staff,callback){
		return db.query("update Staff set Salary=?, Staff_DeptNo=? where SID=?",[Staff.Salary,Staff.Staff_DeptNo,id],callback);
	}
};
module.exports = Staff;