const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/dotcs.github.io/' : ''   // customize this value
};