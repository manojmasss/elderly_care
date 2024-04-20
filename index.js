


var sid ="AC9ed47f758eeea08c30e48d5c03690046";
var auth="b80e18694f5125a81dddf243acc8bbae";

var twilio = require('twilio')(sid,auth)

twilio.messages.create({
    from:'+12513136105',
    to:'+917904623849',
    body:'The tablet is missing mam'
})
.then((res)=>console.log("The message was sent the user "))
.catch((e)=>{
    console.log("err",e);

});

//LYJEHTQADUM7LB7T3KUMGTZ9