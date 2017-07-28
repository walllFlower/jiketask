var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../public/js/db.js');

var con = mysql.createPool(db); 
/* 后台请求页面 url中第一级为admin*/
router.get('/getnews', function(req, res, next) {
	var sql = "SELECT * FROM news";
	con.query(sql,function(err,rows,fields){
		res.json(rows);
	})
});

//添加新闻
router.post('/insert', function(req, res, next) {
	var newstype = req.body.newstype,
		newstitle = req.body.newstitle,
	 	newsimg = req.body.newsimg,
	 	newstime = req.body.newstime,
	 	newssrc = req.body.newssrc;

	 console.log(newstitle);
 	var sql = "INSERT INTO news VALUES(null,?,?,?,?,?)";
	con.query(sql,[newstype,newstitle,newsimg,newstime,newssrc],function(err,result){
		res.json(result);
	})
});

//更新数据
router.post('/update',function(req,res){
	var newsid = req.body.newsid,
		newstype = req.body.newstype,
		newstitle = req.body.newstitle,
	 	newsimg = req.body.newsimg,
	 	newstime = req.body.newstime,
	 	newssrc = req.body.newssrc;

	var sql = "UPDATE news SET newstype=?,newstitle=?,newsimg=?,newstime=?,newssrc=? WHERE id=?";
	con.query(sql,[newstype,newstitle,newsimg,newstime,newssrc,newsid],function(err,rows){
		console.log('success');
		res.json({'message':'success'});
	});	
})

//编辑框返回数据
router.get('/edit',function(req,res){
	var enewsId = req.query.enewsId;

	var sql = "SELECT * FROM news WHERE id=?";
	con.query(sql,[enewsId],function(err,rows){
		console.log(rows);
		res.json(rows);
	});	
})

//删除数据
router.post('/delete',function(req,res){
	var newsid = req.body.newsid;

	var sql = "DELETE FROM news WHERE id=?";
	con.query(sql,[newsid],function(err,rows){
		res.json({'message':'delete success'});
	})
})
module.exports = router;
