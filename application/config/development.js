export default {
  hostUrl: __BROWSER__ ? '' : process.env.API_URL,
  webUrl: __BROWSER__ ? '' : process.env.API_URL,
};
