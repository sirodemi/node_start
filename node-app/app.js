const http = require('http');
const fs = require('fs')
const ejs = require('ejs');

const index_page = fs.readFileSync('./index.ejs','UTF-8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('server start');

function getFromClient(request,response){
	var content = ejs.render(index_page,
		{
            title:"Index",
            content:"sample page",
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
}

