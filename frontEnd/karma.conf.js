module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'public/libs/angular/angular.js',
      'public/libs/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'public/unit/**/*.js',
      'public/js/services/**/*.js',
      'public/js/controllers/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
