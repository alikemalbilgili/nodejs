var fs = require('fs');

setTimeout( func = () =>{
return fs.writeFile('employees.json', ' {"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) throw err
})},1000)
setTimeout(func = () =>{
   return fs.readFile("employees.json", (err) => {
    if (err) throw err
})}, 2000);

setTimeout(func = () =>{
  return  fs.readFile("employees.json", (err) => {
    if (err) throw err
})}, 3000);

setTimeout(func = () =>{
   return fs.writeFile('employees.json', '{"name": "Employee 2 Name", "salary": 20000}', 'utf8', (err) => {
    if (err) throw err
})}, 4000);

setTimeout(func = () =>{
 return fs.unlink("employees.json",(err) => {
    if (err) throw err
})}, 5000);

