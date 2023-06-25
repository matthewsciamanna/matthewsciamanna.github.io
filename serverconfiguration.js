const http = require('http');
const app = require('./server'); // Assuming your server-side script file is named 'server.js'

const port = process.env.PORT || 3000; // Use the environment variable PORT or default to port 3000

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
