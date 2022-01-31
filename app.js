export default (express, bodyParser, CORS, Num) => {
    const app = express();
  
    
    app
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/*', async r => r.res.json(await Num.find()))
      .post('/*', async (req, res) => {
        const { number } = req.body;
        var is_in_bd = false;
        var bd_data = JSON.parse(JSON.stringify(await Num.find()));

        for (var obj in bd_data) {
          if (bd_data[obj]["number"] == number) is_in_bd = true; 
        } 

        const newNum = new Num({ number });
        
        if (is_in_bd) {
          try {
            await newNum.save(); 
            res.status(201).send(bd_data[0]['number']);
          }catch(e) {
            res.status(400).send('Your request is not correct');
          }
        } else {

          res.send("You've already sent this number");
        }

      
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        // console.log(login);
      });
  
    return app;
  }