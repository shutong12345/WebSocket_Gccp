/**
 * Created by longjia.xiang on 2016/7/19.
 *
 *  ������ͨѶģ��
 */

var Event = require("./NetWorkEvent");
var WebSocketClient = require('websocket').client;
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var clientInfo =
{
    hostname:"ws://localhost",
    port:"5566",
    descript:"���������",
    path:"/",
    protol:"webscoket"
};

var client = new WebSocketClient();

client.connect(clientInfo.hostname+":"+port, clientInfo.protol);

client.on(Event.CLIENT_FILED, function(err){
    console.error("["+clientInfo.hostname +""+clientInfo.port +"] CONNECT EORROR: " + err.toString());
    //�˳�
});

/**
 * MessageΪ�����ҵ������
 * */
var sendWebSocketMessage = function(message){
    EventEmitter.call(this);

    //��װ���п�Э������

}

util.inherits(WebSocketClient, EventEmitter);
/**
 * messageΪ�����ҵ������
 * fuction Ϊ�ص�����
 * */
var sendMessage = function(message, callback,error,close){
    client.on(Event.CLIENT_CONNECT, function(connection) {
        console.log('WebSocket Client Connected');

        connection.on(Event.CONNECT_ERROR, function(err) {
            console.log("Connection Error: " + err.toString());
            //error�ص�
            if(error) {
                error(err);
            }
        });

        connection.on(Event.CONNECT_CLOSE, function() {
            console.log('echo-protocol Connection Closed');
            //�رջص�
            if(close) {
                close();
            }
        });

        connection.on(Event.CONNECT_MESSAGE, function(message) {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
                //ҵ�����ݻص�
                callback(message.utf8Data);
                //����Reciveʱ��
            }
        });

        function sendDate() {
            if (connection.connected) {
                //�������п�Э��

                connection.sendUTF(message.toString());
            }
        };
        sendDate();
    });
}

