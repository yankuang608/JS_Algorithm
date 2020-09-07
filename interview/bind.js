Function.prototype.myBind = function(context){
    const bindArgs = [...arguments].slice(1,);
    const self = this;
    const func = function(){
        args = [...arguments];
        let isConstructor = this instanceof self;
        let res = self.apply( isConstructor ? this : context,bindArgs.concat(args));
    }
    function fNOP(){};
    fNOP.prototype = self.prototype;
    func.prototype = new fNOP();
    return func;
}