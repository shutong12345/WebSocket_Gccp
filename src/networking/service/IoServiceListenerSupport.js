/**
 * Created by longjia.xiang on 2016/7/27.
 */
var Events = require('events');
var IoServiceEvent = require('../event/IoServiceEvent');


var _managedSessions;
var IoServiceListenSupport = function(){
    IoServiceListenSupport.prototype.fireSessionCreated = function(session){
        var first = !_managedSessions;
        if (!_managedSessions){
            _managedSessions = {};
        }
        if (!(session.sessionId in _managedSessions)){
            _managedSessions[session.sessionId] = session;
        }
        if (first){
            firstServiceActivated();
        }

        var  chain = session.filterChain;
        //���ݵ�session�Ĺ�������ִ��
        chain.fireSessionCreated();

        //�ַ�sessionCreated�¼�
        var event = new IoServiceEvent;
        event.type = IoServiceEvent.SESSION_CREATED;
        event.session = session;
        session.service.dispatchIoEvent(event);
    };
};

function firstServiceActivated (){
    console.log("first session create");
};

module.exports = IoServiceListenSupport;