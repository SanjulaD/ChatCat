'use strict';

const router = require('express').Router();

//Iterate through the routes object and mount the routes
let _registerRoute = ( routes , method ) => {
    for(let key in routes)
    {
        if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)) 
        {
            _registerRoute(routes[key] , key);
        } 
        else{
            //Register the routes
            if(method === 'get')
            {
                router.get(key , routes[key]);
            } 
            else if(method === 'post'){
                router.get(key, routes[key]);
            }
            else {
                router.use(routes[key]);
            }
        }
    }
}

let route = routes => {
    _registerRoute(routes);
    return router;
}

module.exports = {
    route
}