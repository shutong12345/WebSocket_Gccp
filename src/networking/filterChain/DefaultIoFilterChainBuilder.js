/**
 * Created by longjia.xiang on 2016/7/27.
 */

/**
 * @param {DefaultIoFilterChainBulider} filterChain
 * */
var DefaultIoFilterChainBulider = function(filterChain){
     if (null == filterChain){
         init0();
     }else {
         init1(filterChain);
     }
};

var _entries = null;

function init0(){
    this._entries = new Array;
};

function init1(filterChain){
   this._entries = filterChain._entries;
};

/**
 * @param {DefaultIoFilterChainBulider} filterChain
 * */
DefaultIoFilterChainBulider.prototype.builidFilterChain = function (filterChain) {
    for (var i=0; i < this._entries; i++){
        filterChain.addLast();
    }
};

/**
 *
 * @param {DefaultIoFilterChainBulider} builider
 * @param {String} name
 * */
var IoFilterChainEntry = function (bulider,name,filter,nextFilter) {
    if (name == null){
        throw new Error("name is null?");
    }
    if (filter == null){
        throw new Error("filter is null?");
    }

    this._bulider = bulider;
    this._name = name;
    this._filter = filter;
    this._nextFilter = nextFilter;

    IoFilterChainEntry.prototype.getName = function(){
        return this._name;
    };
    IoFilterChainEntry.prototype.getFilter = function(){
        return this._filter;
    };
    IoFilterChainEntry.prototype.setFilter = function (filter) {
        this._filter = filter;
    };
    IoFilterChainEntry.prototype.getNextFilter = function(){
        return this._nextFilter;
    };
};