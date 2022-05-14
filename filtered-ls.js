const fs = require('fs');
const path = require('path');

let dir = process.argv[2];
let ext = '.'+ process.argv[3];

fs.readdir(dir,function(err,list){
    if(err){console.log(err)}else{
        list.forEach(file=>{
            if(path.extname(file)===ext){
                console.log(file)
            }
        })
    }
})