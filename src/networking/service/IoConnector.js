/**
 * Created by longjia.xiang on 2016/7/26.
 */

var Event = require('events');
var ArrayQueue = require('../utils/ArrayQueue');

var IoConnector = function(){

    var _connectQueue = new ArrayQueue();
    var _closeQueue = new ArrayQueue();
};