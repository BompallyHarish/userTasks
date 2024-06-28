// let fromDate1 = moment().tz(timezonevalue)//.startOf("day").format('MM/DD/YYYY')
// let currentDateInMoment = moment().tz(timezonevalue).format('YYYY-MM-DD hh:mm:ss')
// let formatedDate = getParticularMomentStartOfDayInDiffTZ(fromDate1, timezonevalue).format('YYYY-MM-DD')
const moment = require('moment')
const timezonevalue = require('moment-timezone')
let mongoose = require('mongoose');
let ObjectID = mongoose.Types.ObjectId;
let array1 = ['Pending', 'Completed']
let string1 = 'Pending'

let currentDate1 = moment()
let currentDate2 = currentDate1.tz('America/New_York')
console.log('currentDate1 ', currentDate2)

// if (string1.includes(string1)) {
//     console.log('true')
// } else {
//     console.log('false')
// }

// console.log(array1.includes(string1))

let a = 0
// if(a>-1){
//     console.log('true')
// }
// else{
//     console.log('false')
// }


// let leGroupEffectiveDate = (req,res)=>{
//     let body = req.body
//     let companyId = req.jwt.companyId
//     return new Promise((resolve, reject)=>{
//         resolve(null)
//     })
//     .then(async ()=>{
//         let data

//         res.status(200).json({
//             status: true,
//             message:" Successfully fetched Users LE group effective dates"
//             //data: data
//         })

//     })
//     .catch((err)=>{
//         console.log(err)
//         utils.errorLog()
//         res.status(400).json({
//             status: false,
//             message: "Error while fecting users LE group effective dates",
//             error: err
//         })
//     })
// }

let array2 = [
    { _id: "9tgii8ynfyujb", },
    { _id: "79hf9tgii8ynfyujb" }]
let array3 = [
    { leave_eligibility_id: "9tgii8ynfyujb" },
    { leave_eligibility_id: "9tgii8ynfyujbjbvuj" },
    { leave_eligibility_id: "9tgii8ynfyujbhngfyi" },
    { leave_eligibility_id: "79hf9tgii8ynfyujb" }
]

for (let a of array2) {
    array3 = array3.filter((x) => {
        // console.log(x.leave_eligibility_id != a._id)
        return x.leave_eligibility_id != a._id
    })
}

let a1 = {
    b: "Hello",
    c: "World",
    general: {
        d: "How",
        e: "are you"
    }
}
// console.log(delete a1.general.d)
// console.log(a1)



// var XLSX = require('xlsx')
// var Excel = require('exceljs');
// const uuid = require('uuid');
// var workbook = new Excel.Workbook();
// var worksheet = workbook.addWorksheet('Test_Worksheet');
// let columns = ['Test_Column']
// worksheet.columns = columns
// worksheet.addRows(array4)
// let color = ['8B919B']
// let newPath = "/tmp/" + uuid.v1() + ".xlsx"
// let newFile = workbook.xlsx.writeFile(newPath);
// for(let i =0; i<array4.length; i++){
//     worksheet.getRow(i + 1).eachCell(cell => {
//         cell.fill = utils.excelCellFillColor(colour[0])
//     })
//     console.log('true')
// }

// let obj2 ={
//     value: null
// }
// if(!obj2.value){
//     console.log('true')
// }
// console.log(obj2.value)

// let start_date = moment().startOf('week')
// let currentDate = moment()
// if(currentDate > start_date){
//     console.log('moment working fine')
// }

// let HHMM = moment("2023-03-03T23:30:00.000+05:30").tz("America/New_York").format('HH:MM')
// console.log(HHMM)
// { fieldToShow: "Leave Eligibility Group", fieldName: "name", section: "leave_eligibility_group_history", subSection: "", excludeFromFilters: true },

// let holidayDocs = [0,1,2,3,4]
// let holiday =[9,8]
// holidayDocs.push.apply(holidayDocs, holiday)
// console.log(holidayDocs)
// let obj3 ={
//     name: 'Harish'
// }
// let counter = 2
// let test1 = 'policy Name ' + counter
// obj3[test1] = test1
// console.log(obj3[test1])

// let currentMonth = "Leave Policy - Usage report, Auto generated for  "+ moment().format('MMMM YYYY')
// console.log(currentMonth)



// let app = {

// }
// let test = app._id
// // app._id = app._id.map((x)=> ObjectID(x))
// console.log(test)

let rounding1 = 59.6254
console.log('rounding ', parseFloat(rounding1).toFixed(2))
// let array7 = []
// let array6 = ['Harish', 'Vrinda']

// array7 = array7.concat(array6)
// console.log(array7)

// let companyName = 'TestCompany'
// let splitName = companyName.split('')
// console.log(splitName)
// let name = splitName.splice(0, 3)
// console.log(name.join(''))

let result = []
let fxn1 = () => {
    for (var i = 0; i < 5; i++) {
        // console.log('ivalue ', i)
        result[i] = function () {
            console.log('data2 ', i)
            return i
        }
        // console.log('data ', result[i])
    }
    return result
}
var increment = fxn1()
// console.log('increment ', increment)
var sum = 0
for (var i = 0; i < 5; i++) {
    // console.log('before ', sum)
    sum += increment[i]()
    // console.log('after ', sum)
}
console.log(sum)

let condition
if (condition) {
    console.log('loop Passed')
}

var str = "java is a scripting script language"
var re = new RegExp('Script', "i")
var result3 = re.exec(str)
console.log(result3)

const fish = {
    size: 'small'
}
const mouse = {
    name: 'Harish',
    small: true
}
console.log(mouse[fish.size])

var array = eval("['harish', 'vrinda', 'sangeetha']")
console.log(array[1])

var str1 = 'James+5Bond005'
var regex = /[a-z][0-9]+/
console.log((str1.search(regex)))

function roundToNearest50(inputNumber) {
    // Calculate the remainder when dividing by 50 to determine the distance to the next multiple of 50
    let remainder = inputNumber % 50;

    // Calculate the number rounded down to the nearest multiple of 50
    let roundedDown = inputNumber - remainder;

    // Calculate the number rounded up to the nearest multiple of 50
    let roundedUp = inputNumber + (50 - remainder);

    // Determine which rounded number is closer to the input number
    if (remainder <= 25) {
        return roundedDown;
    } else {
        return roundedUp;
    }
}

// Example usage:
let inputNumber = 1299; // This can be any number
let outputNumber = roundToNearest50(inputNumber);
console.log("Output Number:", outputNumber);

const obj1 = {
    p: 1,
    q: 2
}
const { p, q } = obj1
console.log(p, q)

let max_ref; // stores the LIS 
/* To make use of recursive calls, this function must return 
two things: 
1) Length of LIS ending with element arr[n-1]. We use 
  max_ending_here for this purpose 
2) Overall maximum as the LIS may end with an element 
  before arr[n-1] max_ref is used this purpose. 
The value of LIS of full array of size n is stored in 
*max_ref which is our final result */
function _lis(arr, n) {
    // base case 
    if (n == 1)
        return 1;

    // 'max_ending_here' is length of LIS ending with arr[n-1] 
    let res, max_ending_here = 1;
    /* Recursively get all LIS ending with arr[0], arr[1] ... 
       arr[n-2]. If   arr[i-1] is smaller than arr[n-1], and 
       max ending with arr[n-1] needs to be updated, then 
       update it */
    for (let i = 1; i < n; i++) {
        res = _lis(arr, i);
        if (arr[i - 1] < arr[n - 1] && res + 1 > max_ending_here)
            max_ending_here = res + 1;
    }
    // Compare max_ending_here with the overall max. And 
    // update the overall max if needed
    if (max_ref < max_ending_here)
        max_ref = max_ending_here;

    // Return length of LIS ending with arr[n-1] 
    return max_ending_here;
}

// The wrapper function for _lis() 
function lis(arr, n) {
    // The max variable holds the result 
    max_ref = 1;

    // The function _lis() stores its result in max 
    _lis(arr, n);

    // returns max
    return max_ref;
}

// driver program to test above functions 
let arr = [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]//[10, 12, 4, 6, 100, 2, 56, 34, 79]//,45,33,12,45,67,89]
let n = arr.length;
console.log("Length of lis is "
    + lis(arr, n) + "<br>");

let count1 = []
for (let i = 0; i < arr.length; i++) {
    let count = 1
    let arr1 = [arr[i]]
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            arr[i] = arr[j]
            arr1.push(arr[j])
            count += 1
            // console.log('if123 ', arr1)
        }
        else {
            for (let k = arr1.length; k > 0; k--) {
                if ((arr1[k - 2] < arr[j])) {
                    // console.log('before ', arr1)
                    arr1.pop()
                    arr[i] = arr[j]
                    // console.log('after ', arr1)
                }
            }
        }
    }
    // console.log(arr1)
    count1.push(count)
    // console.log('total count ')
}
console.log(count1)
count1 = count1.sort()
console.log('highest Subset ', count1[count1.length - 1])


// function switchFxn() {
//     switch (0) {
//         case 0:
//             let greetings = "Welcome"
//             console.log(greetings +' Harish')
//             break;
//         case (1):
//             let greetings = "Thank you"
//             console.log(greetings +' Harish')
//             break
//         default:
//             break;
//     }
// }

// a123 = 1
// console.log(a123)
// let a123

// a234=1
// console.log(a234)
// let a234

let syne1 = [1, 2, 3]
let syne2 = [4, 5, 6]
let syne3 = [7, 8, 9]
syne1 = syne1.concat(syne2, syne3)
console.log('syne1 ', syne1)