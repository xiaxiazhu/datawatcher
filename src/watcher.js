/**
 * Created by zhuzhuxia on 2017/8/6.
 */


export default class  Watcher{

    constructor(obj,callback)
    {
        this.data = obj;

        this.callback = callback;

        this.depRecurve(this.data);
    }


    /*
    *   深度递归监测
    * */

    depRecurve(subObj = undefined){


        if(Object.prototype.toString.call(subObj) === "[object Object]" ){
            var keys = Object.keys(subObj);

            keys.forEach((key,index)=>{
                var value = subObj[key];
            
                if (Object.prototype.toString.call(value) === "[object Object]"){
                    this.depRecurve(value);
                }

                Object.defineProperty(subObj,key,{
                        get:() => value ,
                    set: newValue => {this.callback(newValue)},
                })
            })
        }

    }
}


