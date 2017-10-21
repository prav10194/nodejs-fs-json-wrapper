# nodejs-fs-json-wrapper

A simple nodejs wrapper for inserting and deleting objects into a json file. Uses fs library to read/write the json file. 

Running the example.js - 
-------

1. Clone/Download zip of repository. 

2. Extract content of the zip.

3. Open cmd to run the following code - 
```cmd
cd "folderpath where zip is extracted"
npm install
```

4. After the installation, run -  
```cmd
npm start
```

Usage - 
-------

1. Import the file in your project - 

```node
var jsonOperation = require('./json-read-write.js');
```

2. Insert object in the json using - 

```node
var object =
  {
  title: "Installing Packages",
  body: "Run npm install to install the packages. "
};
jsonOperation.insertJsonObject(object);
```

use the following to create a promise function to print json after inserting an object - 

 ```node
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
 ```
