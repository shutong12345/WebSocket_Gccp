/**
 * Created by longjia.xiang on 2016/9/21.
 */

function FutureEvent(type,value){
    this._type = type;
    this._value = value;

    // ����ʧ���¼�
    FutureEvent.FAILED = "FutureFailed";
    // ��������
    FutureEvent.CONNECT = "FutureConnect";
};

module.exports = FutureEvent;