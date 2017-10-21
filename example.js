var jsonOperation = require('./json-read-write.js');

var object =
  {
  title: "Installing Packages",
  body: "Run npm install to install the packages. "
};

var insertAndPrintFunction = function(){
  var promise = new Promise(function(resolve, reject){
    jsonOperation.insertJsonObject(object);
    resolve();
  });
  return promise;
}

insertAndPrintFunction().then(function(){
  console.log("Printing the contents of JSON file: \n");
  jsonOperation.printJsonFile();
});
