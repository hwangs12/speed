const fibonacci = function (n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

const http = require('http');
const url = require('url')

http.createServer(function (req, res) {
    const urlP = url.parse(req.url, true);
    console.log(req.url)
    console.log(urlP)

    let fibo;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (urlP.query['n']) {
        console.time('fibonazzi')
        fibo = fibonacci(urlP.query['n']); //Blocking
        console.timeEnd('fibonazzi')
        res.end('Fibonacci ' + urlP.query['n'] + '=' + fibo);
    } else {
        res.end('USAGE: http://127.0.0.1:8124?n=## where ## is the Fibonacci number desired')
    }
}).listen(8124, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8124')