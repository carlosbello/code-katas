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


require(['tests/test-tenis_logic', 'tests/test-tenis_game'], function (testLogic, testGame) {
    'use strict';
    
    QUnit.init();
    QUnit.start();
    
    testLogic.run();
    testGame.run();
});