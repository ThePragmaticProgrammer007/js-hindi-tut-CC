/* Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2023-10-09T14:38:09.847Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Mon Oct 09 2023 07:39:18 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toLocaleString()) // Output : 10/9/2023, 7:44:20 AM
console.log(myDate.toLocaleDateString()) //Output : 10/9/2023
console.log(myDate.toLocaleTimeString()) // Output : 7:45:31 AM

console.log(myDate.toDateString()) //Output : Mon Oct 09 2023
console.log(myDate.toTimeString()) // Output : 07:46:40 GMT-0700 (Pacific Daylight Time)

console.log(myDate.toISOString()) // Output : 2023-10-09T14:43:39.337Z
console.log(myDate.toJSON()) //Output : 2023-10-09T14:40:58.495Z   
--------------------------------------------------------------------------------------------------------------------------------
toString() : Sun May 07 2023 14:16:39
toDateString() : Sun May 07 2023
toTimeString() :14:19:03 GMT+0500 (Pakistan Standard Time)
toLocaleString() : 5/7/2023, 2:20:24 PM
toISOString() : 2023-05-07T09:21:22.167Z
toUTCString() : Sun, 07 May 2023 09:24:48 GMT     
--------------------------------------------------------------------------------------------------------------------------------
Input :
const myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());


Sat Dec 02 2023 14:21:13 GMT+0530 (India Standard Time)
Sat Dec 02 2023 14:21:13 GMT+0530 (India Standard Time)
2023-12-02T08:51:13.237Z
2023-12-02T08:51:13.237Z
2/12/2023
14:21:13 GMT+0530 (India Standard Time)
Sat Dec 02 2023   
--------------------------------------------------------------------------------------------------------------------------------
console.log("1 " + mydate.toString());
console.log("2 " +mydate.toISOString());
console.log("3 " +mydate.toJSON());
console.log("4 " +mydate.toDateString());
console.log("5 " +mydate.toTimeString());
console.log("6 " +mydate.toLocaleDateString());
console.log("7 " +mydate.toLocaleTimeString());
console.log("8 " +mydate.toLocaleString());

OUTPUT:- 
1 Mon Oct 02 2023 20:33:54 GMT+0530 (India Standard Time)
2 2023-10-02T15:03:54.082Z
3 2023-10-02T15:03:54.082Z
4 Mon Oct 02 2023
5 20:33:54 GMT+0530 (India Standard Time)
6 10/2/2023
7 8:33:54 PM
8 10/2/2023, 8:33:54 PM   */

//--------------------------------------------------------------------------------------------------------------------------

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
 console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})