/**
 * Created by zhuzhuxia on 2017/8/6.
 */



import watcher from './watcher';


export function runDemo () {

    console.log('run demo');

    var data = {
        name:'wulinzhuzhuxia',
        age:'past birthday gangang',
        children:'zhufayu',
        family:['zhufayu','luzhongying','zhuwenzhong','wuyuping'],
        target:'hold a family money house ',
        current:'have a job and do it',
        after:'do some bussine or do some management'
    };

    let callback = function(value){
        alert(value);
    };

    new watcher(data,callback);


    setTimeout(function(){
        data.name = 'dead pig';
//      data.family[0] = 'zhuquecheng';
    },2000)




}