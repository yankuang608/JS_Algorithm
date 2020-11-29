/**
 * js 面试常考 34 题总结
 */

const { promises } = require("fs");
const { resolve } = require("path");

// 1.数组的扁平化
const flat = (arr) => arr.flat(Infinity);

const flat2 = (arr) => JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');

const flat3 = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flat3(item) : item);
    }, [])
}

// 2.数组去重
const unify = arr => Array.from(new Set(arr));
const unify = arr => arr.filter((item, index) => arr.indexOf(item) === index);

// 3.类数组转化
function transform() {
    console.log([...arguments]);
    console.log(Array.prototype.slice.call(arguments));
    console.log(Array.from(arguments));
    console.log(Array.prototype.concat.apply([], arguments));
}

// Array.prototype.filter
Array.prototype._filter = function (fn, context) {
    let self = this, res = [];
    for (let i = 0; i < self.length; i++) {
        if (fn(self[i])) {
            res.push(self[i])
        }
    }
    return res;
}

// 8.apply
Function.prototype.apply = function (context, args) {
    if (typeof this !== 'function') {
        throw new TypeError('Type Error');
    }

    const fn = Symbol('fn');
    context[fn] = this;

    const res = context[fn](...args);
    delete context[fn];
    return res;
}

// 9.call
Function.prototype.call = function (context, ...args) {
    if (typeof this !== 'function') {
        throw TypeError('Type Error');
    }

    const fn = Symbol('fn');
    context[fn] = this;

    const res = context[fn](...args);
    delete context[fn];
    return res;
}

// 10.bind
Function.prototype.bind = function (context, ...preArgs) {
    if (typeof this !== 'function') {
        throw TypeError('Type Error');
    }
    const self = this;
    const fBound = function (...args) {
        return self.apply(this instanceof fNOP ? this : context, [...preArgs, ...args]);
    }

    function fNOP() { }
    fBound.prototype = new fNOP();
    fNOP.prototype = self.prototype;
    return fBound;
}

// 11.防抖
function debounce(fn, wait, immediate) {
    let timeout;
    const _debounced = function (...args) {
        const context = this;
        if (timeout) { clearTimeout(timeout); }
        if (immediate) {
            let callNow = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            }, wait);
            if (callNow) { fn.apply(context, args) }
        } else {
            timeout = setTimeout(() => {
                fn.apply(context, args);
            }, wait)
        }
    }
    _debounced.cancell = function () {
        clearTimeout(timeout);
        timeout = null;
    }
    return _debounced;
}

// 12.节流
function throttle(fn, wait) {
    let time = 0;
    return function (...args) {
        const now = +new Date();
        if (now - time > wait) {
            fn.apply(this, args);
            time = now;
        }
    }
}

function throttle(fn, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(context, args);
                timeout = null;
            }, wait);
        }
    }
}

function throttle(fn, wait) {
    let timeout, previous = 0;
    const _throttle = function (...args) {
        const now = +new Date();
        const remain = wait - (now - previous);
        if (remain <= 0 || remain > wait) {
            timeout = null;
            clearTimeout(timeout);
            previous = now;
            fn.apply(this, args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                fn.apply(this, args);
                previous = +new Date();
                timeout = null;
            }, remain)
        }
    }
    return _throttle;
}

// 13.函数柯里化
function curry(fn) {
    const len = fn.length;
    let argArr = [];
    const _curry = function (...args) {
        if (argArr.length + args.length >= len) {
            return fn.apply(this, [...argArr, ...args]);
        } else {
            argArr.push(args);
            return _curry;
        }
    }
}

function add(...preArgs) {
    let argArr = [...preArgs];
    const _add = function (...args) {
        argArr.push(...args);
        return _add;
    }
    _add.toString = function () {
        return argArr.reduce((acc, item) => acc + item);
    }
    return _add;
}

// 14.模拟 new
function generator(constructor, ...args) {
    let obj = Object.create(constructor.prototype);
    constructor.apply(obj, args);
    return obj;
}

// 15.模拟 instanceof
function _instanceof(obj, constructor) {
    if (!obj || !constructor) { return false; }
    const proto = Object.getPrototypeOf(obj);
    return proto === constructor.prototype || _instanceof(proto, constructor);
}

// 16.Promise.all
Promise.prototype._all = function (proArr) {
    return new Promise((resolve, reject) => {
        let output = new Array(proArr.length), count = 0;
        for (let i = 0; i < proArr.length; i++) {
            proArr[i]
                .then(res => {
                    output[i] = res;
                    count++;
                    if (count === proArr.length) {
                        resolve(output);
                    }
                },
                    rej => {
                        reject(ref);
                    });
        }
    })
}

// 17.最大并行限制
class Scheduler {
    constructor(num) {
        this.queue = [];
        this.maxCount = num;
        this.curCount = 0;
    }

    load(...args) {
        this.queue.push(...args);
    }

    start() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }

    request() {
        if (!this.queue || !this.queue.length || this.curCount >= this.maxCount) { return; }
        this.curCount++;
        const curPromise = this.queue.shift();
        curPromise()
            .then(res => {
                this.curCount--;
                this.request();
            })
    }

}

// 18.JSONP
const jsonp = ({ url, params, callbackName }) => {
    const generateUrl = () =>
        Object.keys(params).reduce((acc, item) => {
            const key = encodeURIComponent(item);
            const value = encodeURIComponent(params[item]);
            return `${acc}&${key}=${value}`;
        }, `${encodeURI(url)}?`);
    return new Promise((resolve, reject) => {
        const scriptEle = document.createElement('script');
        scriptEle.src = generateUrl();
        document.body.appendChild(scriptEle);

        window[callbackName] = data => {
            resolve(data);
            document.body.removeChild(scriptEle);
        }
    })

}

// 19.AJAX
const ajax = (method,url,param=null) => {
    return new Promise((resolve,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method,url,true);
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== 4){return;}
            if(xhr.status === 200 || xhr.status === 304){
                resolve(xhr.responseText);
            }else{
                reject(xhr.responseText);
            }
        }
        xhr.send(param);
    })
}

// 20.Emitter
function EventEmitter() {
    this.event = new Map();
}

EventEmitter.prototype.on = function(type,fn,once){
    const handlerArr = this.event.get(type);
    if(!handlerArr){    // 还没有绑定过该事件
        const handlers = [{callback:fn,once}];
        this.event.set(type,handlers);
    }else{
        handlerArr.push({callback:fn,once});
    }
}

EventEmitter.prototype.removeHandler = function(type,fn){
    const handlerArr = this.event.get(type);
    const index = handlerArr.reduce((acc,item,index) => {
        if(item.callback === fn){ return index; }
        return acc;
    },-1);
    if(index >= 0){
        handlerArr.splice(index,1);
    }
}

EventEmitter.prototype.emit = function(type,...args){
    const handerArr = this.event.get(type);
    if(handerArr){
        const replaced = handerArr.filter(item => {
            const fn = item.callback;
            fn(...args);
            return !item.once
        });
        this.event.set(type,replaced);
    }
}

EventEmitter.prototype.removeAllHandler = function(type){
    this.event.delete(type);
}

// 21.图片懒加载
function lazyLoad(){
    const imgs = document.getElementsByTagName('img');
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    imgs
        .filter(image => image.offsetHeight < scrollTop + clientHeight)
        .forEach(image => image.src = image.dataset.src);   // 使用 html5 data-image="./pig.png" 属性 
}

window.addEventListener('scroll',throttle(lazyLoad,500)); // 使用节流

// 22.滚动加载
window.addEventListener('scroll',() => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if(scrollHeight <= scrollTop + clientHeight){

    }
},false);

// 23.VNode to DOM
function paint(vnode) {
    if(vnode === 'number'){
        vnode = String(vnode);
    }

    if(typeof vnode === 'string'){
        return document.createTextNode(vnode);
    }

    const dom = document.createElement(vnode.tag);

    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key];
            dom.setAttribute(key,value);
        })
    }

    vnode.children.forEach(child => paint(child));
    return dom;
}