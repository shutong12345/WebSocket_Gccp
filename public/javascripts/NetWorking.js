/**
 * Created by longjia.xiang on 2016/9/21.
 */

var Client = require('./NetClient');
var FutrueEvent = require('../../src/networking/event/FutureEvent');
var cleint = new Client();

cleint.connect();

cleint.on('FutureFailed', function(event){
    throw new Error(event._value);
})

//if (cleint.session.connected){
//    console.log("connect success");
//    cleint.session.sendUTF("abcdef");
//}