module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        authToken: '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',
        repository: {
          owner: 'X-WC',
          name: 'my-electron-app',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
};
