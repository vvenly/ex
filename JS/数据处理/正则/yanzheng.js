
// let zzPhone = '/^[1-9]\d{10}$/';
let phone1 = 13256231200
let phone2 = '11111aaaa'
// console.log('phone1', zzPhone.test(phone1))

var  objRegExp= new RegExp(/^[1-9]\d{10}$/) ;
console.log('tag', objRegExp.test(phone1)) ;  
console.log('tag', objRegExp.test(phone2)) ;  