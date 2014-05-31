define(['qunit', 'app/tenis_logic'], function (q, logic) {
    function run() {
        test('iniciarTanteo()', function () {
            var tanteoEsperado = {
                jugador1: 0,
                jugador2: 0
            };
            
            deepEqual(tanteoEsperado, logic.iniciarTanteo(), 
                    'El tanteo inicial debe ser 0 para ambos jugadores');
        });
    }
    
    return {
        run: run
    };
});