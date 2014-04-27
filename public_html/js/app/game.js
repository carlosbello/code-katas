requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery-1.11.0'
    }
});


require(['app/game_logic', 'jquery'], function (logic, $) {
    logic.startGame();
    $('#btnAbrir').click(function () {
        alert(logic.play($('#tbxUserCode').val()));
    });
});
