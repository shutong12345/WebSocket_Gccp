/**
 * Created by longjia.xiang on 2016/7/19.
 * ��������
 */

module.exports = (function(){
    //var _value = 'production';//��������
    var _value = 'development';//���Ի���
    return function(){//���ص�һ��function�ܷŻص�_value
        return _value;
    }
})();//һ������ִ�е���������