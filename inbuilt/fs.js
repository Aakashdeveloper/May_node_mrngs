var file = require('fs');

/*file.writeFile('myFile.txt','This is from FS NodeJS',function(err){
    if(err) throw err;
    console.log("File Created");
})
file.appendFile('MyFile.txt',Math.floor(Math.random()*(99-1))+1 +' This is from FS NodeJS\n',function(err){
    if(err) throw err;
    console.log("File Created");
})


file.appendFile('myFile.txt',Math.floor(Math.random()*(99-1))+1 +' This is from FS NodeJS\n',function(err){
    if(err) throw err;
    console.log("File Created");
})

file.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})

file.rename('myFile.txt','MyText.txt',function(err){
    if(err) throw err;
    console.log('File Rename')
})

*/

//sync
file.appendFile('myFile.txt',Math.floor(Math.random()*(99-1))+1 +' This is from FS NodeJS\n',function(err){
    if(err) throw err;
    file.readFile('myFile.txt','utf-8',function(err,data){
        if(err) throw err;
        console.log(data)
    })
})

file.unlink('MyText.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
})