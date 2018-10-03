import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderMiddleware from './middlewares/renderMiddleware/renderMiddleware';

const app = express();
// app.use('/rildigitalws/', proxy('https://sit-digital.ril.com', { proxyReqPathResolver: (req) => `/api${req.url}` }));

// app.use('/rildigitalws/', proxy({target: 'https://sit-digital.ril.com/rildigitalws/', changeOrigin: true}));
app.use('*', renderMiddleware);
// app.set('port', process.env.PORT || 7000);
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {

});
