/* eslint-disable max-len, import/no-unresolved */
// import { assets } from './fragments';
// import assetsManifest from '../../../../build/client/assetsManifest.json';
export default (app, route, req) => `
  <!doctype html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="http://localhost:8080/build/client/js/main.js"></script>
    </body>
  </html>`;
