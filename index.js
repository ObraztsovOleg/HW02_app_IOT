import x from 'express';

const app = x();
app.get('/*', r => r.res.send('hijksdhf')).listen(4321);