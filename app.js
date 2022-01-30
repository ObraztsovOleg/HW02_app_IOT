export default (express, bodyParser, CORS, User) => {
    const app = express();
  
    
    app
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/*', async r => r.res.json(await User.find()))
      .post('/*', async (req, res) => {
        const {login} = req.body;
        // const newUser = new User({login});
        // await newUser.save(); 
    
  
        // res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', ...CORS});
        res.send(login);
        // console.log(login);
      });
  
    return app;
  }