const accountId = 12345
let accountEmail = "test@google.com"
var accountPassword = "abc1234"
accountCity = "Mumbai"
let accountState;
// accountId = 234 -> not allowed

accountEmail = "admin@gmail.com"
accountPassword = "1234abc"
accountCity = "Kochi"

console.log(accountId);

/*
Don't use var because of issues in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])