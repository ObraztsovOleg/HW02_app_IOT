export default (express, bodyParser, CORS, Num) => {
    const app = express();
  
    
    app
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/*', async r => r.res.json(await Num.find()))
      .post('/*', async (req, res) => {
        const { number } = req.body;
        // var bd_data = await Num.find();

        // const newNum = new Num({ number });
        try {
          // await newNum.save(); 
          res.status(201).send(number);
        }catch(e) {
          res.status(400).send('Your request is not correct');
        }
      
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        // console.log(login);
      });
  
    return app;
  }