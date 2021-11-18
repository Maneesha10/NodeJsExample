const fs = require('fs');
const path = require('path');
/*fs.mkdir("./TrainigDetails", function(err) {
    if (err) throw err;
      console.log('');
    });*/

/*fs.writeFile(path.join(__dirname,'TrainigDetails','student.txt'),'student name="Maneesha",stdid=20865'
  ,(err)=>{if(err) throw err;console.log('file written too...')});

  /*fs.readFile(path.join(__dirname,'/TrainigDetails','student.txt'),'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});*/

fs.appendFile(path.join(__dirname,'/TrainigDetails','/student.txt'),'place="ongole"',
      err=>{if(err) throw err;
             console.log('File append..')});
