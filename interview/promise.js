setTimeout(function(){console.log(0);},0);
new Promise(resolve => {
    console.log(2);
    resolve(3);
    new Promise.resolve().then(()=>{console.log(4)});
})
    .then(function(num){console.log(num);});
