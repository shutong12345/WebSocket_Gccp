/**
 * Created by longjia.xiang on 2016/6/22.
 */

var WebSocketClient = require('websocket').client;

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
    console.log('Connect Error: ' + error.toString());
});

//client.on('connect', function(connection) {
//    console.log('WebSocket Client Connected');
//    connection.on('error', function(error) {
//        console.log("Connection Error: " + error.toString());
//    });
//    connection.on('close', function() {
//        console.log('echo-protocol Connection Closed');
//    });
//    connection.on('message', function(message) {
//        if (message.type === 'utf8') {
//            console.log("Received: '" + message.utf8Data + "'");
//        }
//    });
//
//    function sendNumber() {
//        if (connection.connected) {
//            var number = Math.round(Math.random() * 0xFFFFFF);
//            connection.sendUTF(number.toString());
//            setTimeout(sendNumber, 1000);
//        }
//    }
//    sendNumber();
//});
client.connect('ws://localhost:5566/', 'websocket');


conect.on('error', function(error) {
    console.log("Connection Error: " + error.toString());
});
conect.on('close', function() {
    console.log('echo-protocol Connection Closed');
});
conect.on('message', function(message) {
    if (message.type === 'utf8') {
        console.log("Received: '" + message.utf8Data + "'");
    }
});

function sendNumber() {
    if (conect.connected) {
        var number = Math.round(Math.random() * 0xFFFFFF);
        conect.sendUTF(number.toString());
        setTimeout(sendNumber, 1000);
    }
}
module.exports = sendNumber();