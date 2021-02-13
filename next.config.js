const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/namc.github.io/' : ''   // customize this value,
  images: {
    loader: "imgix",
  }
};
