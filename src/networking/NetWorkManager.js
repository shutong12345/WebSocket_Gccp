/**
 * Created by longjia.xiang on 2016/7/19.
 *
 *  与服务端通讯模块
 */

var Event = require("./NetWorkEvent");
var WebSocketClient = require('websocket').client;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var clientInfo =
{
    hostname:"ws://localhost",
    port:"5566",
    descript:"开发接入点",
    path:"/",
    protol:"webscoket"
};

var client = new WebSocketClient();

client.connect(clientInfo.hostname+":"+port, clientInfo.protol);

client.on(Event.CLIENT_FILED, function(err){
    console.error("["+clientInfo.hostname +""+clientInfo.port +"] CONNECT EORROR: " + err.toString());
    //退出
});

/**
 * Message为服务端业务数据
 * */
var sendWebSocketMessage = function(message){
    EventEmitter.call(this);

    //组装成中控协议数据

}

util.inherits(WebSocketClient, EventEmitter);
/**
 * message为服务端业务数据
 * fuction 为回调函数
 * */
var sendMessage = function(message, callback,error,close){
    client.on(Event.CLIENT_CONNECT, function(connection) {
        console.log('WebSocket Client Connected');

        connection.on(Event.CONNECT_ERROR, function(err) {
            console.log("Connection Error: " + err.toString());
            //error回调
            if(error) {
                error(err);
            }
        });

        connection.on(Event.CONNECT_CLOSE, function() {
            console.log('echo-protocol Connection Closed');
            //关闭回调
            if(close) {
                close();
            }
        });

        connection.on(Event.CONNECT_MESSAGE, function(message) {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
                //业务数据回调
                callback(message.utf8Data);
                //发送Recive时间
            }
        });

        function sendDate() {
            if (connection.connected) {
                //构建成中控协议

                connection.sendUTF(message.toString());
            }
        };
        sendDate();
    });
}

