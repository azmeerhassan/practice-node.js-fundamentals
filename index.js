var fs = require('fs')

fs.unlink('myNewTextFile1.txt', (err)=> {if (err) throw err 
    else
    console.log("deleted");
    
 })





