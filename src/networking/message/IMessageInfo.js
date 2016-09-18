/**
 * Created by longjia.xiang on 2016/9/9.
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');


function IMessageInfo()
{
    EventEmitter.call(this);

    self.emit("Ready", );

}

util.inherits(IMessageInfo, EventEmitter);