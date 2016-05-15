﻿var login = require('../models/login');

var users = [];

module.exports = function (app, socket) {
    
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/client/www/index.html');
    });

    app.post('/start-chat', function (req, res) {
        var nickname = req.body.nickname;

        var collection = new login.login({
            nickname: nickname
        });

        collection.save(function (err) {
            if (err) {
                res.status(500).send('Error');
            } else {
                users.push({
                    nickname : nickname,
                    id: process.env.userid
                });
                process.env.users = users;
                res.send('User added to chat!');
            }
        });
    });
    
    app.post('/login', function (req, res) {
        var socketid = process.env.socketid;
        var username = req.body.username;
        var password = req.body.password;

        var collection = new login.login({
            username: username,
            password: password
        });

        collection.save(function (err) {
            if (err) {
                res.status(500).send('Error');
            } else {
                res.send('Added');
            }
        });
    });

    app.get('/all-users', function(req, res){
        res.send(process.env.userlist);
    });

}