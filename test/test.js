// TODO: Use mocha for proper testing
var wrapper = require('../index.js');
var apiKey = '7c57e4645e08460f21f19a511d6f195e5f1a7a30';
// var failed_client = wrapper({}); // should throw exception
var client = wrapper({
	apiKey: apiKey
});
client.heartbeat(function(err,res){
	console.log(err, res);
});