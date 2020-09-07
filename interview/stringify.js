/**
 * @param {object|array|number|string} val - 待format的数据
 */
function format(val) {
    let res = '';
    
    if(Array.isArray(val)){
      for( let item of val){
        res += '[' + format(item) + ']';
      }
    }
    
    if(typeof val === 'object'){
      for( let key in val){
        res += '{' + key + ':' + format(val[key]) + '}' 
      }    
    }
    
    if(typeof val === 'number'){
      res += val.toString(10);
    }
    
    if(typeof val === 'string'){
      res += `"${val}"`
    }
    
    return res;
}

function printStringify(val) {
    let res = '';
    
    if(Array.isArray(val)){
      for( let item of val){
        console.log('[');
        printStringify(item);
        console.log(']'+',');
      }
    }
    
    if(typeof val === 'object'){
      for( let key in val){
        console.log('{');
        console.log(key + ':' + printStringify(val[key]));
        console.log('},');
      }    
    }
    
    if(typeof val === 'number'){
      console.log(val.toString(10)+',');
    }
    
    if(typeof val === 'string'){
      console.log(`"${val}"`+',')
    }
    
    return res;
  }
  // test case
  const data = {
    a: 1,
    b: [
      2,
      3,
      {
        c: 4
      }
    ],
    d: {
      e: 5,
      f: {
        g: '6'
      },
    }
  }
  printStringify(data);