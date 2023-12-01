/** @type {import('next').NextConfig} */

const crypto = require('crypto');
const path = require('path');
let commitHash = require('child_process')
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim();

const hashOnlyIdent = (context, _, exportName) =>
    "uwu_"+crypto
        .createHash('md5')
        .update(
        `filePath:${path
            .relative(context.rootContext, context.resourcePath)
            .replace(/\\+/g, '/')}#className:${exportName}#BuildHash:${commitHash}`,
        )
        .digest('hex')
        .replace(/^(-?\d|--)/, '_$1').slice(0, 6);

const nextConfig = {
    webpack: (config, {dev}) => {
        const rules = config.module.rules
          .find((rule) => typeof rule.oneOf === 'object')
          .oneOf.filter((rule) => Array.isArray(rule.use));
    
        if (!dev)
          rules.forEach((rule) => {
            rule.use.forEach((moduleLoader) => {
              if (
                moduleLoader.loader?.includes('css-loader') &&
                !moduleLoader.loader?.includes('postcss-loader') &&
                moduleLoader.options !== undefined &&
                moduleLoader.options.modules !== undefined
              )
                moduleLoader.options.modules.getLocalIdent = hashOnlyIdent;
            });
          });
        return config;
    },
    poweredByHeader: false,
    generateBuildId: async () => commitHash
}

module.exports = nextConfig