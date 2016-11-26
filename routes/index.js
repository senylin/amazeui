var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
 router.get('/admin/user',function(req,res,next){
    res.render('admin-user',{title:'user'});
});
router.get('/admin/index',function(req,res,next){
    res.render('admin-index',{title:'user'});
});
router.get('/admin/campus',function(req,res,next){
    res.render('admin-campus',{title:'user'});
});
router.get('/admin/announcement',function(req,res,next){
    res.render('admin-announcement',{title:'user'});
});
router.get('/admin/class',function(req,res,next){
    res.render('admin-class',{title:'user'});
});
router.get('/admin/class/:name',function(req,res,next){
    res.render('admin-class-model',{title:req.params.name});
});
router.get('/admin/tasklist/:class',function(req,res,next){
    res.render('admin-task-list',{title:req.params.class});
});
router.get('/admin/task/:class',function(req,res,next){
    res.render('admin-task-model',{title:req.params.class});
});
router.get('/admin/chat/:class',function(req,res,next){
    res.render('admin-chat-model',{title:req.params.class});
});
router.get('/admin/resource/:class',function(req,res,next){
    res.render('admin-resource-list',{title:req.params.class});
});
router.get('/admin/usermanage/:class',function(req,res,next){
    res.render('admin-user-manange',{title:req.params.class});
});
router.get('/admin/campusmanage/:class',function(req,res,next){
    res.render('admin-capinfo-manage',{title:req.params.class});
});
router.get('/admin/student/lesson/:class',function(req,res,next){
    res.render('admin-student-lesson',{title:req.params.class});
});
router.get('/admin/test',function(req,res,next){
    res.render('test',{title:'user'});
});
module.exports = router;
