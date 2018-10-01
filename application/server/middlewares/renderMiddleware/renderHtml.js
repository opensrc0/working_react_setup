/* eslint-disable max-len, import/no-unresolved */
import { assets } from './fragments';
// import assetsManifest from './../../../../ ../client/assetsManifest.json';
console.log(assets, 'hey');

export default (app, route, req) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="${assets.main.js}"></script>
      <script src="${assets.vendor.js}"></script>
    </body>
  </html>`;
