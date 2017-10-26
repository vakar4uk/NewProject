var db = require('../dbconnection');

var Department={
	getAllDepartments:function(callback){
		return db.query("select * from Department",callback);
	},
	getDepartmentById:function(id,callback){
		return db.query("select * from Department where DeptNo=?",[id],callback);
	},
	addDepartment:function(Department,callback){
		return db.query("insert into Department values(?,?)",[Department.DeptNo,Department.DeptName],callback);
	},
	removeDepartment:function(id,callback){
		return db.query("delete from Department where DeptNo=?",[id],callback);
	},
	updateDepartment:function(id,Department,callback){
		return db.query("update Department set DeptName=? where DeptNo=?",[Department.DeptNo,Department.DeptName,id],callback);
	}
};
module.exports = Department;