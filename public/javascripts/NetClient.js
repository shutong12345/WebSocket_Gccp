/**
 * Created by longjia.xiang on 2016/6/22.
 */

var WebSocketClient = require('websocket').client;
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var MessageEvent = require('../../src/networking/event/MessageEvent');
var FutrueEvent = require('../../src/networking/event/FutureEvent');

/**
 * 与服务端连接Client
 * @param {Object} config 连接参数
 * */
function NetClient(config) {
    EventEmitter.call(this);
    this.self = null;
    this.session = null;
    this.config = {
        url: "http://localhost",
        port: 8080
    };
};

util.inherits(NetClient, EventEmitter);

NetClient.prototype.connect = function (config) {
    this.self = this;
    this.client = new WebSocketClient();
    this.self._addClientEventListeners();
    //this.client.on('connectFailed', function(err){
    //    //退出
    //});
    this.client.connect('ws://localhost:5566/', 'websocket');
};

NetClient.prototype._addClientEventListeners = function(){
    this.client.on('connectFailed',this.handlerClientError.bind(this));
    this.client.on('connect',this.handlerClientConnect.bind(this));
};

NetClient.prototype.handlerClientError = function (error) {
    //console.log("Connection Error: " + error.toString());
    //throw new Error(" CONNECT EORROR: " + error.toString());
    var event = new FutrueEvent(FutrueEvent.FAILED, error);
    this.emit('FutureFailed'.toString(), event);
};

NetClient.prototype.handlerClientConnect = function (connect) {
    console.log('WebSocket Client Connected');
    this.session = connect;
    var event = new FutrueEvent(FutrueEvent.CONNECT,connect);
    this.emit(FutrueEvent.CONNECT,event);
}

module.exports = NetClient;
