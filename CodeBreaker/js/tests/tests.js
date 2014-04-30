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


require(['tests/test-game_logic'], function (testLogic) {
    'use strict';
    
    QUnit.init();
    QUnit.start();
    
    testLogic.run();
});