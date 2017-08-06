/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo__ = __webpack_require__(1);
/**
 * Created by zhuzhuxia on 2017/8/6.
 */



Object(__WEBPACK_IMPORTED_MODULE_0__demo__["a" /* runDemo */])();





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runDemo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__watcher__ = __webpack_require__(2);
/**
 * Created by zhuzhuxia on 2017/8/6.
 */






function runDemo () {

    console.log('run demo');

    var data = {
        name:'wulinzhuzhuxia',
        age:'past birthday gangang',
        children:'zhufayu',
        family:['zhufayu','luzhongying','zhuwenzhong','wuyuping'],
        target:'hold a family money house ',
        current:'have a job and do it',
        after:'do some bussine or do some management',
        tree:{
            a:'shahala',
            b:'egypt',
            c:'ulp'

        }
    };

    let callback = function(value){
        alert(value);
    };

    new __WEBPACK_IMPORTED_MODULE_0__watcher__["a" /* default */](data,callback);


    setTimeout(function(){
        // data.name = 'dead pig';
        data.tree.a = 'not shahala';
//      data.family[0] = 'zhuquecheng';
    },2000)




}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Created by zhuzhuxia on 2017/8/6.
 */


class  Watcher{

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
/* harmony export (immutable) */ __webpack_exports__["a"] = Watcher;





/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map