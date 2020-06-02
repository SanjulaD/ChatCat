'use strict';

const helper = require('../helpers');

module.exports = () => {
    let routes = {
        'get': {
            '/': ( req , res , next ) => {
                res.render('login');
            },
            '/room': ( req , res , next ) => {
                res.render('rooms');
            },
            '/chatroom': ( req , res , next ) => {
                res.render('chatroom');
            },
        },
        'post': {

        },
        'NA': ( req , res , next ) => {
            res.status(404).sendFile(process.cwd() + '/views/404.html');
        }
    }

    return helper.route(routes);

}