const fs = require('fs');
const jsonfile = 'examplejson.json';

var readFileAsJson = function() {
  var promise = new Promise(function(resolve, reject){
    var fileAsString = fs.readFileSync(jsonfile);
    var fileAsJson = JSON.parse(fileAsString);
    resolve(fileAsJson);
  });
  return promise;
}

var insertJsonObject = function(object){
  readFileAsJson().then(function(fileAsJson){
    fileAsJson.objectarray.push(object); //objectarray is the array defined in your json.
    fs.writeFileSync(jsonfile, JSON.stringify(fileAsJson, null, 2));
  });

}

var printJsonFile = function(){
  console.log(JSON.parse(fs.readFileSync(jsonfile)));
}

var deteleJsonObject = function(key){

}

module.exports = {
  insertJsonObject: insertJsonObject,
  printJsonFile: printJsonFile
}
