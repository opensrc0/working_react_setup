/* eslint-disable max-len, import/no-unresolved */
import { assets } from './fragments';
// import assetsManifest from './../../../../ ../client/assetsManifest.json';

export default (app, route, req) => `
  <!doctype html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="${assets.main.js}"></script>
      <script src="${assets.vendors.js}"></script>
    </body>
  </html>`;
