import express from 'express';

const app = express();

app.get('/*', r => r.res.send("sdfs")).listen(4321);
