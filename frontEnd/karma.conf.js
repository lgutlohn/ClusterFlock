module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'public/libs/angular/angular.js',
      'public/libs/angular-route/angular-route.js',
      'public/libs/bower_components/angular-animate/angular-animate.js',
      'public/libs/bower_components/ngDraggable/ngDraggable.js',
      'public/libs/jquery/dist/jquery.js',
      'public/libs/nlp.js',
      'public/js/**/**/*.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'public/unit/**/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
    logLevel : config.LOG_ERROR,
    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    singleRun: true,

  });
};
