//date

let myDate = new Date()
//console.log(myDate)
//2024-02-29T03:43:32.617Z <= yyyy-mm-ddThh:mm:ss.sssZ
//console.log(myDate.toString()) //Thu Feb 29 2024 03:49:25 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString())//Thu Feb 29 2024
//console.log(myDate.toLocaleString()) //2/29/2024, 3:51:43 AM
//console.log(typeof myDate);

let myNewData = new Date("02-29-2024") //mm-dd-yyyy
myNewData = new Date(2024,1,29, 5, 20 , 40 ,160) // yyyy,mm-1,dd
//console.log(myNewData.toString())
//console.log(myNewData.getMilliseconds())
//console.log(myNewData.getDay())
//console.log(myNewData.getMonth())
//console.log(myNewData.getSeconds())
//console.log(myNewData.getDate())
let myNewDateMilliSeconds = myNewData.getTime()

//console.log(Math.floor(myNewDateMilliSeconds / (1000 * 60 * 60 * 24)))

console.log(myNewData.toLocaleString('default', {
    weekday: 'short',
}))