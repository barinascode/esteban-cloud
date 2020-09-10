
const   bodyParser  =   require('body-parser')
        cors        =   require('cors')


const myServer = ({ app, express }) => {
   
    app.get('/', (req, res) => { res.send('Api wellcome message')})
    app.get('/status', (req, res) => { res.status(200).end()})
    app.head('/status', (req, res) => { res.status(200).end() })
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static('uploads'));
    
    // app.set('llave', config.llave)

    return app
        
}

module.exports = myServer