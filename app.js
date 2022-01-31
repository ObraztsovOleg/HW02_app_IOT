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
          if (Number(bd_data[obj]["number"]) == Number(number)) is_in_bd = true; 
        } 

        if (is_in_bd) {
          const newNum = new Num({ number });
      
          try {
            await newNum.save(); 
            // res.status(201).send(bd_data[0]['number']);
            res.send(is_in_bd);
          }catch(e) {
            res.status(400).send('Your request is not correct');
          }
        } else {

          // res.send("You've already sent this number");
          res.send(is_in_bd);
        }

      
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        // console.log(login);
      });
  
    return app;
  }