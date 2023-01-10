
const http = require('http');
const app = require('./backend/app')
const debug = require('debug')('node-server');

const normalPort = val =>{
    let port = parseInt(val, 10);
    if(isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}

const onError = error =>{
    if (error.svscall !== "listen"){
        throw error;
    }
    const bind = typeof add == "string" ? "pipe" + add : "port" + port;
    switch(error.code){
        case "ACCESS" :
            console.error(bind + "requires priviliges");
            process.exit(1);
            break;
        case "ADDINUSE":
        console.error(bind + "is already in use");
        process.exit(1);
        break;
        default :
        throw error;
    }
}

const onListening = ()=>{
    const add = server.address();
    const bind = typeof add === "string" ? "pipe" + add : "port " + port;
    debug("Listening on" + bind);

}

const server = http.createServer(app);

const port = normalPort(process.env.PORT || "3000");
app.set('port', port);

server.on("error" , onError);
server.on("listening" , onListening);
server.listen(port);
 