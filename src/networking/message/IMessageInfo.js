/**
 * Created by longjia.xiang on 2016/9/9.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');


function IMessageInfo(event)
{
    EventEmitter.call(this);

    self.emit("Ready", event);
}

util.inherits(IMessageInfo, EventEmitter);