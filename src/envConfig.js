/**
 * Created by longjia.xiang on 2016/7/19.
 * 环境配置
 */

module.exports = (function(){
    //var _value = 'production';//生产环境
    var _value = 'development';//测试环境
    return function(){//返回的一个function能放回到_value
        return _value;
    }
})();//一个立即执行的匿名函数