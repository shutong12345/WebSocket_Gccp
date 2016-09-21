/**
 * Created by longjia.xiang on 2016/9/21.
 */

function FutureEvent(type,value){
    this._type = type;
    this._value = value;

    // 连接失败事件
    FutureEvent.FAILED = "FutureFailed";
    // 正常连接
    FutureEvent.CONNECT = "FutureConnect";
};

module.exports = FutureEvent;