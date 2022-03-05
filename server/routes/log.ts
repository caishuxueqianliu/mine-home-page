import {NextFunction, Request, Response} from "express";

const express = require('express');
const router = express.Router();
// const md5 = require('blueimp-md5');
const getIp = require('../utils/getIp')
const Log = require('../models/log')


// router.get('/log',async function(req:Request, res:Response, next:NextFunction) {
//     try {
//        const ip = getIp.getClientIp(req)
//         await Log.create({
//             ip
//         })
//         res.send()
//     }
//     catch (e) {
//         res.send()
//     }
// })
//


module.exports = router



