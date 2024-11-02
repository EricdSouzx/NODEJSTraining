var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 40510})
// gerencia do ciclo de vida do web socket
wss.on('connection', function(ws){
    ws.on('message', function(message) {
        console.log('message received: %s', message)
    })

    setInterval(() => ws.send('${new date()}')
    , 1000);

})
