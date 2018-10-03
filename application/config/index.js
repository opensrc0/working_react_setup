import local from './local';
import development from './development';
import staging from './staging';
import production from './production';

const __APP_ENV__ = 'local';

const config = {
  local,
  development,
  staging,
  production,
};

export default config[__APP_ENV__];
