module.exports = function toReadable (number) {
    let One = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let Two = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number < 20) {
        return One[number];
    }
    if (number >= 20 && number < 100 && number % 10 === 0) {
        return Two[number/10];
    }
    if (number >= 20 && number < 100) {
        return `${Two[Math.floor(number/10)]} ${One[(number % 10)]}`;
    }
    if (number >= 100 && number < 1000 && number % 100 === 0) {
        return `${One[(number / 100)]} hundred`;
    }
    if (number >= 100 && number < 1000 && number % 10 === 0  && number % 100 >= 20) {
        return `${One[Math.floor(number / 100)]} hundred ${Two[Math.floor((number % 100) / 10)]}`;
    }
    if (number >= 100 && number < 1000 && number % 100 < 20) {
    return `${One[Math.floor(number / 100)]} hundred ${Two[Math.floor((number % 100) / 10)]}${One[Math.floor(number % 100)]}`;
    }
    if (number >= 100 && number < 1000) {
        return `${One[Math.floor(number / 100)]} hundred ${Two[Math.floor((number % 100) / 10)]} ${One[Math.floor(number % 110) % 10]}`;
    }
}
