/**
 * Created by longjia.xiang on 2016/7/27.
 */

var ArrayQueue = function (capactity) {

    var _queue = new Array;

    ArrayQueue.prototype.empty = function(){
        return _queue.length == 0;
    }

    ArrayQueue.prototype.offer = function(o){
        _queue.push(o);
    }

    ArrayQueue.prototype.peek = function(){
        if (_queue.length != 0)
            return _queue[0];
        return null;
    }

    ArrayQueue.property.poll = function(){
        return _queue.shift();
    }

    ArrayQueue.property.size = function(){
        return _queue.length;
    }

    ArrayQueue.property.clear = function(){
        _queue = new Array;
    }
};

module.exports = ArrayQueue;