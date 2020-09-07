new Promise(resolve => {
    resolve();
    console.log(1);
}).then(_ => {
    console.log(3);
    // new Promise(resolve => {
    //     resolve();
    //     console.log(4);
    // }).then(_ => {
    //     console.log(5);
    // });
    Promise.resolve().then(_ => {
        console.log(4);
        Promise.resolve().then(_ => {
            console.log(7);
            // Promise.resolve().then(_ => {
            //     console.log(8);
            // });
        });
    });
}).then(_=> {
    console.log(6);
}).then(_=> {
    console.log(8);
});
console.log(2);