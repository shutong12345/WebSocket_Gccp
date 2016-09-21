/**
 * Created by longjia.xiang on 2016/9/21.
 */

var Client = require('./NetClient');

var cleint = new Client();

cleint.connect();

if (cleint.session.connected){
    console.log("connect success");
    cleint.session.sendUTF("abcdef");
}