var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../public/js/db.js');

/* 主页获取新闻时的get请求 */
router.get('/', function(req, res, next) {
	//req：前台发来的请求
	var newstype = req.query.newstype;

	// //创建数据库连接
	var con = mysql.createConnection(db);
	con.connect();
	var sql = "SELECT * FROM news WHERE newstype = ?";
	con.query(sql,[newstype],function(err,rows,fields){
		//res:发回给前台的响应
		res.json(rows);
	})
});

module.exports = router;
