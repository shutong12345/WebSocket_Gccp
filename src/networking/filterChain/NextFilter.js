/**
 * Created by longjia.xiang on 2016/7/27.
 */

var othis = null;
/**
 * @param {IoFilterChainEntry} ChainEntry
 * */
var NextFilter = function(ChainEntry){
    othis = ChainEntry;
};

/**
 * @param {}
 * */
NextFilter.prototype.exceptionCaught = function(session,cause){

};