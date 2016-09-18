/**
 * Created by longjia.xiang on 2016/7/21.
 *
 * 与中控服务端通讯数据结构
 *
 */

/**
 * ids  区服id
 * tokenId 令牌id
 * data 业务数据
 * */
var MessageModel = function MessageModel(ids, tokenId, data)
{
    //数据长度
    var size = 0;
    var buffer = new Buffer();
    this.agentIds = new Array;
    if(ids)
      this.agentIds = ids;
    this.tokenId = tokenId;
    this.data = data;
}

