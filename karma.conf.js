module.exports = function(config){
  config.set({
    basePath : '.',

    frameworks: ['jasmine', 'dojo'],

    files: [
      'lib/js/angular.js',
      'lib/js/angular-mocks.js',
      'test/main.js',
      'https://ajax.googleapis.com/ajax/libs/dojo/1.9.1/dojo/dojo.js',
      'js/main.js',


      {pattern: 'js/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},
    ],


    exclude : [

    ],

    autoWatch : true,

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-dojo'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
