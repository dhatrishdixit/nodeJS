const cluster = require("node:cluster");
const http = require("node:http");

// main property of child cluster is they run on the same port

if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);
    
    // Create worker processes
    cluster.fork();
    cluster.fork();

    // Handle worker exits
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker process ${process.pid} started`);

    const server = http.createServer((req, res) => {
        const url = req.url;
        if (url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Home");
        }
        else if (url === "/slow-page") {
            for (let i = 0; i <= 10000000000; i++) { }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Slow page");
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Not Found");
        }
    });

    // Handle server errors
    server.on('error', (error) => {
        console.error('Server error:', error);
    });

    server.listen(3000, () => console.log(`Server running on port 3000 - Worker ${process.pid}`));
}