/**
 * Created by MBA on 2/9/2017.
 */

var express=require('express');
var application=express();
application.use(express.static('public'));
application.listen('4000',function () {
    console.log("Application running at 4000");
});
