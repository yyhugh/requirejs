require(["m"], function (myModule) {
    console.log("myModule", myModule);
    var name = myModule.getName();
    console.log(name);
});


require(["m", "m"], function (myModule) {
    console.log("myModule", myModule);
    var name = myModule.getName();
    console.log(name);
});
