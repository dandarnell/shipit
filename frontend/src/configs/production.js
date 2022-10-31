module.exports = {
  TASKCLUSTER_ROOT_URL: 'https://firefox-ci-tc.services.mozilla.com',
  TREEHERDER_URL: 'https://treeherder.mozilla.org',
  AUTH0: {
    domain: 'auth.mozilla.auth0.com',
    clientID: '2dXygwTNP3p7iLTSaEWbdoiJFkjSBqm4',
    redirectUri: new URL('/login', window.location).href,
    scope: 'full-user-credentials openid profile email',
    responseType: 'token id_token',
    audience: 'https://auth.mozilla.auth0.com/api/v2/',
  },
  PRODUCTS: [
    {
      product: 'firefox',
      prettyName: 'Firefox Desktop',
      appName: 'browser',
      branches: [
        {
          prettyName: 'Beta',
          project: 'mozilla-beta',
          branch: 'releases/mozilla-beta',
          repo: 'https://hg.mozilla.org/releases/mozilla-beta',
          enableReleaseEta: false,
          disableable: true,
        },
        {
          prettyName: 'Release',
          project: 'mozilla-release',
          branch: 'releases/mozilla-release',
          repo: 'https://hg.mozilla.org/releases/mozilla-release',
          enableReleaseEta: true,
          rcBranch: 'releases/mozilla-beta',
          rcBranchVersionPattern: /b/,
          rcRepo: 'https://hg.mozilla.org/releases/mozilla-beta',
          numberOfPartials: 4,
          disableable: false,
        },
        {
          prettyName: 'ESR102',
          project: 'mozilla-esr102',
          branch: 'releases/mozilla-esr102',
          repo: 'https://hg.mozilla.org/releases/mozilla-esr102',
          enableReleaseEta: true,
          numberOfPartials: 5,
          disableable: false,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'devedition',
      prettyName: 'Firefox Developer Edition',
      appName: 'browser',
      branches: [
        {
          prettyName: 'Beta',
          project: 'mozilla-beta',
          branch: 'releases/mozilla-beta',
          repo: 'https://hg.mozilla.org/releases/mozilla-beta',
          enableReleaseEta: false,
          disableable: true,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'pinebuild',
      prettyName: 'Firefox pinebuild',
      appName: 'browser',
      branches: [
        {
          prettyName: 'Beta',
          project: 'mozilla-beta',
          branch: 'releases/mozilla-beta',
          repo: 'https://hg.mozilla.org/releases/mozilla-beta',
          enableReleaseEta: false,
          disableable: true,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'thunderbird',
      prettyName: 'Thunderbird',
      appName: 'mail',
      branches: [
        {
          prettyName: 'Beta',
          project: 'comm-beta',
          branch: 'releases/comm-beta',
          repo: 'https://hg.mozilla.org/releases/comm-beta',
          enableReleaseEta: false,
          disableable: false,
        },
        {
          prettyName: 'ESR102',
          project: 'comm-esr102',
          branch: 'releases/comm-esr102',
          repo: 'https://hg.mozilla.org/releases/comm-esr102',
          enableReleaseEta: false,
          disableable: false,
        },
      ],
      enablePartials: true,
    },
    {
      product: 'fenix',
      prettyName: 'Fenix',
      appName: 'fenix',
      branches: [
        {
          branch: '',
        },
      ],
      repositories: [
        {
          prettyName: 'Official repo',
          project: 'fenix',
          repo: 'https://github.com/mozilla-mobile/fenix',
          enableReleaseEta: false,
        },
      ],
      enablePartials: false,
    },
    {
      product: 'android-components',
      prettyName: 'Android-Components',
      appName: 'android-components',
      branches: [
        {
          branch: '',
        },
      ],
      repositories: [
        {
          // TODO bug 1797700, remove the android-components repo
          prettyName: 'Deprecated repo',
          project: 'android-components',
          repo: 'https://github.com/mozilla-mobile/android-components',
          enableReleaseEta: false,
        },
        {
          prettyName: 'Android monorepo',
          project: 'firefox-android',
          repo: 'https://github.com/mozilla-mobile/firefox-android',
          enableReleaseEta: false,
        },
      ],
      enablePartials: false,
    },
    {
      product: 'focus-android',
      prettyName: 'Focus for Android',
      appName: 'focus-android',
      branches: [
        {
          branch: '',
        },
      ],
      repositories: [
        {
          prettyName: 'Official repo',
          project: 'focus-android',
          repo: 'https://github.com/mozilla-mobile/focus-android',
          enableReleaseEta: false,
        },
      ],
      enablePartials: false,
    },
  ],
  XPI_MANIFEST: {
    branch: 'main',
    owner: 'mozilla-extensions',
    project: 'xpi-manifest',
    repo: 'https://github.com/mozilla-extensions/xpi-manifest',
  },
};
