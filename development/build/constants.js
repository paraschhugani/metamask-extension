const BUILD_TARGETS = {
  DEVELOPMENT: 'dev',
  PRODUCTION: 'prod',
  E2E_TEST: 'test',
  E2E_TEST_DEV: 'testDev',
};

const TASKS = {
  CLEAN: 'clean',
  DEV: 'dev',
  LINT_SCSS: 'lint-scss',
  MANIFEST_DEV: 'manifest:dev',
  MANIFEST_PROD: 'manifest:prod',
  MANIFEST_TEST: 'manifest:test',
  MANIFEST_TEST_DEV: 'manifest:testDev',
  PROD: 'prod',
  RELOAD: 'reload',
  SCRIPTS_PROD: 'scripts:prod',
  SCRIPTS_CORE_DEV_STANDARD_ENTRY_POINTS:
    'scripts:core:dev:standardEntryPoints',
  SCRIPTS_CORE_DEV_CONTENTSCRIPT: 'scripts:core:dev:contentscript',
  SCRIPTS_CORE_DEV_DISABLE_CONSOLE: 'scripts:core:dev:disable-console',
  SCRIPTS_CORE_DEV_SENTRY: 'scripts:core:dev:sentry',
  SCRIPTS_CORE_DEV_PHISHING_DETECT: 'scripts:core:dev:phishing-detect',
  SCRIPTS_CORE_PROD_STANDARD_ENTRY_POINTS:
    'scripts:core:prod:standardEntryPoints',
  SCRIPTS_CORE_PROD_CONTENTSCRIPT: 'scripts:core:prod:contentscript',
  SCRIPTS_CORE_PROD_DISABLE_CONSOLE: 'scripts:core:prod:disable-console',
  SCRIPTS_CORE_PROD_SENTRY: 'scripts:core:prod:sentry',
  SCRIPTS_CORE_PROD_PHISHING_DETECT: 'scripts:core:prod:phishing-detect',
  SCRIPTS_CORE_TEST_LIVE_STANDARD_ENTRY_POINTS:
    'scripts:core:test-live:standardEntryPoints',
  SCRIPTS_CORE_TEST_LIVE_CONTENTSCRIPT: 'scripts:core:test-live:contentscript',
  SCRIPTS_CORE_TEST_LIVE_DISABLE_CONSOLE:
    'scripts:core:test-live:disable-console',
  SCRIPTS_CORE_TEST_LIVE_SENTRY: 'scripts:core:test-live:sentry',
  SCRIPTS_CORE_TEST_LIVE_PHISHING_DETECT:
    'scripts:core:test-live:phishing-detect',
  SCRIPTS_CORE_TEST_STANDARD_ENTRY_POINTS:
    'scripts:core:test:standardEntryPoints',
  SCRIPTS_CORE_TEST_CONTENTSCRIPT: 'scripts:core:test:contentscript',
  SCRIPTS_CORE_TEST_DISABLE_CONSOLE: 'scripts:core:test:disable-console',
  SCRIPTS_CORE_TEST_SENTRY: 'scripts:core:test:sentry',
  SCRIPTS_CORE_TEST_PHISHING_DETECT: 'scripts:core:test:phishing-detect',
  STATIC_DEV: 'static:dev',
  STATIC_PROD: 'static:prod',
  STYLES: 'styles',
  STYLES_DEV: 'styles:dev',
  STYLES_PROD: 'styles:prod',
  TEST: 'test',
  TEST_DEV: 'testDev',
  ZIP: 'zip',
};

module.exports = { BUILD_TARGETS, TASKS };
