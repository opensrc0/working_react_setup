import 'babel-polyfill';
import express from 'express';
import renderMiddleware from './middlewares/renderMiddleware/renderMiddleware';

const app = express();
app.use('*',renderMiddleware);
// app.set('port', process.env.PORT || 7000);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {

});
