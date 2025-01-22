module.exports = function(config) {
  config.set({
    // Base path, that will be used to resolve all patterns (like files, exclude)
    basePath: '',

    // Frameworks to use (Jasmine is default for Angular projects)
    frameworks: ['jasmine'],

    // List of files/patterns to load in the browser
    files: [
      'src/test.ts', // The main entry point for testing
      { pattern: 'src/**/*.spec.ts', watched: false } // Include all .spec.ts files
    ],

    // Preprocessors to use (none for this example)
    preprocessors: {
      'src/test.ts': ['karma-typescript'], // Add TypeScript support if needed
    },

    // Reporters to use (default is 'progress')
    reporters: ['progress', 'kjhtml'],

    // Port for the Karma server
    port: 9876,

    // Enable/disable colors in the output (useful for debugging)
    colors: true,

    // Level of logging (karma-verbose for more details)
    logLevel: config.LOG_INFO,

    // Enable/disable watching files and executing tests whenever anything changes
    autoWatch: true,

    // Start these browsers (use Chrome for local testing)
    browsers: ['Chrome'],

    // Continuous Integration mode (if true, Karma captures browsers, runs the tests, and exits)
    singleRun: false,

    // Concurrency level (how many browsers to start at once)
    concurrency: Infinity
  });
};
