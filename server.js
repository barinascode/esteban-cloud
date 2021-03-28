const fs = require("fs")
const http = require('http');
const https = require('https');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/apiprod.ruzh.mx/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/apiprod.ruzh.mx/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/apiprod.ruzh.mx/chain.pem', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };






const server = async ({ app, express,  jwt, mongoose, loaders, routes }) => {
    
    // Inyected controllers
    const { handlersControllers }  = await loaders({ app, express, mongoose, jwt })

    await routes({ app, handlersControllers })
        
    // Starting both http & https servers
        // const httpServer = http.createServer(app);
        const httpsServer = https.createServer(credentials, app);

        // httpServer.listen(12000, () => {
        //     console.log('HTTP Server running on port 80');
        // });
        const port = 3200
        httpsServer.listen(port, () => {    
            console.log(`HTTPS Images cloud runing on port ${port}`);
        })
    }

module.exports = server