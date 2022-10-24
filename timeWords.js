// 24 hour string into words
let numberToWords = require('number-to-words')

function timeWord (timeStr) {
    let time = [];
    const splitArr = timeStr.split(":");
    let num = parseInt(splitArr[1]);
    switch (splitArr[0]) {
        case "00":
           time.push("midnight")
            break
        case "01":
            time.push("one")
            break
        case "02":
            time.push("two")
            break
        case "03":
            time.push("three")
            break
        case "04":
            time.push("four")
            break
        case "05":
            time.push("five")
            break
        case "06":
            time.push("six")
            break
        case "07":
            time.push("seven")
            break
        case "08":
            time.push("eight")
            break
        case "09":
            time.push("nine")
            break
        case "10":
            time.push("ten")
            break
        case "11":
            time.push("eleven")
            break
        case "12":
            time.push("twelve")
            break                
    }
    time.push(numberToWords.toWords(num))
    time = time.toString().replace(/,/g, " ");
    console.log(time)
    return time;
};




console.log(timeWord("00:00")); // 'midnight'
console.log(timeWord("12:00")); // 'noon'
console.log(timeWord("06:01")); // 'six oh one am'
console.log(timeWord("06:10")); // 'six ten am'
console.log(timeWord("06:18")); // 'six eighteen am'
console.log(timeWord("06:30")); // 'six thirty am'
console.log(timeWord("10:34")); // 'ten thirty four am'

const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }

    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log(timeWords("03:30"));