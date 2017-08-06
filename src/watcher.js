/**
 * Created by zhuzhuxia on 2017/8/6.
 */


export default class  Watcher{

    constructor(obj,callback)
    {
        var self = this;

        self.data = obj;

        self.callback = callback;

        Object.keys(self.data).forEach(function(key,index,keyArray){

            var value = self.data[key];

            Object.defineProperty(self.data,key,{
                get:function () {
                    return self.data[key];
                },
                set:function (newValue) {
                    self.callback(newValue);
                }
            });

        });
    }
}


