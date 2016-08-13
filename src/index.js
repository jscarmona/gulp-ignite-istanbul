import runSequence from 'run-sequence';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';

export default {
  /**
   * Task name
   * @type {String}
   */
  name: 'istanbul',

  /**
   * Task description
   * @type {String}
   */
  description: 'Run instanbul code coverage',

  /**
   * Task default configuration
   * @type {Object}
   */
  config: {
    src: [
      './client/app/*.js',
      '!./client/app/*.spec.js',
    ],
    options: {
      instrumenter: Instrumenter,
    },
    reports: {},
    thresholds: {},
  },

  /**
   * Task help options
   * @type {Object}
   */
  help: {},

  /**
   * Task function
   * @param {object} config
   * @param {Function} end
   * @param {Function} error
   * @param {Object} gulp
   */
  fn(config, end, error, gulp) {
    if (!config.testTask) {
      error('A gulp test task is required.');
    }

    gulp.task('istanbul:instrument', () => (
      gulp.src(config.src)
        .pipe(istanbul(config.options))
        .pipe(istanbul.hookRequire())
    ));

    gulp.task('istanbul:report', () => (
      gulp.src(config.src, { read: false })
        .pipe(istanbul.writeReports(config.reports))
        .pipe(istanbul.enforceThresholds({ thresholds: config.thresholds }))
    ));

    runSequence.use(gulp)('istanbul:instrument', config.testTask, 'istanbul:report', end);
  },
};
