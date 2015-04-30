var http = require('http');
var score = require('./ws_medals');


var competition = new score();
competition.youWin(1);
competition.youWin(1);
competition.youWin(1);
competition.youLose(1);
//score('win');
//score('win');
//score('win');
//score('lose');

var reqHandler = function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('success\n' + competition.msg);
};

var server = http.createServer(reqHandler);

server.listen(3000,'127.0.0.1');