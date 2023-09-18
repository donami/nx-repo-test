const name = 'donami-conversation';
// const srcRoot = `libs/${name}`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: `dist/conversation`,
  // pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`libs/conversation/*`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `libs/conversation/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [
          `libs/conversation/package.json`,
          `libs/conversation/CHANGELOG.md`,
        ],
        message:
          `release(version): Release ${name} ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
