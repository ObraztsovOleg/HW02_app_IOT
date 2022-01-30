import { Server } from 'http';
import x from 'express';

const PORT = 4321;
const { log } = console;
const hu = { 'Content-Type': 'text/html; charset=utf-8' };
const app = x();
const mw0 = (r, rs, n) => rs.status(200).set(hu) && n();

app
  .get('/', r => r.res.send('dfgds'));

export default Server(app)
  .listen(process.env.PORT || PORT, () => log(process.pid));
