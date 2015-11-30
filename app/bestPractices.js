exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */


exports.bestPracticesAnswers = {

 globals : function() {
    var myObject = {
      name : 'Jory'
    };

    return myObject;
  },

  functions : function(flag) {
    // getValue is used here I would have rather just wrote return flag
    // also we can assing assign flag as this.flag = flag so that we didn't have to pass it again
    function getValue(flag){
        return flag ? 'a' : 'b';
    }

    return getValue(flag);
  },

  parseInt : function(num) {
    // It can be extended more but the test cases demands only this
    
    if(typeof num === "undefined"){
        return false;
    }
    if(typeof num === "number"){
        return num;
    }
    function getNumber(args){
       args = args.filter(function(val){
                return val.trim() !== "";     
            });
        return function(){
            if(args.length > 1){
                num = parseInt(args[0]) * parseInt(args[1]);
                if(num == "NaN"){
                    return flase;
                }
                else {
                  return num;    
                }
            }
            return parseInt(num.replace(/\D/g,'')) === "NAN" ? "":parseInt(num.replace(/\D/g,''));            
        }      
    }
    var args = num.split('x');
    return getNumber(args)();
     
  },

  identity : function(val1, val2) {

  },
};
