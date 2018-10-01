/* eslint-disable max-len, import/no-unresolved */
import { assets } from './fragments';

export default (app, route, req) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <link rel="shortcut icon" href="https://www.reliancedigital.in/_ui/responsive/common/static/favicons/favicon-32x32.png">
    </head>
    <body>
      <div id="root">${app}</div>
      <script src="${assets.main.js}"></script>
      <script src="${assets.vendor.js}"></script>
    </body>
  </html>`;
