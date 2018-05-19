var AWS = require('aws-sdk'),
  fs = require('fs');
var config = require('/config.json');
    
AWS.config.update({ accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY});

fs.readFile('del.txt', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.client.putObject({
    Bucket: '',
    Key: 'AWS_ACCESS_KEY_ID',
    Body: base64data,
    ACL: ''
  },function (resp) {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});