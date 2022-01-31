export default (express, bodyParser, CORS, Num) => {
    const app = express();
  
    
    app
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/*', async r => r.res.json(await Num.find()))
      .post('/*', async (req, res) => {

        const { number } = req.body;
        var is_in_bd = false;
        var is_lower_then = false;
        var bd_data = JSON.parse(JSON.stringify(await Num.find()));
        var new_number = String(Number(number) + 1);

        for (var obj in bd_data) {
          if (Number(bd_data[obj]["number"]) == Number(number)) is_in_bd = true; 
          if ((Number(bd_data[obj]["number"]) - Number(number)) == 1) is_lower_then = true;
        } 

        if (!is_in_bd) {
          try {
            if (!is_lower_then) {
              const newNum = new Num({ number });

              await newNum.save(); 
              res.send(new_number);
            } else {
              res.send("You've sent the number that lower then on of the numbers in DB, that you'd send before");
            }
          }catch(e) {
            res.send('Your request is not correct');
          }
        } else {

          res.send("You've already sent this number");
        }

      
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        // console.log(login);
      });
  
    return app;
  }