requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        tests: "../tests",
        jquery: 'jquery-1.11.0',
        qunit: 'qunit-git'
    },
    shim: {
        qunit: ['jquery']
    }
});


require(['tests/test-math'], function (testMath) {
    'use strict';
    
    QUnit.init();
    QUnit.start();
    
    testMath.run();
});