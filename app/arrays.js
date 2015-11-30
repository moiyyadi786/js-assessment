exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, curr){
      return prev + curr;  
    });
  },

  remove : function(arr, item) {
      var notItem = function(val){
          return val != item;
      }
      return arr.filter(notItem);
  },

  removeWithoutCopy : function(arr, item) {
      var newArray = arr.slice(0);
      arr.length = 0;
      var notItem = function(val){
          if(val != item){
           arr.push(val);   
          }
          return val != item;
      }
      newArray = newArray.filter(notItem);
      return arr;
  },

  append : function(arr, item) {
      arr.push(item)
      return arr;
  },

  truncate : function(arr) {
    var last = arr.pop();
    return arr;
  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
