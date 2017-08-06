/**
 * Created by zhuzhuxia on 2017/8/6.
 */

const OP = Object.prototype;

// export class watcherData{
    // constructor(obj,callback)
    // {
        //
        // this.data = obj;
        //
        // this.callback = callback;
        //
        // Object.keys(this.data).forEach(function(key,index,keyArray){
        //     var value = this.data[key];
        //
        //     Object.defineProperty(this.data,key,{
        //         get:function () {
        //             return this.data[key];
        //         },
        //         set:function (newValue) {
        //             this.callback(newValue);
        //         }
        //     }).bind(this);
        //
        // });
    // }
// }


    function watcherData(obj,callback) {

        var self = this;

        self.data = obj;

        self.callback = callback;

        Object.keys(self.data).forEach(function(key,index,keyArray){

            var value = self.data[key];

            Object.defineProperty(self.data,key,{
                // get:function (value) {
                //     return self.data[key];
                // },
                set:function (newValue) {
                    self.callback(newValue);
                }
            });

        });
    }