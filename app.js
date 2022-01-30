export default (express, bodyParser, CORS, Num) => {
    const app = express();
  
    
    app
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/*', async r => r.res.json(await Num.find()))
      .post('/*', async (req, res) => {
        const { number } = req.body;
        const newNum = new Num({ number });
        await newNum.save(); 
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        res.send(number);
        // console.log(login);
      });
  
    return app;
  }