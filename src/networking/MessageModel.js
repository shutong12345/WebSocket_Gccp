/**
 * Created by longjia.xiang on 2016/7/21.
 *
 * ���пط����ͨѶ���ݽṹ
 *
 */

/**
 * ids  ����id
 * tokenId ����id
 * data ҵ������
 * */
var MessageModel = function MessageModel(ids, tokenId, data)
{
    //���ݳ���
    var size = 0;
    var buffer = new Buffer();
    this.agentIds = new Array;
    if(ids)
      this.agentIds = ids;
    this.tokenId = tokenId;
    this.data = data;
}

